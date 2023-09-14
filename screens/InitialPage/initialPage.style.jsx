import { StyleSheet } from 'react-native'
import React from 'react'




const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171715',   
        flex: 1
    },
    backgroundBall: {
        height: '70%',
        backgroundColor: '#383837',
        position: 'fixed',
        bottom: "-36%",
        borderTopLeftRadius: 250,
        borderTopRightRadius: 250,
        width: "110%",
        alignSelf: 'center',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'cover',
        marginHorizontal: 'auto',
        position: 'absolute',
        top: -200,
    },
    title: {
        fontFamily: "bold",
        color: "#fff",
        fontSize: 21.18,
        maxWidth: 290
    },
    subTitle: {
        fontFamily: "semibold",
        color: "#ffffff8a"
    },
    containerContent: {
        position: "absolute",
        bottom: 120
    },
    logo: {
        position: "absolute",
        right: 30,
        top: 30
    }
})

export default styles