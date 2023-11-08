import { Image, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './createAccount.style'
import Button from '../../components/Buttons'
import Input from '../../components/Input'
import { useSelector, useDispatch } from 'react-redux'
import { setTypeAccount } from '../../src/reducers/actions.jsx'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import { setCPF, setRG, setInscEstadual, setInscMunicipal, setCNPJ } from '../../src/reducers/actions.jsx'
import { Formik } from 'formik'
import * as Yup from 'yup'


const AccountType = ({navigation}) => {

  const [loader, setLoader] = useState(false)

  const validationSchema = Yup.object().shape({
    cpf: Yup.string()
      .min(11, '*CPF inválido')
      .required('*Campo obrigatório'),
    rg: Yup.string()
      .min(9, 'RG inválido')
      .required('*Campo brigatório'),
  })

  const validationSchemaPJ = Yup.object().shape({
    cnpj: Yup.string()
      .min(11, '*CNPJ inválido')
      .required('*Campo obrigatório'),
    inscEstadual: Yup.string()
      .required('*Campo brigatório'),
    inscMunicipal: Yup.string()
      .required('*Campo brigatório'),

  })

  const dispatch = useDispatch()


  const { accountType, cnpj, inscEstadual, inscMunicipal, cpf, rg } = useSelector(state => {
    return state.userReducer
  })



  const handleTypeAccount = (type) => {
    dispatch(setTypeAccount(type))
  }

  const validForm = (values) => {
    if (accountType === "Pessoa Física"){
      dispatch(setRG(values.rg))
      dispatch(setCPF(values.cpf))
    } else{
      dispatch(setInscEstadual(values.inscEstadual))
      dispatch(setInscMunicipal(values.inscMunicipal))
      dispatch(setCNPJ(values.cnpj))
    }
    navigation.navigate('Credentials')
    
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
        <Text style={styles.label}>Tipo de conta</Text>
        {accountType === '' && (
          <View style={styles.buttonsViewSec}>
            <Button onPress={() => handleTypeAccount('Pessoa Física')} marginTop={'0'} fontSize={"13px"} title={"Pessoa física"} bgColor={"#D3FE57"} padding={"11px 23px"} />
            <Button onPress={() => handleTypeAccount('Pessoa Jurídica')} marginTop={'0'} fontSize={"13px"} title={"Pessoa Jurídica"} bgColor={"#171715"} colorTitle={"#D3FE57"} padding={"11px 23px"} />
          </View>

        )}

        {accountType === 'Pessoa Física' && (
          <View style={styles.logContent}>
            <Animatable.View animation={'fadeIn'} style={{ backgroundColor: "#D3FE57", paddingHorizontal: 23, paddingVertical: 11, borderRadius: 30 }}>
              <Text style={{ color: "#171715", fontFamily: "bold" }}>{accountType}</Text>
            </Animatable.View>
            <Formik
              initialValues={{ cpf: '', rg: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => validForm(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, touched, errors, isValid, setFieldTouched, values }) => (
                <View style={styles.logContent}>
                  {values.rg == '' && values.cpf == '' ? isValid = false : isValid = isValid}

                  <View>
                    <Input
                      label={"RG (registro geral)"}
                      maxLength={12} keyboardType={"numeric"}
                      onChange={handleChange('rg')}
                      onFocus={() => { setFieldTouched('rg') }}
                      onBlur={() => { setFieldTouched('rg', '') }}
                    />
                    {touched.rg && errors.rg && (
                      <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.rg}</Text>
                    )}
                  </View>


                  <View>
                    <Input
                      label={"CPF"}
                      maxLength={14}
                      keyboardType={"numeric"}
                      onChange={handleChange('cpf')}
                      onFocus={() => { setFieldTouched('cpf') }}
                      onBlur={() => { setFieldTouched('cpf', '') }}
                    />
                    {touched.cpf && errors.cpf && (
                      <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.cpf}</Text>
                    )}
                  </View>
                  <View style={Platform.OS === "ios" ? styles.buttonsViewAnd : styles.buttonsViewAnd} >
                    <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                      dispatch(setTypeAccount(''))
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
        )}
        {accountType === 'Pessoa Jurídica' && (
          <View style={styles.logContent}>
            <Animatable.View animation={'fadeIn'} style={{ backgroundColor: "#171715", paddingHorizontal: 23, paddingVertical: 11, borderRadius: 30 }}>
              <Text style={{ color: "#D3FE57", fontFamily: "bold" }}>{accountType}</Text>
            </Animatable.View>
            <Formik
              initialValues={{ cnpj: '', inscEstadual: '', inscMunicipal: '' }}
              validationSchema={validationSchemaPJ}
              onSubmit={(values) => validForm(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, touched, errors, isValid, setFieldTouched, values }) => (
                <View style={styles.logContent}>
                  {values.cnpj == '' && values.inscEstadual == '' && values.inscMunicipal == '' ? isValid = false : isValid = isValid}

                  <View>
                    <Input
                      label={"CNPJ"}
                      maxLength={100}
                      keyboardType={"default"}
                      onChange={handleChange('cnpj')}
                      onFocus={() => { setFieldTouched('cnpj') }}
                      onBlur={() => { setFieldTouched('cnpj', '') }}
                    />
                    {touched.cnpj && errors.cnpj && (
                      <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.cnpj}</Text>
                    )}

                  </View>
                  <View>
                    <Input
                      label={"Inscrição estadual"}
                      maxLength={100}
                      keyboardType={"default"}
                      onChange={handleChange('inscEstadual')}
                      onFocus={() => { setFieldTouched('inscEstadual') }}
                      onBlur={() => { setFieldTouched('inscEstadual', '') }}
                    />
                    {touched.inscEstadual && errors.inscEstadual && (
                      <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.inscEstadual}</Text>
                    )}
                  </View>

                  <View>
                    <Input
                      label={"Inscrição municipal"}
                      maxLength={100}
                      keyboardType={"default"}
                      onChange={handleChange('inscMunicipal')}
                      onFocus={() => { setFieldTouched('inscMunicipal') }}
                      onBlur={() => { setFieldTouched('inscMunicipal', '') }}
                    />
                    {touched.inscMunicipal && errors.inscMunicipal && (
                      <Text style={{ fontFamily: 'semibold', color: "red" }}>{errors.inscMunicipal}</Text>
                    )}

                  </View>
                  <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >
                    <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                      dispatch(setTypeAccount(''))
                    }}>
                      <Ionicons name='arrow-back' size={20} />
                      <Text>Voltar</Text>
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
        )}
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default AccountType
