import { StyleSheet } from 'react-native'




const styles = StyleSheet.create({
    cardContainer:{
        width: '100%',
        backgroundColor: '#000',
        height: 210,
        borderRadius: 40,
        position: 'relative',
        overflow: 'hidden',
        padding: 30
    },
    blobOne: {
        width: 200,
        height: 200,
        backgroundColor: '#292929',
        borderRadius: 100,
        position: 'absolute',
        top: 60,
        left: -100
    },
    blobTwo: {
        width: 200,
        height: 200,
        backgroundColor: '#292929',
        borderRadius: 100,
        position: 'absolute',
        top: -80,
        right: -100
    },
    logo: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    label: {
        fontFamily: 'regular',
        color: '#8C8C8C',
        fontSize: 15
    },
    balance: {
        fontFamily: 'regular',
        color: '#fff',
        fontSize: 25
    },
    labelN: {
        fontFamily: 'regular',
        color: '#fff',
        fontSize: 15
    },
    flexBetween: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row'
    },
    content: {
        height: '100%',
        justifyContent: 'space-between'
    }
})

export default styles