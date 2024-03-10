import { NavigationContainer } from '@react-navigation/native';

import { defaultTheme } from '@theme/index';
import { AppRoutes } from './app.routes';

const MyTheme = {
  dark: true,
  colors: {
    primary: defaultTheme.COLORS.GREEN_500,
    background: defaultTheme.COLORS.GRAY_600,
    card: defaultTheme.COLORS.GRAY_500,
    text: defaultTheme.COLORS.WHITE,
    border: defaultTheme.COLORS.GRAY_300,
    notification: defaultTheme.COLORS.RED,
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
