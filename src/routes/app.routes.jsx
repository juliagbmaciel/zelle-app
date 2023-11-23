import BottomTabNavigation from '../../navigation/BottomTabNavigation';
import {
    CreateCard,
    Home,
    CardCreated,
    SettingPage,
    Transfer,
    TransferView,
    TransferChoice
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
        <AppStack.Screen
            name='SettingPage'
            component={SettingPage}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='Transfer'
            component={Transfer}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='TransferView'
            component={TransferView}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='TransferChoice'
            component={TransferChoice}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
    </AppStack.Navigator>
)


export default AppRoutes