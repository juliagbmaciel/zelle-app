import { StyleSheet, Dimensions } from 'react-native'


const { width } = Dimensions.get('window');




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171715"
    },
    backgroundImage: {
        position: 'relative',
        width: width,
    },
    title:{
        fontFamily: 'medium',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    },
    contentContainer:{
        padding: 30,
        gap: 20
    },
    subtitle:{
        fontFamily: 'regular',
        color:'#959594',
        textAlign: 'center',
        fontSize: 17
    }




})


export default styles