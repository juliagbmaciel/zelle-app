import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import {
    Ionicons, FontAwesome, SimpleLineIcons
} from '@expo/vector-icons'
import styles from './styles.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyle from '../../src/defaultStyle/style.jsx'
import StatementRow from '../../components/StatementRow/index.jsx'
import { getTransactions } from '../../src/services/api.jsx'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'



const BankStatement = ({ navigation }) => {
    const [transactions, setTransactions] = useState({
        loading: true,
        data: []
    })

    const { token } = useSelector(state => {
        return state.userReducer
    })

    const fetchData = async () => {
        try {
            const transactions = await getTransactions(token, 'all')
            console.log(transactions)
            setTransactions({
                loading: false,
                data: transactions
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <SafeAreaView style={defaultStyle.container}>
            <View style={{ gap: 40 }}>
                <TouchableOpacity>
                    <Ionicons name='arrow-back' color={'#fff'} size={30} onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <Text style={defaultStyle.title}> Histórico </Text>
            </View>

            <ScrollView>
                {transactions.data.map((item, index) => {
                    return <StatementRow props={item} key={index} />
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

export default BankStatement