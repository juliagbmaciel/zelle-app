import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import mastercardLogo from '../../assets/img/mastercard_logo.png'



const Card = ({props}) => {
    console.log("propssssssssss: ", props.item.limit)
    const number = props.item.number;
    const limit = parseFloat(props.item.limit);
    const limitFormatted = limit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (
        <View style={style.cardContainer}>
            <View style={style.blobOne} />
            <View style={style.blobTwo} />
            <Image source={mastercardLogo} style={style.logo} />
            <View style={style.content}>
                <View>
                    <Text style={style.label}>Limite Total</Text>
                    <Text style={style.balance}>{limitFormatted}</Text>
                </View>
                <View style={style.flexBetween}>
                    <Text style={style.labelN}>{number}</Text>
                    <Text style={style.labelN}>9/25</Text>
                </View>
            </View>
        </View>
    )
}

export default Card