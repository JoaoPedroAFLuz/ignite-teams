import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  danger?: boolean;
}

export function Button({ title, danger = false, ...rest }: ButtonProps) {
  return (
    <Container danger={danger} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
