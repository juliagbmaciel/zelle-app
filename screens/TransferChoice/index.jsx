import { View, Text, Image, Alert } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'
import styles from './styles'
import React, { useState, useEffect } from 'react'
import PressableButton from '../../components/Buttons'
import { getCards, makeTransaction } from '../../src/services/api'
import { RadioButton } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native'

const TransferChoice = ({ navigation }) => {
    const [checked, setChecked] = useState('conta');
    const [limit, setLimit] = useState('0');


    const { transferData, token, accountData } = useSelector(state => {
        return state.userReducer
    })

    const [cardData, setCardData] = useState({
        loading: true,
        data: false
    })

    const value = transferData.value
    const valueFormatted = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


    const balance = accountData.account.balance
    const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


    async function getCardsData() {
        try {
            const cards = await getCards(token, accountData.account.id)
            setCardData(cards.length > 0 ? {
                loading: false,
                data: cards
            } : {
                loading: false,
                data: false
            })
            const limit = parseFloat(cards[0].limit_available)
            const limitFormatted = limit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            setLimit(limitFormatted)



        } catch (error) {
            console.error(error.response.data)
        }

    }

    async function transaction() {
        try {
            const response = await makeTransaction(token, transferData.client_receiver.user.cpf, transferData.value, checked)
            Alert.alert(
                '',
                `${response.message}`,
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => {
                            navigation.dispatch(CommonActions.reset({
                                index: 0,
                                routes: [
                                    { name: 'Bottom Navigation' },
                                ],
                            }))

                        },
                    },
                ]
            );
        } catch (error) {
            // console.log(error)
        }
    }


    useEffect(() => {
        getCardsData()
    }, [])

    return (
        !cardData.loading &&

        (<View style={defaultStyle.container}>
            <View style={defaultStyle.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View >
            <View style={styles.main}>
                <Text style={defaultStyle.title}>Como você gostaria de transferir {valueFormatted}?</Text>
                <Text style={defaultStyle.subtitle}>Para {transferData.client_receiver.name}</Text>
            </View>

            <View style={{ gap: 10 }}>
                {transferData.value <= accountData.account.balance && (
                    <View style={styles.row}>
                        <RadioButton
                            value="conta"
                            status={checked === 'conta' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('conta')}
                            color='#fff'
                        />
                        <View >
                            <Text style={styles.label} onPress={() => setChecked('conta')}>
                                Transferir com saldo da conta
                            </Text >
                            <Text style={styles.subtitle} onPress={() => setChecked('conta')}>O seu saldo atual é de {balanceFormatted}</Text>
                        </View>
                    </View>
                )}

                {cardData.data !== false && cardData.data[0].limit_available > transferData.value && (
                    <View style={styles.row} >
                        <RadioButton
                            value="cartao"
                            status={checked === 'cartao' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('cartao')}
                            color='#fff'
                        />
                        <View >
                            <Text style={styles.label} onPress={() => setChecked('cartao')} >
                                Transferir com cartão de crédito
                            </Text>
                            <Text style={styles.subtitle} onPress={() => setChecked('cartao')}>Limite disponível {limit}</Text>
                        </View>

                    </View>
                )}




            </View>
            {cardData.data !== false && transferData.value > cardData.data[0].limit_available && transferData.value > accountData.account.balance || cardData.data === false && transferData.value > accountData.account.balance ? (
                <Text style={styles.feedback}>Você não possui saldo suficiente para essa transação :(</Text>
            ) : (
                <View style={{ position: 'absolute', bottom: 30, width: '100%', alignSelf: 'center' }}>
                    <PressableButton title={'Confirmar'} bgColor={"#D3FE57"} onPress={transaction} />
                </View>
            )
            }
        </View>)

    )
}

export default TransferChoice
