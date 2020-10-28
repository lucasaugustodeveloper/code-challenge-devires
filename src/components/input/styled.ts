import styled from 'styled-components';

import { Container as Ctn } from '../../assets/styles/globalStyle';

export const Container = styled(Ctn)`
  padding-right: 1.6rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Input = styled.input`
  font-size: 1.8rem;

  width: 100%;
  max-height: 5rem;
  padding: 1.2rem 0;
  padding-left: 2rem;

  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;

  background: #ccc;
  border-color: #333;
`;

export default Input;
