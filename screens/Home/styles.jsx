import { StyleSheet, Dimensions} from 'react-native'

const screenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    iconProfile: {
        backgroundColor: "#505050",
        width: 42,
        height: 42,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        fontFamily: 'regular',
        color: "rgba(255, 255, 255, 0.61)",
        fontSize: 17.18
    },
    name: {
        color: '#D3FE57',
        fontSize: 17.18
    },
    header: {
        flexDirection: 'row',
        gap: 12
    },
    balance: {
        backgroundColor: "#D3FE57",
        borderRadius: 20,
        padding: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    letter: {
        fontFamily: 'regular',
        fontSize: 12
    },
    bold: {
        fontFamily: 'semibold',
        fontSize: 17
    },
    cardLetter: {
        color: "#fff"
    },
    card: {
        // paddingHorizontal: 19,
        paddingVertical: 24,
        backgroundColor: "#383837",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: (screenWidth - 50) /3
     
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 19,
        fontFamily: 'regular',
        color: "#fff"
    },
    main: {
        gap: 10,
        marginTop: 20
    },
    rowCard: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#383837',
        paddingVertical: 17,
        paddingHorizontal: 23,
        borderRadius: 13,
        marginTop: 10
    },
    cardSecondary: {
        backgroundColor: "#000",
        flexDirection: "row",
        borderRadius: 20,
        padding: 20,
        marginTop: 20
    },
    cardWidth:{
        width: '60%'
    }


})


export default styles