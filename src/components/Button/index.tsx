import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  danger?: boolean;
}

export function Button({ title, danger, disabled, ...rest }: ButtonProps) {
  return (
    <Container danger={danger} disabled={disabled} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
