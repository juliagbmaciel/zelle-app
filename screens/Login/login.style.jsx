import { StyleSheet, Dimensions, PixelRatio  } from 'react-native'


const pixelRatio = PixelRatio.get();
const screenWidthInPixels = Dimensions.get('window').width * pixelRatio;
const screenHeightInPixels = Dimensions.get('window').height * pixelRatio;



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
        paddingBottom: 59
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
        marginTop: 37
    },
    logContent: {
        height: "100%",
        width: "100%",

    },
    input: {
        height: 40,
        borderColor: "#B3B3B3",
        borderWidth: 0.5,
        marginTop: 11,
        borderRadius: 13,
        padding: 10,
        color: "#fff",
        fontSize: 14
    },
    datePicker: {
        height: 120,
        marginTop: -10
    },
    dateIos: {
        backgroundColor: "#fff",
        height: 90,
    },
    button: {
        
    }




})

export default styles