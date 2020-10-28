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
  padding: 1rem;

  border: none;
  border-radius: 0.3rem;

  ${({ variant }) => variants[variant]}
`;

export default Button;
