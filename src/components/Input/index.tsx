import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInput as TextInputRN, TextInputProps } from 'react-native';

import { useField } from '@unform/core';
import { transparentize } from 'polished';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container, ErrorText, Icon, TextInput, Wrapper } from './styles';

interface IProps extends TextInputProps {
  name: string;
  icon: string;
}

interface IValueReference {
  value: string;
}

interface IRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<IRef, IProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<TextInputRN>(null);

  const {
    registerField,
    defaultValue = '',
    fieldName,
    error,
    clearError,
  } = useField(name);
  const inputValueRef = useRef<IValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
          placeholderTextColor={transparentize(0.6, Colors.black)}
          keyboardAppearance={'dark'}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />

        {!!icon && (
          <Icon
            name={icon}
            size={20}
            isFocused={isFocused || isFilled}
            hasError={!!error}
          />
        )}
      </Wrapper>

      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(Input);
