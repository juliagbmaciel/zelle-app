import { View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputMask } from 'react-native-masked-text';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';
import { setTransferData } from '../../src/reducers/actions.jsx'
import { getClientByCpf } from '../../src/services/api.jsx';



export default function Transfer({ navigation }) {

    const [moneyValue, setMoneyValue] = useState('0');
    const [keyValue, setKeyValue] = useState('');
    const [isValueScreen, setIsValueScreen] = useState(true)
    const [isCNPJ, setIsCNPJ] = useState(false)
    const [valid, setValid] = useState(false)
    const [newValue, setNewValue] = useState(false)
   
    const dispatch = useDispatch()
    const { accountData, token } = useSelector(state => {
        return state.userReducer;
    })
    const balance = accountData.account.balance
    const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const validValueTransfer = () => {
        setNewValue(extractNumericNumber(moneyValue))
        if (extractNumericNumber(moneyValue) == 0) {
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
    }

    function extractNumericNumber(str) {
        const valueWithoutSimbol = str.replace(/[^\d,]/g, '');

        const numericValue = parseFloat(valueWithoutSimbol.replace(',', '.'));

        return numericValue;
    }



    function setValueCpfCnpj(text) {

        setIsCNPJ(text.length > 13);
    
        setKeyValue(text);
    
        const isValidLength = text.length === 14 || text.length === 18;
        setValid(isValidLength);
    }


    function removeSpecialCharacters(input) {
        return input.replace(/[^0-9]/g, '');
    }


    async function fetchData (){
        // setAccountDataApi((prevState) => ({ ...prevState, loading: true }));

        try {
            const client_receiver = await getClientByCpf(token, removeSpecialCharacters(keyValue));
            if (client_receiver.client.client.user.cpf === accountData.client.client.user.cpf){
                Alert.alert(
                    '',
                    'Contas de origem e destino não devem ser iguais.',
                    [
                        {
                            text: 'OK',
                            style: 'destructive',
                            onPress: () => { },
                        },
                    ]
                );
            }else{
                dispatch(setTransferData({
                    value: newValue,
                    key: removeSpecialCharacters(keyValue),
                    client_receiver: client_receiver.client.client
                    }))
                navigation.navigate('TransferView')
            }
        } catch (error) {
            Alert.alert(
                '',
                `${error.response.data.detail}`,
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => { },
                    },
                ]
            );
        }
    };

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
                    <TouchableOpacity style={styles.button} onPress={() => {
                        fetchData()
                        }}>
                        <Ionicons name='arrow-forward-outline' size={30} />
                    </TouchableOpacity>
                )}

            </SafeAreaView>
        )

    )
}