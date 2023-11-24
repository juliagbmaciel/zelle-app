import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#232321',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    rowIcon: {
        backgroundColor: '#000',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#fff',
        fontFamily: 'medium',
        fontSize: 15
    },
    subtitle: {
        fontFamily: 'regular',
        color: "rgba(255, 255, 255, 0.61)",
        fontSize: 15
    }


})

export default styles