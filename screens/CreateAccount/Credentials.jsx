import { Image, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import styles from './createAccount.style'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { createClient, createUser, getToken, createPhysicalClient, createAccount, createLegalClient } from '../../src/services/api'
import { setToken, setSigned, setClientData, setAccountData } from '../../src/reducers/actions'



const Credentials = ({ navigation }) => {

  const {
    completeName, socialName,
    dateOfBirth, accountType, rg, cpf,
    cnpj, inscEstadual, inscMunicipal, signed, token
  } = useSelector(state => {
    return state.userReducer
  })



  const [obscureText, setObscureText] = useState(true)
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, '*Senha deve conter no mínimo 8 caracteres')
      .required('*Campo brigatório'),
  })

  const handleSignIn = async (values) => {

    try {
      if (accountType === 'Pessoa Física') {
        const user = await createUser(cpf, values.password, completeName);

        const tokenDataApi = await getToken(cpf, values.password);

        const client = await createClient(completeName, socialName, dateOfBirth, tokenDataApi.auth_token);

        const account = await createAccount(tokenDataApi.auth_token)

        dispatch(setAccountData({ account }))
        dispatch(setToken(tokenDataApi.auth_token));

        const physicalClient = await createPhysicalClient(rg, tokenDataApi.auth_token)
        dispatch(setClientData({ physicalClient }))

        dispatch(setSigned(true))

      } else {
        const user = await createUser(cnpj, values.password, completeName);

        const tokenDataApi = await getToken(cnpj, values.password);

        const client = await createClient(completeName, socialName, dateOfBirth, tokenDataApi.auth_token);

        const account = await createAccount(tokenDataApi.auth_token)

        const legalClient = await createLegalClient(tokenDataApi.auth_token, cnpj, inscEstadual, inscMunicipal )

        dispatch(setAccountData({ account }))
        dispatch(setToken(tokenDataApi.auth_token));
        dispatch(setClientData({ legalClient }))
        dispatch(setSigned(true))
      }

    } catch (error) {
       Alert.alert(
              'Ops!',
              'Algo deu errado com a criação da conta',
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
          <Text style={styles.title}>Criar conta</Text>
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

export default Credentials

