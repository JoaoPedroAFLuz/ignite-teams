import { useTheme } from 'styled-components/native';

import { ActivityIndicator, Container } from './styles';

export function Loading() {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <ActivityIndicator theme={theme} />
    </Container>
  );
}
