import React from 'react';

import { Container } from './styles';
import { IPageTitleProps } from '../../utils/Interfaces';

export function PageTitle({ title }: IPageTitleProps) {
  return (
    <Container>
      {title}
    </Container>
  );
}
