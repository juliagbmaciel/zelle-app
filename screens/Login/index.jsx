import { Image, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../src/services/api'
import { setToken, setSigned, setAccountData } from '../../src/reducers/actions'



const Login = ({ navigation }) => {
    const [obscureText, setObscureText] = useState(true)
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('*Campo brigatório'),
    }, {
        cpf: Yup.string()
            .min(11, '*Insira um cpf/cnpj válido')
            .required('*Campo brigatório'),
    })

    const handleSignIn = async (values) => {

        try {
            const tokenData = await getToken(values.cpf, values.password);
            if (tokenData){
                dispatch(setToken(tokenData.auth_token));
                dispatch(setSigned(true))
            }
        } catch (error) {
            Alert.alert(
                'Ops...',
                `${error.response.data.non_field_errors ? error.response.data.non_field_errors : error.response.data.detail}`,
                [
                    {
                        text: 'Cancelar',
                        style: 'destructive',
                        onPress: () => {

                        },
                    },
                ]
            );
        }
    }


    return (
        <TouchableWithoutFeedback onPressIn={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../assets/img/logo-bigger.png')}
                    />
                </View>
                <View style={styles.mainContent}>
                    <Text style={styles.title}>Faça login em sua conta</Text>
                    <Formik
                        initialValues={{ password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => navigation.navigate('FirstWelcome')}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, errors, isValid, setFieldTouched, values }) => (
                            <View style={styles.logContent}>
                                {values.password == '' ? isValid = false : isValid = isValid}
                                <View>
                                </View>
                                <View>
                                    <Text style={styles.label}>
                                        CPF/CNPJ
                                    </Text>
                                    <View style={styles.inputPassword}>
                                        <TextInput
                                            keyboardType={'numeric'}
                                            onChangeText={handleChange('cpf')}
                                            onFocus={() => { setFieldTouched('cpf') }}
                                            onBlur={() => { setFieldTouched('cpf', '') }}
                                            value={values.cpf}
                                            color={"#fff"}
                                            maxLength={15}
                                            style={{ height: "100%", width: "85%" }}
                                        />

                                    </View>
                                    {touched.cpf && errors.cpf && (
                                        <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.password}</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={styles.label}>
                                        Senha
                                    </Text>
                                    <View style={styles.inputPassword}>
                                        <TextInput
                                            secureTextEntry={obscureText}
                                            keyboardType={'default'}
                                            onChangeText={handleChange('password')}
                                            onFocus={() => { setFieldTouched('password') }}
                                            onBlur={() => { setFieldTouched('password', '') }}
                                            value={values.password}
                                            color={"#fff"}
                                            maxLength={15}
                                            style={{ height: "100%", width: "85%" }}
                                        />
                                        <TouchableOpacity onPressIn={() => setObscureText(!obscureText)}>
                                            <Ionicons name={obscureText ? 'eye-off-outline' : 'eye-outline'} size={20} color={"#ccc"} />
                                        </TouchableOpacity>

                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.password}</Text>
                                    )}
                                </View>

                                <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >


                                    <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                                        navigation.goBack()
                                    }}>
                                        <Ionicons name='arrow-back' size={20} />
                                        <Text style={{ fontFamily: 'regular' }}>Voltar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPressIn={isValid ? () => handleSignIn(values) : () => { }} style={isValid ? styles.buttonPrimary : styles.buttonInactive} onPress={() => handleSignIn}>
                                        <Text style={isValid ? { fontFamily: 'regular' } : { color: "#313131" }}>Próximo</Text>
                                        <Ionicons style={!isValid && { color: "#313131" }} name='arrow-forward' size={20} />
                                    </TouchableOpacity>
                                </View>



                            </View>
                        )}
                    </Formik>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

