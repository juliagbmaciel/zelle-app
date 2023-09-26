import { Image, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import styles from './createAccount.style'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Input from '../../components/Input'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'


const Credentials = ({ navigation }) => {

  const { completeName } = useSelector(state => {
    return state.userReducer
  })

  const [obscureText, setObscureText] = useState(true)


  const validationSchema = Yup.object().shape({
    email: Yup.string().email('*Insira um e-mail válido').required('*Campo obrigatório'),
    password: Yup.string()
      .min(8, '*Senha deve conter no mínimo 8 caracteres')
      .required('*Campo brigatório'),
  })


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
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {navigation.navigate("FirstWelcome")}}
        >
          {({ handleChange, handleBlur, handleSubmit, touched, errors, isValid, setFieldTouched, values }) => (
            <View style={styles.logContent}>
              {values.email == '' && values.password == '' ? isValid = false : isValid = isValid}


              <View>
                <Input
                  label={"E-mail"}
                  keyboardType={"email-address"}
                  onChange={handleChange('email')}
                  onFocus={() => { setFieldTouched('email') }}
                  onBlur={() => { setFieldTouched('email', '') }}
                />
                {touched.email && errors.email && (
                  <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.email}</Text>
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
                    color={"#fff"} a
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
                <TouchableOpacity onPressIn={isValid ? handleSubmit : () => { }} style={isValid ? styles.buttonPrimary : styles.buttonInactive} onPress={() => { }}>
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

