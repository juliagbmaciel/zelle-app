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
        fontSize: 18,
        textAlign: 'center'
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
    logoArea: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 40,
        
    },
    title: {
        fontSize: 19,
        fontFamily: 'regular',
        color: "#fff",
        paddingVertical: 20
    },
    cardCreate: {
        backgroundColor: "#3C3C3C",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 15
    },
    more: {
        color: "#ccc",
        fontSize: 20,
        fontFamily: 'regular'
    },
    paymentComponent: {
        backgroundColor: "#000",
        borderRadius: 13,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labelComponent: {
        fontSize: 13,
        color: '#fff'
    }


})


export default styles