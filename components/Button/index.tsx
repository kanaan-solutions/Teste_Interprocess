import React from 'react';

import { IButtonProps } from '../../types/Interfaces';
import { Container } from './styles';

export function Button({ title, type, onClick }: IButtonProps) {
  return (
    <Container type={type} onClick={onClick}>
      {title}
    </Container>
  );
}
