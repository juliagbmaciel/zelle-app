import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CustomTabIcon = ({ focused, type}) => {
  return (
    <View style={focused && styles.container}>
        {type === 'wallet' && <Ionicons name='wallet-outline' color={focused ? "#000" : "#D3FE57"} size={23}/> }
        {type === 'settings' && <Ionicons name='settings-outline' color={focused ? "#000" : "#D3FE57"} size={23}/> }
        {type === 'profile' && <Ionicons name='person-circle-outline' color={focused ? "#000" : "#D3FE57"} size={28}/> }
    </View>
  )
}

export default CustomTabIcon

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#D3FE57",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 20
    }

})