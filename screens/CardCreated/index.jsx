import { SafeAreaView, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import Card from '../../components/Card'
import React from 'react'
import PressableButton from '../../components/Buttons'
import { CommonActions } from '@react-navigation/native';


const CardCreated = ({ navigation, route }) => {
    const card = { item: route.params.card }
    const { accountData } = useSelector(state => {
        return state.userReducer
    })
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Cartão criado!</Text>
                <Card props={card} seeBill={false} />
                <Text style={styles.label}>Lembre se de pagar as suas faturas antes da data de vencimento.</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.labelN}>Nome</Text>
                <Text style={styles.labelContent}>{accountData.client.client.name}</Text>
                <View style={styles.containerContentMain}>
                    <View style={styles.containerColumn}>
                        <View>
                            <Text style={styles.labelN}>Bandeira</Text>
                            <Text style={styles.labelContent}>{card.item.banner}</Text>
                        </View>
                        <View>
                            <Text style={styles.labelN}>CVV</Text>
                            <Text style={styles.labelContent}>{card.item.cvv}</Text>
                        </View>
                    </View>
                    <View style={styles.containerColumn}>
                        <View>
                            <Text style={styles.labelN}>Função</Text>
                            <Text style={styles.labelContent}>Crédito</Text>
                        </View>
                    </View >
                </View>
            </View>
            <PressableButton bgColor={"#D3FE57"} title={"Tela inicial"} onPress={() => {
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Bottom Navigation' },
                    ],
                }))

            }} />
        </SafeAreaView>
    )
}

export default CardCreated

