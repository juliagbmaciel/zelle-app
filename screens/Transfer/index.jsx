import { View, Image, Text, TouchableOpacity } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputMask } from 'react-native-masked-text';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';


export default function Transfer() {

    const [moneyValue, setMoneyValue] = useState('');
    const [isValueScreen, setIsValueScreen] = useState(true)

    const { accountData } = useSelector(state => {
        return state.userReducer;
    })
    const balance = accountData.account.balance
    const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const validValueTransfer = () => {
        const newValue = extractNumericNumber(moneyValue)
        console.log(balance - newValue)
    }

    function extractNumericNumber(str) {
        const valorSemSimbolo = str.replace(/[^\d,]/g, '');

        const valorNumerico = parseFloat(valorSemSimbolo.replace(',', '.'));

        return valorNumerico;
    }

    return (
        isValueScreen ? (
            <SafeAreaView style={defaultStyle.container}>
                <View style={defaultStyle.logoArea}>
                    <Image
                        source={require('../../assets/img/logo.png')}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={defaultStyle.title} >Qual é o valor da transferência?</Text>
                    <Text style={defaultStyle.subtitle}>Saldo disponível em conta {balanceFormatted}</Text>
                </View>

                <TextInputMask
                    type={'money'}
                    style={styles.input}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$ ',
                        suffixUnit: '',
                    }}
                    value={moneyValue}
                    onChangeText={(text) => setMoneyValue(text)}
                />
                <TouchableOpacity style={styles.button} onPress={validValueTransfer}>
                    <Ionicons name='arrow-forward-outline' size={30} />
                </TouchableOpacity>

            </SafeAreaView>
        ) : (
            <View></View>
        )

    )
}