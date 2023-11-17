import {
    FlatList,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Dimensions,
    Switch
} from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import defaultStyle from '../../src/defaultStyle/style.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import { createCard, getCards } from '../../src/services/api'
import { useEffect } from 'react'


const Wallet = ({ navigation }) => {


    const { token, accountData } = useSelector(state => {
        return state.userReducer
    })


    const [cardData, setCardData] = useState({
        data: null,
        loading: true,
        error: null,
    })

    const [currentIndex, setCurrentIndex] = useState(0)
    const [listSize, setListSize] = useState(0)
    const [active, setActive] = useState(true)

    const createList = (size) => {
        return Array.from({ length: size }, () => 1);
    }

    const paginator = createList(listSize)

    const screenWidth = Dimensions.get('window').width;

    const fetchData = async () => {
        setCardData((prevState) => ({ ...prevState, loading: true }));

        try {
            const cards = await getCards(token, accountData.account.id);
            setCardData({
                data: cards,
                loading: false,
                error: null,
            });
            setListSize(cards.length)

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
        <SafeAreaView style={defaultStyle.container}>
            <View style={defaultStyle.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View>
            <Text style={styles.title}>Meus cartões</Text>
            {cardData.loading ? (
                <View style={styles.noCardContainer}>
                    <ActivityIndicator size={60} color={"#D3FE57"} />
                </View>
            ) : cardData.data.length === 0 ? (
                <View>
                    <View style={styles.noCardContainer}>
                        <Text style={styles.label}> Você ainda não possui cartões!</Text>
                    </View>
                </View>
            ) : (
                <View style={{ alignItems: 'center', gap: 20 }}>

                    <FlatList
                        data={cardData.data}
                        style={styles.cardList}
                        renderItem={(item) => <Card props={item} seeBill={true}/>}
                        contentContainerStyle={{ columnGap: 20 }}
                        horizontal
                        onScroll={e => {
                            setCurrentIndex((e.nativeEvent.contentOffset.x / screenWidth).toFixed(0))
                        }}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        snapToAlignment={'center'}
                        bounces={false}
                    />
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        {paginator.map((item, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: currentIndex == index ? "#D3FE58" : "#4C5827", width: 8, height: 8, borderRadius: 20 }}>
                                </View>
                            );
                        })}
                    </View>
                </View>



            )}
            <View>
                <Text style={styles.title}>Solicitar cartão</Text>
            </View>
            <TouchableOpacity style={styles.cardCreate} onPress={() => navigation.navigate('CreateCard')}>
                <Text style={styles.more}>+</Text>
            </TouchableOpacity>

            {!cardData.loading && cardData.data.length > 0 &&
                <View>
                    <Text style={styles.title}>Configurações</Text>
                    <View style={styles.paymentComponent}>
                        <Text style={styles.labelComponent}>Pagamento por aproximação</Text>
                        <Switch
                            value={active}
                            trackColor={{ true: '#3DBE59', false: '#ABABAB' }}
                            thumbColor={active ? '#fff' : "#fff"}
                            onValueChange={() => setActive(!active)}
                        />
                    </View>
                </View>

            }


        </SafeAreaView>
    )
}

export default Wallet
