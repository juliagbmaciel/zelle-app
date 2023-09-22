import { StyleSheet, Dimensions, PixelRatio  } from 'react-native'


const pixelRatio = PixelRatio.get();
const scrWidth = Dimensions.get('window').width * pixelRatio;
const scrHeight = Dimensions.get('window').height * pixelRatio;



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#171715",
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        flex: 0.8,
        backgroundColor: "#171715",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    mainContent: {
        backgroundColor: "#383837",
        flex: 2,
        width: "100%",
        borderTopRightRadius: 148,
        alignItems: "left",
        paddingTop: 85,
        paddingHorizontal: 50,
        paddingBottom: 59,
        gap: 20
        
    },
    title: {
        color: "#fff",
        fontFamily: "medium",
        fontSize: 24.18
    },
    label: {
        fontFamily: 'semibold',
        fontSize: 13.44,
        color: "#A4A4A3",
    },
    logContent: {
        height: "100%",
        width: "100%",
        gap: 20,

    },
    input: {
        height: 40,
        borderColor: "#B3B3B3",
        borderWidth: 0.5,
        marginTop: 11,
        borderRadius: 13,
        padding: 10,
        color: "#fff",
        fontSize: 14,
    },
    datePicker: {
        height: 120,
        marginTop: -10
    },
    dateIos: {
        color: "#fff",
        height: 90
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 30,
    },
    inputIcon: {
        height: 40,
        borderColor: "#B3B3B3",
        borderWidth: 0.5,
        marginTop: 11,
        borderRadius: 13,
        padding: 10,
        color: "#fff",
        fontSize: 14,
        flexDirection: "row",
        gap: 10
    },
    buttonPrimary: {
        backgroundColor: "#D3FE57",
        paddingVertical: 12,
        paddingHorizontal: 23,
        borderRadius:29,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    buttonsView: {
        flexDirection: "row", 
        position: "absolute", 
        bottom: 30, 
        justifyContent: "space-between",
        width: "100%"
    },
    buttonsViewAnd: {
        flexDirection: "row", 
        justifyContent: "space-between",
        marginVertical: "10%"
    },
    buttonsViewSec: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between', 
    },
    keyboardOpenContainer: {
        backgroundColor: "#383837",
        position: 'absolute',
        width: "100%",
        height: "90%",
        zIndex: 1,
        justifyContent: 'center'
    },
    buttonInactive: {
       
        paddingVertical: 12,
        paddingHorizontal: 23,
        borderRadius:29,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    inputPassword: {
        height: 40,
        borderColor: "#B3B3B3",
        borderWidth: 0.5,
        marginTop: 11,
        borderRadius: 13,
        padding: 10,
        color: "#fff",
        fontSize: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }




})

export default styles