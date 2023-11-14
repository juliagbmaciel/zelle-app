import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 30
    },
    label: {
        fontFamily: 'regular',
        color: '#959594',
        textAlign: 'center',
        fontSize: 18,
        width: 260
    },
    title: {
        color: '#fff',
        fontFamily: 'medium',
        fontSize:  24,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#171715",
        paddingVertical: 50,
        paddingHorizontal: 34,
        justifyContent: 'space-between'
    },
    logoArea: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    labelN: {
        fontSize: 17,
        color: '#959594',
        fontFamily: 'regular'
    },
    labelContent: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'regular'
    },
    containerContentMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    containerColumn: {
        gap: 20
    },
    containerContent: {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center'
    }



})

export default styles