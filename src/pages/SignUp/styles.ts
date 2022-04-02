import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90%;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 480px;

    h1 {
      color: var(--Black);
      margin-bottom: 24px;
      text-align: center;
      font-size: 4.1rem;
    }

    h1 {
      color: var(--Black);
      margin-bottom: 48px;
      text-align: center;
      font-size: 4.1rem;
    }

    a {
      display: block;
      width: 100%;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--Black);
    }

    strong {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--Black);
      text-align: left;
      margin-bottom: 12px;
      display: block;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  margin-left: 80px;

  img {
    width: 80%;
  }
`;
