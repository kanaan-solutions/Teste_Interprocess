import { ReactNode } from 'react';

import { Container } from './styles';

interface PatientCardProps {
  children: ReactNode;
}

export function PatientCard({ children }: PatientCardProps) {
  return (
    <Container>
      <h1>PatientCard</h1>
      {children}
    </Container>
  );
}
