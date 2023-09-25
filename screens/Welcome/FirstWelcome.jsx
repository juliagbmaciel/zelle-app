import { Text, View, Image, Alert, BackHandler } from 'react-native'
import PressableButton from '../../components/Buttons'
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../../src/reducers/actions'
import styles from './firstWelcome.style'

import React, { useEffect } from 'react'

const FirstWelcome = ({ navigation }) => {

    const { completeName } = useSelector(state => {
        return state.userReducer
    })
    const dispatch = useDispatch()
    const names = completeName.split(' ')
    firstName = names[0]

    useEffect(() => {
        const sla = navigation.addListener('beforeRemove', e => {
            
            e.preventDefault();
            Alert.alert(
                '',
                'Deseja finalizar o app?',
                [
                  {
                    text: 'Cancelar',
                    onPress: () => console.log('Ação cancelada'),
                    style: 'cancel',
                  },
                  {
                    text: 'Sair',
                    onPress: async () => {
                        await navigation.navigate('Initial')
                        console.log('navigaaaaaaaaaaaaa')
                        dispatch(resetState())
                        BackHandler.exitApp()
                    },
                  },
                ],
                { cancelable: false }
              );
        })
    })

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <Image
                    source={require("../../assets/img/cardBackground.png")}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Olá {firstName}, seja bem vindo(a) ao Zelle Bank!</Text>
                <Text style={styles.subtitle}>Vamos dar início a sua jornada conosco?</Text>
                <PressableButton title={'Entrar'} bgColor={'#D3FE57'} marginTop={'50px'} />
            </View>

        </View>
    )
}



export default FirstWelcome

