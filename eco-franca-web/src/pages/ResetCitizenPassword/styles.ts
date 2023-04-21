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

  h1 {
    color: var(--Black);
    margin-bottom: 48px;
    text-align: center;
    font-size: 4.1rem;
  }

  strong {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--Black);
    text-align: left;
    margin-bottom: 12px;
    display: block;
  }

  div strong {
    text-align: center;
  }

  form,
  > div {
    margin: 80px 0;
    width: 340px;
    text-align: left;
  }
`;

export const Background = styled.div`
  display: flex;
  img {
    width: 90%;
  }
`;
