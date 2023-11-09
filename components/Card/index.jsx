import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import mastercardLogo from '../../assets/img/mastercard_logo.png'



const Card = ({ banner, name, number, date }) => {
    return (
        <View style={style.cardContainer}>
            <View style={style.blobOne} />
            <View style={style.blobTwo} />
            <Image source={mastercardLogo} style={style.logo} />
            <View style={style.content}>
                <View>
                    <Text style={style.label}>Saldo atual</Text>
                    <Text style={style.balance}>R$ 1.000,00</Text>
                </View>
                <View style={style.flexBetween}>
                    <Text style={style.labelN}>123 123 123 123</Text>
                    <Text style={style.labelN}>9/25</Text>
                </View>
            </View>
        </View>
    )
}

export default Card