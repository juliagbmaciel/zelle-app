import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D3FE57',
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    main: {
        width: '100%',
        height: 200,
        gap: 20,
        marginTop: 40
    },
    value: {
        color: '#D3FE57',
        fontFamily: 'medium',
        fontSize: 30
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    firstColumn: {
        gap: 20
    },
    secondColumn: {
        gap: 20,
        alignItems: 'flex-end'
    },
    justify: {
        justifyContent: 'space-between',
        flex: 1
    }

})

export default styles;