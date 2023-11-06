import { StyleSheet, } from 'react-native'




const styles = StyleSheet.create({
    logoArea: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 40,
        
    },
    container: {
        flex: 1,
        backgroundColor: "#171715",
        paddingHorizontal: 20,
        fontFamily: 'regular',
        color: "#fff"
    },
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
        alignItems: 'center'
    }

})


export default styles