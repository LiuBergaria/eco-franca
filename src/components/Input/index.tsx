import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { TextInput as TextInputRN, TextInputProps } from 'react-native';

import { useField } from '@unform/core';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Container,
  ErrorText,
  Icon,
  IconContainer,
  TextInput,
  Wrapper,
} from './styles';

interface IProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  name: string;
  icon?: string;
}

interface IValueReference {
  value: string;
}

interface IRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<IRef, IProps> = (
  { name, icon, secureTextEntry, ...rest },
  ref,
) => {
  const {
    registerField,
    defaultValue = '',
    fieldName,
    error,
    clearError,
  } = useField(name);

  const inputElementRef = useRef<TextInputRN>(null);
  const inputValueRef = useRef<IValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    clearError();
  }, [clearError]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  const pickedIcon = useMemo(() => {
    const selectedIcon = secureTextEntry
      ? passwordHidden
        ? 'eye-slash'
        : 'eye'
      : icon;

    const onPress = secureTextEntry
      ? () => setPasswordHidden(!passwordHidden)
      : undefined;

    return (
      !!selectedIcon && (
        <IconContainer onPress={onPress}>
          <Icon
            name={selectedIcon}
            size={20}
            isFocused={isFocused || isFilled}
            hasError={!!error}
          />
        </IconContainer>
      )
    );
  }, [error, icon, isFilled, isFocused, passwordHidden, secureTextEntry]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current?.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Wrapper>
        <TextInput
          ref={inputElementRef}
          hasError={!!error}
          keyboardAppearance={'dark'}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          secureTextEntry={secureTextEntry && passwordHidden}
          {...rest}
        />

        {pickedIcon}
      </Wrapper>

      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(Input);
