import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputMask } from 'react-native-masked-text';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';


export default function Transfer() {

    const [moneyValue, setMoneyValue] = useState('0');
    const [keyValue, setKeyValue] = useState('');
    const [isValueScreen, setIsValueScreen] = useState(true)
    const [isCNPJ, setIsCNPJ] = useState(false)
    const [valid, setValid] = useState(false)

    const { accountData } = useSelector(state => {
        return state.userReducer;
    })
    const balance = accountData.account.balance
    const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const validValueTransfer = () => {
        const newValue = extractNumericNumber(moneyValue)
        if (newValue === 0) {
            Alert.alert(
                '',
                'O valor não pode ser igual a 0',
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => { },
                    },
                ]
            );
            return
        }
        setIsValueScreen(false)
        console.log(newValue)
    }

    function extractNumericNumber(str) {
        const valueWithoutSimbol = str.replace(/[^\d,]/g, '');

        const numericValue = parseFloat(valueWithoutSimbol.replace(',', '.'));

        return numericValue;
    }



    function setValueCpfCnpj(text) {
        console.log(text.length)
        if (text.length > 13) {
            console.log('true')
            setIsCNPJ(true)
        }else{
            console.log('false')
            setIsCNPJ(false)
        }
        
        setKeyValue(text)

        if (text.length === 14) {
            setValid(true)
        } else if (text.length === 18) {
            setValid(true)
        } else {
            setValid(false)
        }
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
            <SafeAreaView style={defaultStyle.container}>
                <View style={defaultStyle.logoArea}>
                    <Image
                        source={require('../../assets/img/logo.png')}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={defaultStyle.title} >Para qual conta deseja transferir? (CPF ou CNPJ)</Text>
                </View>

                <TextInputMask
                    type={isCNPJ ? 'cnpj' : 'cpf'}
                    style={styles.input}
                    value={keyValue}
                    onChangeText={(text) => setValueCpfCnpj(text)}
                />
                {valid && (
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Ionicons name='arrow-forward-outline' size={30} />
                    </TouchableOpacity>
                )}

            </SafeAreaView>
        )

    )
}