import { View, Text, Image } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'
import styles from './styles'
import React, { useState, useEffect } from 'react'
import PressableButton from '../../components/Buttons'
import { getCards } from '../../src/services/api'
import { RadioButton } from 'react-native-paper';

const TransferChoice = ({ navigation }) => {
    const [checked, setChecked] = useState('account');
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
                            value="account"
                            status={checked === 'account' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('account')}
                            color='#fff'
                        />
                        <View onPress={() => setChecked('account')}>
                            <Text style={styles.label} >
                                Transferir com saldo da conta
                            </Text>
                            <Text style={styles.subtitle}>O seu saldo atual é de {balanceFormatted}</Text>
                        </View>
                    </View>
                )}

                {cardData.data !== false && (
                    <View style={styles.row}>
                        <RadioButton
                            value="credit"
                            status={checked === 'credit' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('credit')}
                            color='#fff'
                        />
                        <View>
                            <Text style={styles.label} onPress={() => setChecked('credit')}>
                                Transferir com cartão de crédito
                            </Text>
                            <Text style={styles.subtitle}>Limite disponível {limit}</Text>
                        </View>

                    </View>
                )}


            </View>
        </View>)

    )
}

export default TransferChoice
