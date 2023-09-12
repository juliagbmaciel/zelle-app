import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { InitialPage } from './screens';



const Stack = createNativeStackNavigator()


export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    light: require('./assets/fonts/Montserrat-Light.ttf'),
    bold: require('./assets/fonts/Montserrat-Bold.ttf'),
    medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    extrabold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])


  if (!fontsLoaded) {
    return null;
  }


  return (

      <InitialPage/>

  );
};
