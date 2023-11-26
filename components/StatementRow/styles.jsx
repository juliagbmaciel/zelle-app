import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#232321',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rowIcon: {
        backgroundColor: '#5A5A5A',
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
    },
    rowGreenIcon: {
        backgroundColor: 'rgba(32, 101, 52, 0.53)'
    },
    mainContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        position: 'relative'
    }


})

export default styles