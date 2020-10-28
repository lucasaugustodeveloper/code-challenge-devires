import styled, { css } from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'success' | 'warning';
};

const variants = {
  success: () => css`
    background: green;
  `,
  warning: () => css`
    background: orange;
  `,
};

export const Button = styled.button<ButtonProps>`
  font-size: 3rem;
  text-align: center;

  width: 4.5rem;
  height: 4.5rem;

  border: none;
  border-radius: 0.3rem;

  ${({ variant }) => variants[variant]}
`;

export default Button;
