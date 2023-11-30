import { View, Image, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInputMask } from 'react-native-masked-text';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';
import { createLoan } from '../../src/services/api.jsx';
import { setLoan } from '../../src/reducers/actions.jsx';
import { CommonActions } from '@react-navigation/native';



export default function Loan({ navigation }) {

    const [moneyValue, setMoneyValue] = useState('0');
    const [installments, setInstallments] = useState(0);
    const [isValueScreen, setIsValueScreen] = useState(true)
    const [newValue, setNewValue] = useState(false)

    const { token } = useSelector(state => {
        return state.userReducer;
    })
    const dispatch = useDispatch()


    const validValueLoan = () => {

        setNewValue(extractNumericNumber(moneyValue))

        if (extractNumericNumber(moneyValue) == 0.00) {
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




    const handleInputChange = (text) => {
        const cleanedText = text.replace(/[^0-9]/g, '');
        setInstallments(cleanedText);
    };


    async function makeLoan() {
        try {
            const loan = await createLoan(token, newValue, installments)
            dispatch(setLoan(loan))
            navigation.navigate('LoanView')
        } catch (error) {
            Alert.alert(
                '',
                `${error.response.data}`,
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
                <Ionicons name='arrow-back' color={'#fff'} size={30} onPress={() => {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Bottom Navigation' },
                        ],
                    }))
                }} />
                <View style={{ marginTop: 30 }}>
                    <Text style={defaultStyle.title} >Quanto você deseja pegar emprestado?</Text>
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
                <TouchableOpacity style={styles.button} onPress={validValueLoan}>
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
                <Ionicons name='arrow-back' color={'#fff'} size={30} onPress={() => {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Bottom Navigation' },
                        ],
                    }))
                }} />

                <View style={{ marginTop: 30 }}>
                    <Text style={defaultStyle.title} >Em quantas parcelas deseja dividir?</Text>
                </View>

                <TextInput
                    keyboardType={'numeric'}
                    style={styles.input}
                    value={installments}
                    onChangeText={handleInputChange}
                />
                {installments > 0 && (
                    <TouchableOpacity style={styles.button} onPress={makeLoan}>
                        <Ionicons name='arrow-forward-outline' size={30} />
                    </TouchableOpacity>
                )}

            </SafeAreaView>
        )

    )
}