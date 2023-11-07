import BottomTabNavigation from '../../navigation/BottomTabNavigation';
import {
    FirstWelcome,
    Home
} from '../../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name='Bottom Navigation'
            component={BottomTabNavigation}
            options={{headerShown: false}}
        />
        <AppStack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='FirstWelcome'
            component={FirstWelcome}
            options={{ headerShown: false, animation: 'slide_from_right' }}
        />


    </AppStack.Navigator>
)


export default AppRoutes