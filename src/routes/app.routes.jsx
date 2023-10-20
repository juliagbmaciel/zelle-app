import {
    FirstWelcome
} from '../../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name='FirstWelcome'
            component={FirstWelcome}
            options={{ headerShown: false, animation: 'slide_from_right' }}
        />
    </AppStack.Navigator>
)


export default AppRoutes