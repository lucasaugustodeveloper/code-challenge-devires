import React from 'react';

import * as S from './styled';
import propInput from './type';

const Input = ({ type, name, value, placeholder, id }: propInput) => (
  <S.Container>
    <S.Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      id={id}
    />
  </S.Container>
);

export default Input;
