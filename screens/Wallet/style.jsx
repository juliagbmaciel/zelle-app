import { StyleSheet, Dimensions } from 'react-native'


const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171715",
        paddingHorizontal: 20,
        fontFamily: 'regular',
        color: "#fff"
    },
    separator: {
        height: 16
    },
    cardList: {
        width: '100%'
    },
    noCardContainer: {
        width: 360,
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    label: {
        color: "#fff",
        fontFamily: 'regular',
        fontSize: 16
    },
    button: {
        backgroundColor: '#D3FE57',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 40
    },
    labelButton: {
        color: "#000",
        fontFamily: 'semibold',
        fontSize: 16
    },


})


export default styles