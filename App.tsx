import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@components/Loading';
import { NewGroup } from '@screens/NewGroup';
import { defaultTheme } from '@theme/index';
import { SafeAreaView } from '@theme/styles';

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

        {/* <Groups /> */}

        <NewGroup />
      </SafeAreaView>
    </ThemeProvider>
  );
}
