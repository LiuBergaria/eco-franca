import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 32px;
  background-color: ${Colors.black};
  color: ${Colors.white};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-style: normal;
      font-size: 1.8rem;
      font-weight: 500;

      svg {
        margin-left: 24px;
      }
    }

    button {
      flex: 0;
      background-color: ${Colors.red};

      padding: 8px 24px;
      margin-left: 32px;
      margin-bottom: 0;

      font-size: 1.4rem;
    }
  }
`;
