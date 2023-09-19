import { Image, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './createAccount.style'
import Button from '../../components/Buttons'
import Input from '../../components/Input'
import { useSelector, useDispatch } from 'react-redux'
import { setTypeAccount } from '../../src/reducers/actions.jsx'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons'
import { setCPF, setRG } from '../../src/reducers/actions.jsx'


const AccountType = () => {

  const [errorRG, setErrorRG ] = useState('')
  const [errorCPF, setErrorCPF ] = useState('')

  const dispatch = useDispatch()

  const { accountType, rg, cpf, cnpj, inscEstadual, inscMunicipal } = useSelector(state => {
    return state.userReducer
  })

  const handleTypeAccount = (type) => {
    dispatch(setTypeAccount(type))
  }

  const validInfos = (value, type) => {
    const valueFormated = value.replace(/[.-]/g, '');
    if (type.includes("RG") && valueFormated.length < 9){
      setErrorRG("*RG inválido")
      dispatch(setRG(''))
      return
    }

    if (type.includes("CPF") && valueFormated.length < 11 ){
      setErrorCPF('*CPF inválido')
      dispatch(setCPF(''))
      return
    }
    setErrorCPF('')
    setErrorRG('')
    type.includes('CPF') ? dispatch(setCPF(valueFormated)) : dispatch(setRG(valueFormated))
    
  }

  const sendForm = () => {
    console.log(cpf, rg)
  }

  return (
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
            <View>
            <Input label={"RG (registro geral)"} maxLength={12} keyboardType={"numeric"} onChange={validInfos}/>
            {errorRG !== '' && ( 
              <Text style={{color: "red", fontFamily: "semibold"}}>
                {errorRG}
              </Text>
            )}
            </View>
            <View>
            <Input label={"CPF"} maxLength={14} keyboardType={"numeric"} onChange={validInfos}/>
            {errorCPF !== '' && ( 
              <Text style={{color: "red", fontFamily: "semibold"}}>
                {errorCPF}
              </Text>
            )}
            </View>
            <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >
              <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                dispatch(setTypeAccount(''))
              }}>
                <Ionicons name='arrow-back' size={20} />
                <Text>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonPrimary} onPress={sendForm}>
                <Text>Próximo</Text>
                <Ionicons name='arrow-forward' size={20} />
              </TouchableOpacity>
            </View>
          </View>

        )}
        {accountType === 'Pessoa Jurídica' && (
          <View style={styles.logContent}>
            <Animatable.View animation={'fadeIn'} style={{ backgroundColor: "#171715", paddingHorizontal: 23, paddingVertical: 11, borderRadius: 30 }}>
              <Text style={{ color: "#D3FE57", fontFamily: "bold" }}>{accountType}</Text>
            </Animatable.View>
            <View>
            <Input label={"CNPJ"} maxLength={100} keyboardType={"default"} onChange={() => console.log('onchangr')}/>
            </View>
            <View>
              <Input label={"Inscrição estadual"} maxLength={100} keyboardType={"default"} onChange={() => console.log('onchangr')}/>
            </View>
            <View>
            <Input label={"Inscrição municipal"} maxLength={100} keyboardType={"default"} onChange={() => console.log('onchangr')}/>
            </View>
            <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >
              <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                dispatch(setTypeAccount(''))
              }}>
                <Ionicons name='arrow-back' size={20} />
                <Text>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonPrimary} >
                <Text>Próximo</Text>
                <Ionicons name='arrow-forward' size={20} />
              </TouchableOpacity>
            </View>

          </View>

        )}



      </View>



    </View>
  )
}

export default AccountType

