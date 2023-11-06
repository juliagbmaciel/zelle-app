import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {


    const { accountData, clientData } = useSelector(state => {
        return state.userReducer
    })
    console.log(accountData)
    const name = 'Julia Gabrielle'
    const balance = 10000

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View>
            <View style={styles.header}>
                <View style={styles.iconProfile}>
                    <Ionicons name='person-outline' size={18} color={"#A2A2A2"} />
                </View>
                <View>
                    <Text style={styles.subTitle}>Olá,</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <View style={styles.balance}>
                <View>
                    <Text>Saldo na conta</Text>
                    <Text>R${balance}</Text>
                </View>
                <View>
                    <Ionicons name='eye-outline' size={23}/>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Home