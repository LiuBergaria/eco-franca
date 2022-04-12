import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

export const NoOccurrencesMessage = styled.h4`
  font-size: 1.8rem;
  text-align: center;
  padding: 80px 16px;
`;
