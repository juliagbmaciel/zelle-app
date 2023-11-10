import { FlatList, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import { createCard, getCards } from '../../src/services/api'
import { useEffect } from 'react'


const Wallet = () => {
    const data = [
        { id: 1, name: 'lalal' },
        { id: 2, name: 'lalal' },
        { id: 3, name: 'lalal' }
    ]

    const { token, accountData } = useSelector(state => {
        return state.userReducer
    })
    const [cardData, setCardData] = useState({
        data: null,
        loading: true,
        error: null,
    })

    const [isCardClicked, setIsCardClicked] = useState('')

    const createCardFunc = async () => {
        console.log(accountData.account.id);
        setIsCardClicked('clicked')
        try {
            const card = await createCard(token);
            console.log("Card: ", card);
        } catch (error) {
            console.error("Erro ao criar o cartão: ", error);
        }
        fetchData()
    };

    const fetchData = async () => {
        setCardData((prevState) => ({ ...prevState, loading: true }));

        try {
            const cards = await getCards(token, accountData.account.id);
            setCardData({
                data: cards,
                loading: false,
                error: null,
            });

        } catch (error) {
            setCardData({
                data: null,
                loading: false,
                error: "Erro ao buscar os dados da conta.",
            });
        }
    };



    useEffect(() => {
        fetchData();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={() => createCardFunc()}>Wallet</Text>
            {cardData.loading ? (
                <View style={styles.noCardContainer}>
                    <ActivityIndicator size={60} color={"#D3FE57"} />
                </View>
            ) : cardData.data.length === 0 ? (
                <View>
                    <View style={styles.noCardContainer}>
                        <Text style={styles.label}> Você ainda não possui cartões!</Text>
                        <TouchableOpacity style={styles.button} onPress={() => createCardFunc()}>
                            <Text style={styles.labelButton}>Solicitar Cartão de Crédito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <FlatList
                    data={cardData.data}
                    style={styles.cardList}
                    renderItem={(item) => <Card props={item} />}
                    contentContainerStyle={{ columnGap: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment={'center'}
                    bounces={false}
                />
            )}
        </SafeAreaView>
    )
}

export default Wallet
