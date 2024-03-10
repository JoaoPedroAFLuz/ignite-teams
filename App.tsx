import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import { Loading } from '@components/Loading';
import { SafeAreaView } from '@components/SafeAreaView/styles';

import { defaultTheme } from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView>
        <StatusBar
          backgroundColor="transparent"
          style="light"
          translucent
          animated
        />

        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
