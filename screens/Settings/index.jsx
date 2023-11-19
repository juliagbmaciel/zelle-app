import { View, Text, SafeAreaView, Image } from 'react-native'
import SettingsRow from '../../components/SettingsRow'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import defaultSyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'

export default function Settings() {

    const { accountData } = useSelector(state => {
        return state.userReducer
    })
    const agency = accountData.account.agency
    const number = accountData.account.number
    const name = accountData.client.client.name
    const imageUri = accountData.client.client.picture


    const dataRows = [
        { title: "Nome de preferência" },
        { title: "Contato" },
        { title: "Alterar foto de perfil" },
        { title: "Adicionar endereço" },
        { title: "Notificações" },
        { title: "Me ajuda" }
    ]



    return (
        <SafeAreaView style={defaultSyle.container}>
            <View style={defaultSyle.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View>
            <View style={styles.header}>
                {imageUri === null ? (
                    <View style={styles.iconProfile}>
                        <Ionicons name='person-outline' size={18} color={"#A2A2A2"} />
                    </View>
                ) : (
                    <Image source={{uri: `http://192.168.0.144:8000${imageUri}`}}  style={styles.iconProfile}/>
                )}

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>Agência {agency} - Conta {number}-1 Banco 0123 - Zelle Pagamentos S.A - Instituição de Pagamento</Text>
                </View>

            </View>
            <View style={styles.mTop}>
                {dataRows.map((item, index) => {
                    return <SettingsRow title={item.title} key={index} />
                })}
            </View>

        </SafeAreaView>
    )
}