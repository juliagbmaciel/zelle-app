import { Text, View, Image, Alert, BackHandler } from 'react-native'
import PressableButton from '../../components/Buttons'
import { createCard, getCards } from '../../src/services/api'
import styles from './styles'
import { useSelector } from 'react-redux';


const CreateCard = ({ navigation }) => {

    const { token } = useSelector(state => {
        return state.userReducer
    })

    const createCardFunc = async () => {

        try {
            const card = await createCard(token);
            navigation.navigate('CardCreated', {card})

        } catch (error) {
            console.error("Erro ao criar o cartão: ", error);
        }
        
    };


    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <Image
                    source={require("../../assets/img/cardBackground.png")}
                    style={styles.backgroundImage}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.gap}>
                    <Text style={styles.title}>Solicitar cartão de crédito</Text>
                    <Text style={styles.subtitle}>Tenha um cartão de crédito sem anuidade e pague as suas compras após um mês, ou parcele-as</Text>
                </View>

                <PressableButton title={'Pedir cartão'} bgColor={'#D3FE57'} marginTop={'10px'} onPress={() => createCardFunc()} />
            </View>

        </View>
    )
}



export default CreateCard

