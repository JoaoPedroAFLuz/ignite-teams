import { defaultTheme } from '@theme/index';

import { ActivityIndicator, Container } from './styles';

export function Loading() {
  return (
    <Container theme={defaultTheme}>
      <ActivityIndicator theme={defaultTheme} />
    </Container>
  );
}
