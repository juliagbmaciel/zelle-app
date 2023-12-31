import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    title: {
        color: '#fff',
        fontFamily: 'regular',
        fontSize: 18,
        textAlign: 'center',
        margin: 30
    },
    label: {
        color: '#8D8D8C',
        fontFamily: 'medium',
        fontSize: 16
    },
    labelN: {
        fontSize: 16,
        color: '#FFF',
        paddingTop: 3
    },
    nameContainer:{
        gap: 30
    },
    iconProfile: {
        backgroundColor: "#505050",
        width: 200,
        height: 200,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
})

export default styles;