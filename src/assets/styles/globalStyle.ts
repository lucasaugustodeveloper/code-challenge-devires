import styled, { css, createGlobalStyle } from 'styled-components';
import { ContainerProps } from './types';

const alingsContainer = {
  center: () => css`
    justify-content: center;
    align-items: center;
  `,
  start: () => css`
    justify-content: flex-start;
    align-items: flex-start;
  `,
  end: () => css`
    justify-content: flex-end;
    align-items: flex-end;
  `,
  between: () => css`
    justify-content: space-between;
    align-items: center;
  `,
};

const columnDirection = {
  column: () => css`
    flex-direction: column;
  `,
  row: () => css`
    flex-direction: row;
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;

  width: 100%;
  height: 100%;

  ${({ align }) => alingsContainer[align]}
  ${({ direction = 'column' }) => columnDirection[direction]}

  &.search {
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: 60%;
    }
  }
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
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 50%;
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
