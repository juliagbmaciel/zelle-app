import { Text, View, Image, Alert, BackHandler } from 'react-native'
import PressableButton from '../../components/Buttons'
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../../src/reducers/actions'
import styles from './firstWelcome.style'

import React, { useEffect } from 'react'


const FirstWelcome = ({ navigation }) => {

    const { completeName, accountData } = useSelector(state => {
        return state.userReducer
    })
    const dispatch = useDispatch()
    const names = completeName.split(' ')
    firstName = names[0]
    console.log(accountData)

    navigation.removeListener('beforeRemove');

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            
            e.preventDefault();
            Alert.alert(
                'Discard changes?',
                'You have unsaved changes. Are you sure to discard them and leave the screen?',
                [
                  { text: "Don't leave", style: 'cancel', onPress: () => {} },
                  {
                    text: 'Discard',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(resetState)
                        navigation.dispatch(e.data.action)
                    },
                  },
                ]
              );

        })

        }, []);
    

    return (
        <View style={styles.container}>
            <View style={styles.backgroundImage}>
                <Image
                    source={require("../../assets/img/cardBackground.png")}
                    style={styles.backgroundImage}
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

