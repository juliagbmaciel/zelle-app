import { View, Text, Image, Alert, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import defaultStyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'
import Input from '../../components/Input'
import PressableButton from '../../components/Buttons'
import { updateClient } from '../../src/services/api'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native'
import { getContacts, createContact, sendPicture } from '../../src/services/api'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';



export default function SettingPage({ route }) {
    const title = route.params
    const { accountData, token } = useSelector(state => {
        return state.userReducer
    })
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [numberInput, setNumberInput] = useState(0)

    const [image, setImage] = useState('')





    const [contactData, setContactData] = useState({
        data: null,
        loading: true,
        error: null,
    })

    const navigation = useNavigation()


    const updateField = async (field, value) => {
        try {
            const client = await updateClient(token, field, value);
            console.log("Client: ", client);
        } catch (error) {
            console.error("Erro ao atualizar cliente aq: ", error);
        }
    };

    const saveContact = async () => {
        try {
            const contact = await createContact(token, numberInput, emailInput);
            console.log("Contact: ", contact);
        } catch (error) {
            console.error("Erro ao criar contato aqui", error);
        }
    };

    const willUpdateFeedback = (field, value) => {
        if (value.length < 10) {
            Alert.alert(
                '',
                'Nome não pode ser menor que 10 caracteres',
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => { },
                    },
                ]
            );
            return
        }
        updateField(field, value)
        createAlert('Nome alterado com sucesso')
    }

    const willSaveContact = () => {
        if (numberInput.length < 11 || emailInput.length < 12) {
            Alert.alert(
                '',
                'Os valores não podem ser menores que 12, e nem vazios',
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => { },
                    },
                ]
            );
            return
        }
        saveContact(nameInput, emailInput)
        createAlert('Contato adicionado com sucesso!')
    }

    const createAlert = (msg) => {
        Alert.alert(
            '',
            `${msg}`,
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

    const fetchDataContact = async () => {
        setContactData((prevState) => ({ ...prevState, loading: true }));

        try {
            const contacts = await getContacts(token);
            setContactData({
                data: contacts,
                loading: false,
                error: null,
            });
        } catch (error) {
            setContactData({
                data: null,
                loading: false,
                error: "Erro ao buscar contatos",
            });
        }
    };



    useEffect(() => {
        if (title === 'Contato') {
            fetchDataContact();
        }
    }, []);


    const gallery = async () => {
        console.log('uaiii')
        const result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        console.log((await result))

        if (!(await result).canceled) {
            setImage((await result).assets[0].uri)
        }else{
            return
        }
    }

    const sendImageFunc = async () => {
        console.log(image)
        const formData = new FormData();
    
        formData.append('picture', {
            uri: image,
            name: 'nome_da_imagem.jpg',
            type: 'image/jpeg',
        });
    
        try {
            console.log(formData)
            const response = await sendPicture(token, formData)
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao criar instância do modelo comm', error);
        }
    };
    


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

                    <Input label={'Novo nome'} onChange={(value, la) => setNameInput(value)} />
                    <PressableButton bgColor={'#D3FE57'} title={'Confirmar'} onPress={() => { willUpdateFeedback('name', nameInput) }} />
                </View>

            )}
            {title === 'Contato' && !contactData.loading && (
                <ScrollView>
                    <View>
                        <Text style={styles.label}>Contatos atuais</Text>
                        {contactData.data !== null ? (

                            contactData.data.map((item, index) => (

                                <View key={index}>
                                    <Text style={styles.labelN}>{item.number}</Text>
                                    <Text style={styles.labelN}>{item.email}</Text>
                                </View>
                            ))
                        ) : (
                            <View>
                                <Text style={styles.title}>Você não possui contatos ainda</Text>
                            </View>
                        )}
                    </View>
                    <Text style={styles.title}>Novo contato</Text>
                    <View style={{ gap: 30 }}>
                        <Input label={'Novo numero'} keyboardType={'numeric'} onChange={(value, la) => setNumberInput(value)} />
                        <Input label={'Novo e-mail'} onChange={(value, la) => setEmailInput(value)} />
                    </View>
                    <PressableButton marginTop={'90px'} bgColor={'#D3FE57'} title={'Confirmar'} onPress={() => { willSaveContact() }} />
                </ScrollView>
            )}



            {title === 'Alterar foto de perfil' && (
                <View style={{ alignItems: 'center' }}>
                    {accountData.client.client.picture === null && image === '' && (
                        <View style={styles.iconProfile}>
                            <Ionicons name='person-outline' size={60} color={"#A2A2A2"} />
                        </View>
                    )}
                    {image !== '' && (
                        <Image source={{ uri: image }} style={styles.img} />
                    )}
                    
                    
                     <PressableButton bgColor={'#D3FE57'} marginTop={'70px'} title={'Escolher Foto'} onPress={gallery} />
                    <PressableButton bgColor={'#D3FE57'} title={'Confirmar'} onPress={sendImageFunc}/>

                </View>
            )}
        </View>
    )
}
