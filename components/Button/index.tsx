import { FormEvent } from 'react';

import { Container } from './styles';

interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset";
  onClick: (e: FormEvent) => void
}

export function Button({ title, type, onClick }: ButtonProps) {
  return (
    <Container type={type} onClick={onClick}>
      {title}
    </Container>
  );
}
