import {
    InitialPage,
    CreateAccount,
    AccountType,
    Credentials
} from '../../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name='Initial'
            component={InitialPage}
            options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <AuthStack.Screen
            name='CreateAccount'
            component={CreateAccount}
            options={{ headerShown: false, animation: 'slide_from_right', gestureEnabled: false }}
        />
        <AuthStack.Screen
            name='AccountType'
            component={AccountType}
            options={{ headerShown: false, animation: 'none' }}
        />
        <AuthStack.Screen
            name='Credentials'
            component={Credentials}
            options={{ headerShown: false, animation: 'none' }}
        />
    </AuthStack.Navigator>
)




export default AuthRoutes