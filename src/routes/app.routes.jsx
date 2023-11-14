import BottomTabNavigation from '../../navigation/BottomTabNavigation';
import {
    CreateCard,
    Home,
    CardCreated
} from '../../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name='Bottom Navigation'
            component={BottomTabNavigation}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='CreateCard'
            component={CreateCard}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='CardCreated'
            component={CardCreated}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
    </AppStack.Navigator>
)


export default AppRoutes