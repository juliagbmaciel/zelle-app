import { Text, View, Image, Alert, BackHandler } from 'react-native'
import PressableButton from '../../components/Buttons'
import { CommonActions } from '@react-navigation/native';
import styles from './styles'

import React, { useEffect } from 'react'


const CreateCard = ({ navigation }) => {





    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <Image
                    source={require("../../assets/img/cardBackground.png")}
                    style={styles.backgroundImage}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Olá, seja bem vindo(a) ao Zelle Bank!</Text>
                <Text style={styles.subtitle}>Entre agora em sua conta! Estamos aqui para melhor atendê-lo(a), obrigado por escolher a Zelle!</Text>
                <PressableButton title={'Entrar'} bgColor={'#D3FE57'} marginTop={'50px'} onPress={() => navigation.goBack()} />
                <PressableButton title={'Entrar'} bgColor={'#D3FE57'} marginTop={'50px'} onPress={() => navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Bottom Navigation' },
                        { name: 'Home' },
                    ],
                }))} />
            </View>

        </View>
    )
}



export default CreateCard

