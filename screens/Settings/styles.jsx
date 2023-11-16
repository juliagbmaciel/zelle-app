import { StyleSheet} from 'react-native'


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
    header: {
        flexDirection: 'row',
        width: '100%',
        gap: 15,
        alignItems: 'center'
    },
    name: {
        color: '#D3FE57',
        fontFamily: 'medium',
    },
    text: {
        fontFamily: 'regular',
        color: '#8C8C8C',
        width: '40%'
    },
    mTop: {
        marginTop: 20
    }


})


export default styles