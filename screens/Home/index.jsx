import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Ionicons, FontAwesome, SimpleLineIcons
} from '@expo/vector-icons'
import styles from './styles.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path, Rect } from 'react-native-svg';
import { getAccount } from '../../src/services/api.jsx'
import { setAccountData } from '../../src/reducers/actions.jsx'
import defaultStyle from '../../src/defaultStyle/style.jsx'

const Home = () => {


    const { token } = useSelector(state => {
        return state.userReducer
    })
    const [hideBalance, setHideBalance] = useState(false);
    const [imageUri, setImageUri] = useState('')
    const [accountDataApi, setAccountDataApi] = useState({
        data: null,
        loading: true,
        error: null,
    });

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            setAccountDataApi((prevState) => ({ ...prevState, loading: true }));

            try {
                const account = await getAccount(token);
                setAccountDataApi({
                    data: account,
                    loading: false,
                    error: null,
                });
                dispatch(setAccountData(account))


            } catch (error) {
                setAccountDataApi({
                    data: null,
                    loading: false,
                    error: "Erro ao buscar os dados da conta.",
                });
            }
        };

        fetchData();
    }, []);

    function setBalance() {
        const balance = accountDataApi.data.account.balance
        const balanceFormatted = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        if (hideBalance) {
            return '●●●●●'
        } else {
            return balanceFormatted
        }

    }

    return (
        accountDataApi.loading ? (
            <View style={{ backgroundColor: "#000", flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size={60} color={"#D3FE57"} />
            </View>

        ) : (
            <SafeAreaView style={defaultStyle.container}>
                {console.log(accountDataApi.data.client.client.picture)}
                {/* <Image source={{uri: accountDataApi.data.client.client.picture}} style={{width: 200, height: 200}}/> */}
                <View style={defaultStyle.logoArea}>
                    <Image
                        source={require('../../assets/img/logo.png')}
                    />
                </View>

                <View style={styles.header}>
                    {console.log(accountDataApi.data.client.client.picture)}
                    {accountDataApi.data.client.client.picture === null ? (
                        <View style={styles.iconProfile}>
                            <Ionicons name='person-outline' size={18} color={"#A2A2A2"} />
                        </View>
                    ) : (
                        <Image source={{uri: `http://192.168.0.144:8000${accountDataApi.data.client.client.picture}`}} style={styles.iconProfile}/>
                        )}

                    <View>
                        <Text style={styles.subTitle}>Olá,</Text>
                        <Text style={styles.name}>{accountDataApi.data.client.client.name}</Text>
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
                        <TouchableOpacity style={styles.card}>
                            <FontAwesome name='exchange' color={"#fff"} size={20} />
                            <Text style={styles.cardLetter}>Transferência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <FontAwesome name='money' color={"#fff"} size={20} />
                            <Text style={styles.cardLetter}>
                                Solicitar
                            </Text>
                            <Text style={styles.cardLetter}>
                                empréstimo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <SimpleLineIcons name='graph' color={"#fff"} size={20} />
                            <Text style={styles.cardLetter}>
                                Investir
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rowCard}>
                            <FontAwesome name='money' color={"#fff"} size={20} />
                            <Text style={styles.cardLetter}>Depositar dinheiro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rowCard}>
                            <Ionicons name='card-outline' color={"#fff"} size={20} />
                            <Text style={styles.cardLetter}>Meus cartões</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.cardSecondary}>
                            <View>
                                <Text style={styles.cardLetter}>Portabilidade de salario na Zelle</Text>
                                <Text style={[styles.cardLetter, styles.cardWidth]}>Traga o seu salário e acompanhe por aqui as suas finanças mensais</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 50, top: 30 }}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <Path d="M0 31V0H3.44444V27.5556H31V31H0ZM5.16667 25.8333V10.3333H12.0556V25.8333H5.16667ZM13.7778 25.8333V1.72222H20.6667V25.8333H13.7778ZM22.3889 25.8333V17.2222H29.2778V25.8333H22.3889Z" fill="#F8F8F8" />
                                </Svg>
                            </View>

                        </View>

                    </View>

                </View>

            </SafeAreaView>
        )

    )
}

export default Home