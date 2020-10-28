import * as React from 'react';

import * as S from './styled';
import { propButton } from './type';

const Button = ({ type, onClick, children, variant }: propButton) => (
  <S.Button type={type} onClick={onClick} variant={variant}>
    {children}
  </S.Button>
);

export default Button;
