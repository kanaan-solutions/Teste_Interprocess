import { Container } from './styles';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }) {
  return (
    <Container>
      {title}
    </Container>
  );
}
