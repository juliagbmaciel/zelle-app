import { Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wallet, Settings } from '../screens'
import HomeTabIcon from './HomeTabIcon';
import CustomTabIcon from './CustomTabIcon';


const screenWidth = Dimensions.get('window').width;


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        width: screenWidth - 50,
        left: 20,
        right: 0,
        elevation: 1,
        height: 70,
        borderRadius: 20,
        backgroundColor: "#000",
        borderWidth: 1,
        borderColor: "#000",
        paddingLeft: 25,
        justifyContent: 'center',
        zIndex: 3
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <HomeTabIcon focused={focused} />
                }} />
            <Tab.Screen name="Wallet" component={Wallet} options={{
                tabBarIcon: ({ focused }) => <CustomTabIcon focused={focused} type={'wallet'} />
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ focused }) => <CustomTabIcon focused={focused} type={'settings'} />
            }} />
            <Tab.Screen name="Profile" component={Home} options={{
                tabBarIcon: ({ focused }) => <CustomTabIcon focused={focused} type={'profile'} />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation