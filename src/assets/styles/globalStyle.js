import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 3rem;
  padding: 0 1.6rem;

  background: dodgerblue;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::after,
    &::before {
      content: '';
      clear: both;
      display: none;
      visibility: hidden;
    }
  }

  html,
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 10px;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    background: #eaeaea;
  }
`;
