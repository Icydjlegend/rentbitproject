import * as React from 'react';
import { AppState } from 'react-native';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import FireTheme from './themes/FireTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_700Bold,
  });

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={cacheAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={FireTheme}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
