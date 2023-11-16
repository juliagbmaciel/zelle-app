import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import defaultStyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'
import PressableButton from '../../components/Buttons'
import { updateClient } from '../../src/services/api'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'


export default function SettingPage({ route }) {
    const title = route.params
    const { accountData, token } = useSelector(state => {
        return state.userReducer
    })
    const [nameInput, setNameInput] = useState('')
    const navigation = useNavigation()


    const updateField = async (field, value) => {
        try {
            const client = await updateClient(token, field, value);
            console.log("Client: ", client);
        } catch (error) {
            console.error("Erro ao atualizar cliente aq: ", error);
        }
    };

    const willUpdateFeedback = (field, value) => {
        if (value.length < 10){
            Alert.alert(
                '',
                'Nome não pode ser menor que 10 caracteres',
                [
                  {
                    text: 'OK',
                    style: 'destructive',
                    onPress: () => {},
                  },
                ]
              );
            return
        }
        updateField(field, value)
        Alert.alert(
            '',
            'Nome alterado com sucesso!',
            [
              {
                text: 'OK',
                style: 'destructive',
                onPress: () => {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Bottom Navigation' },
                        ],
                    }))
    
                },
              },
            ]
          );
    }


    return (
        <View style={defaultStyle.container}>
            <View style={defaultStyle.logoArea}>
                <Image
                    source={require('../../assets/img/logo.png')}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
            {title === 'Nome de preferência' && (
                <View style={styles.nameContainer}>
                    <View>
                        <Text style={styles.label}>Nome atual</Text>
                        <Text style={styles.labelN}>{accountData.client.client.name}</Text>
                    </View>

                    <Input label={'Novo nome'} onChange={(value, la) => setNameInput(value)}/>
                    <PressableButton bgColor={'#D3FE57'} title={'Confirmar'} onPress={() => {willUpdateFeedback('name', nameInput)}}/>
                </View>

            )}
        </View>
    )
}
{/* <TextInput
secureTextEntry={obscureText}
keyboardType={'default'}
onChangeText={handleChange('password')}
onFocus={() => { setFieldTouched('password') }}
onBlur={() => { setFieldTouched('password', '') }}
value={values.password}
color={"#fff"}
maxLength={15}
style={{ height: "100%", width: "85%" }}
/> */}