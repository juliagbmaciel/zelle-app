import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import mastercardLogo from '../../assets/img/mastercard_logo.png'
import visaLogo from '../../assets/img/visa_logo.png'
import PressableButton from '../Buttons'



const Card = ({props, seeBill}) => {
    const number = props.item.number;
    
    const limit = parseFloat(props.item.limit);
    const limitFormatted = limit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const banner = props.item.banner

    const objectDate = new Date(props.item.expiration);
    const newDate = `${objectDate.getMonth() + 1}/${objectDate.getFullYear().toString().slice(-2)}`;

    return (
        <View style={style.cardContainer}>
            <View style={style.blobOne} />
            <View style={style.blobTwo} />
            <Image source={banner === 'Visa' ? visaLogo : mastercardLogo} style={style.logo} />
            <View style={style.content}>
                <View>
                    <Text style={style.label}>Limite Total</Text>
                    <Text style={style.balance}>{limitFormatted}</Text>
                   {seeBill && <PressableButton  bgColor={'#000'} radius={'10px'} title={"Ver fatura"} colorTitle={'#D3FE57'} />}
                </View>
                
                <View style={style.flexBetween}>
                    <Text style={style.labelN}>{number}</Text>
                    <Text style={style.labelN}>{newDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card