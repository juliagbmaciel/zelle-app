import { View, Text, Image } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'
import styles from './styles'
import React from 'react'
import PressableButton from '../../components/Buttons'

const TransferView = ({ navigation }) => {

    const { transferData } = useSelector(state => {
        return state.userReducer
    })
    const value = transferData.value
    const valueFormatted = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (
        <View style={defaultStyle.container}>
            <View style={defaultStyle.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View >
            <View style={styles.justify}>
                <View>
                    <View style={styles.main}>
                        <Text style={defaultStyle.title}>Transferindo...</Text>
                        <View>
                            <Text style={styles.value}>{valueFormatted}</Text>
                            <Text style={defaultStyle.subtitle}>para {transferData.client_receiver.name}</Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={styles.firstColumn}>
                            <Text style={defaultStyle.subtitle}>CPF/CNPJ</Text>
                            <Text style={defaultStyle.subtitle}>Instituição</Text>
                        </View>
                        <View style={styles.secondColumn}>
                            <Text style={defaultStyle.subtitle}>{transferData.client_receiver.user.cpf}</Text>
                            <Text style={defaultStyle.subtitle}>ZellePay - IP</Text>
                        </View>
                    </View>
                </View>
                <PressableButton bgColor={'#D3FE57'} colorTitle={'#000'} title={'Como transferir'} onPress={() => {navigation.navigate('TransferChoice')}}/>
            </View>


        </View>
    )
}

export default TransferView