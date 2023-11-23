import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 200,
        gap: 20,
        marginTop: 40
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontFamily: 'medium',
        color: '#fff',
        fontSize: 16
    },
    subtitle: {
        fontFamily: 'regular',
        color: "rgba(255, 255, 255, 0.61)",
        fontSize: 15
    }


})

export default styles;