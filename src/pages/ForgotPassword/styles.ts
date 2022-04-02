import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: left;

    h3 {
      text-align: center;
      font-family: Inter, sans-serif;
      font-weight: 700;
      font-size: 2.1rem;
      color: var(--Black);
      margin-bottom: 20px;

      span {
        color: var(--Blue);
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }

    h1 {
      color: var(--Black);
      margin-bottom: 48px;
      text-align: center;
      font-size: 4.1rem;
    }

    a {
      display: block;
      font-family: 'Inter', sans-serif;
      width: 100%;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--Black);
    }

    strong {
      font-family: 'Inter', sans-serif;
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
  img {
    width: 90%;
  }
`;
