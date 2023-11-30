import { View, Image, Text, ActivityIndicator,TouchableOpacity } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoanRow from '../../components/LoanRow/index.jsx'
import { useSelector } from 'react-redux';
import styles from './styles';
import {  getInstallments } from '../../src/services/api.jsx';
import PressableButton from '../../components/Buttons/index.jsx'
import { CommonActions } from '@react-navigation/native'


export default function LoanView({ navigation }) {


    const [loanInstallments, setLoanInstallments] = useState([])
    const [installmentValueState, setInstallmentValueState] = useState(0)
    const [loading, setLoading] = useState(true)
    const [phrase, setPhrase] = useState('')
    const [date, setDate] = useState('')

    const { loanData, token } = useSelector(state => {
        return state.userReducer;
    })




    async function getInstallmentsFunction() {
        try {
            let valor = 0;
            const loans = await getInstallments(token, loanData.id)
            setLoanInstallments(loans)
            for (const item of loans) {
                const installmentValue = parseFloat(item.installment_value);

                if (!isNaN(installmentValue)) {
                    valor += installmentValue
                }
                setInstallmentValueState(valor)
            }
            setLoading(false)

            const dataObj = new Date(loans[0].due_date);

            const options = { day: 'numeric', month: 'long' };
            const formattedDate = dataObj.toLocaleDateString('pt-BR', options);
            setDate(formattedDate)
            setPhrase(`${loanData.number_installments}x de ${parseFloat(loans[0].installment_value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
        } catch (error) {
            console.log(error)
        };
    }

    useEffect(() => {
        getInstallmentsFunction()
    }, [])





    return (

        !loading ? (
            <SafeAreaView style={defaultStyle.container}>
                <View style={defaultStyle.logoArea}>
                    <Image
                        source={require('../../assets/img/logo.png')}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={defaultStyle.title} >Aqui está o resumo do seu empréstimo confirmado de {parseFloat(loanData.amount_requested).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</Text>
                    <Text style={defaultStyle.subtitle}>Saldo já está debitado em sua conta</Text>
                </View>
                <LoanRow title={'Total a pagar'} content={`${parseFloat(installmentValueState).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`} />
                <LoanRow title={'Número de parcelas'} content={phrase} />
                <LoanRow title={'Primeira data de pagamento'} content={date} />

                <PressableButton marginTop={'200px'} bgColor={'#D3FE57'} title={'Ir à home'} onPress={() => {
                                    navigation.dispatch(CommonActions.reset({
                                        index: 0,
                                        routes: [
                                            { name: 'Bottom Navigation' },
                                        ],
                                    }))
                }}/>
            </SafeAreaView>

        ) : (
            <View style={{ backgroundColor: "#000", flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={60} color={"#D3FE57"} />
            </View>
        )

    )
}
