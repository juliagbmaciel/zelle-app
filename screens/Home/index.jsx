import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Ionicons, FontAwesome, SimpleLineIcons
} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import styles from './styles.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path, Rect } from 'react-native-svg';
import { getAccount } from '../../src/services/api.jsx'

const Home = () => {


    const { accountData, token } = useSelector(state => {
        return state.userReducer
    })
    const [hideBalance, setHideBalance] = useState(false);
    console.log(accountData)
    const name = 'Julia Gabrielle'
    const balance = 10000


    useEffect(() => {
        const account = getAccount(token)
        console.log(account.balance)
      }, []);


    function setBalance() {
        if (balance) {
            if (hideBalance) {
                return '●●●●●'
            } else {
                return 'R$ ' + balance
            }
        } else {
            return (
                <Animatable.View>
                    <Animatable.Text
                        animation="flash"
                        iterationCount={"infinite"}
                        direction="normal"
                    >
                        Carregando...
                    </Animatable.Text>
                </Animatable.View>
            )
        }
    }

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
                    <Text style={styles.letter}>Saldo na conta</Text>
                    <Text style={styles.bold}>{setBalance()}</Text>
                </View>
                <TouchableOpacity onPressIn={() => setHideBalance(!hideBalance)}>
                    {!hideBalance ? <Ionicons name='eye-outline' size={23} /> : <Ionicons name='eye-off-outline' size={23} />}
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Operações</Text>
                <View style={styles.row}>
                    <View style={styles.card}>
                        <FontAwesome name='exchange' color={"#fff"} size={20} />
                        <Text style={styles.cardLetter}>Transferência</Text>
                    </View>
                    <View style={styles.card}>
                        <FontAwesome name='money' color={"#fff"} size={20} />
                        <Text style={styles.cardLetter}>
                            Solicitar
                        </Text>
                        <Text style={styles.cardLetter}>
                            empréstimo
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <SimpleLineIcons name='graph' color={"#fff"} size={20} />
                        <Text style={styles.cardLetter}>
                            Investir
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.rowCard}>
                        <FontAwesome name='money' color={"#fff"} size={20} />
                        <Text style={styles.cardLetter}>Depositar dinheiro</Text>
                    </View>
                    <View style={styles.rowCard}>
                        <Ionicons name='card-outline' color={"#fff"} size={20} />
                        <Text style={styles.cardLetter}>Meus cartões</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.cardSecondary}>
                        <View>
                            <Text style={styles.cardLetter}>Portabilidade de salario na Zelle</Text>
                            <Text style={[styles.cardLetter, styles.cardWidth]}>Traga o seu salário e acompanhe por aqui as suas finanças mensais</Text>
                        </View>
                        <View style={{position: 'absolute', right: 50, top: 30}}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <Path d="M0 31V0H3.44444V27.5556H31V31H0ZM5.16667 25.8333V10.3333H12.0556V25.8333H5.16667ZM13.7778 25.8333V1.72222H20.6667V25.8333H13.7778ZM22.3889 25.8333V17.2222H29.2778V25.8333H22.3889Z" fill="#F8F8F8" />
                            </Svg>
                        </View>

                    </View>
                    
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Home