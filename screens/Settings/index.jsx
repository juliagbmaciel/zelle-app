import { View, Text, SafeAreaView, Image } from 'react-native'
import SettingsRow from '../../components/SettingsRow'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { useSelector } from 'react-redux'

export default function Settings() {

    const { accountData } = useSelector(state => {
        return state.userReducer
    })
    const agency = accountData.account.agency
    const number = accountData.account.number
    const name = accountData.client.client.name


    const dataRows = [
        { title: "Nome de preferência" },
        { title: "Contato" },
        { title: "Alterar foto de perfil" },
        { title: "Adicionar endereço" },
        { title: "Notificações" },
        { title: "Me ajuda" }
    ]

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
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.text}>Agência {agency} - Conta {number}-1 Banco 0123 - Zelle Pagamentos S.A - Instituição de Pagamento</Text>
                </View>

            </View>
            <View>
                {dataRows.map((item, index) => {
                    return <SettingsRow title={item.title} key={index}/>
                })}
            </View>

        </SafeAreaView>
    )
}