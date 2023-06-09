import { transparentize } from 'polished';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 16px;

  > div {
    flex-direction: column;
  }
`;

export const SelectTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;

  button {
    display: block;
    margin-right: 16px;

    border-radius: 4px;
    border: 0;

    text-align: center;

    &.selected {
      padding: 8px 48px;

      background-color: ${Colors.teal};

      font-size: 1.6rem;
      font-weight: 500;

      color: ${Colors.white};
    }

    &.not-selected {
      padding: 8px 48px;

      background-color: ${Colors.lightTeal};

      font-weight: 500;

      color: ${Colors.black};
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;

  input {
    padding: 12px;
    width: 100%;

    border: 0;
    border-radius: 4px 0 0 4px;

    background-color: ${transparentize(0.95, Colors.black)};

    font-size: 1.4rem;
    font-weight: 400;
    color: ${Colors.black};
  }

  button {
    display: block;

    cursor: pointer;

    border-radius: 0 4px 4px 0;
    border: 0;

    text-align: center;

    padding: 8px 16px;

    background-color: ${Colors.teal};

    font-size: 1.6rem;
    font-weight: 500;

    color: ${Colors.white};
  }
`;

export const GoToOccurrenceContainer = styled.div`
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${Colors.black};

    margin-bottom: 7px;
  }

  > div {
    display: flex;

    input {
      padding: 12px;
      width: 100%;

      border: 0;
      border-radius: 4px 0 0 4px;

      background-color: ${transparentize(0.95, Colors.black)};

      font-size: 1.4rem;
      font-weight: 400;
      color: ${Colors.black};
    }

    button {
      display: block;

      cursor: pointer;

      border-radius: 0 4px 4px 0;
      border: 0;

      text-align: center;

      padding: 8px 16px;

      background-color: ${Colors.teal};

      font-size: 1.6rem;
      font-weight: 500;

      color: ${Colors.white};
    }
  }
`;
