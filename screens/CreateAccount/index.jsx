import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import styles from './createAccount.style.jsx'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useSelector, useDispatch } from 'react-redux'
import { setCompleteName, setSocialName, resetState } from '../../src/reducers/actions.jsx'




const CreateAccount = ({ navigation }) => {

  const { completeName, socialName } = useSelector(state => {
    return state.userReducer
  })
  const dispatch = useDispatch()

  const [error, setError] = useState('')
  const [errorDate, setErrorDate] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')


  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate)
      if (Platform.OS === "android") {
        toggleDatePicker()
        setDateOfBirth(currentDate.toDateString())
      }
    } else {
      toggleDatePicker()
    }
  }

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const confirmIosDate = () => {
    setDateOfBirth(date.toDateString());
    toggleDatePicker()
  }



  const validForm = () => {
    if (completeName === '' || completeName === null) {
      dateOfBirth === '' && setErrorDate('*Campo obrigatório')
      setError('*Campo obrigatório')
      return
    } if (completeName.length < 10) {
      setError('*Insira ao menos 10 caracteres')
      return
    } if (dateOfBirth === '') {
      completeName !== '' && setError('')
      setErrorDate('*Campo obrigatório')
      return
    }
    if (socialName !== '') {
      console.log(socialName)
      dispatch(setSocialName(socialName))
    }
    dispatch(setCompleteName(completeName))
    setError('')
    setErrorDate('')
    navigation.navigate('AccountType')


  }








  return (
    <View animation="fadeInRight" style={styles.container}>
      <View style={styles.logo}>

        <Image
          source={require('../../assets/img/logo-bigger.png')}
        />
      </View>

      <Animatable.View animation="fadeInUp" style={styles.mainContent}>
        <Text style={styles.title}>Criar conta</Text>
        <View style={styles.logContent}>
          <View>
            <Text style={styles.label}>
              Nome completo/Razão social
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => dispatch(setCompleteName(value))}
              keyboardType="default"
            />
            {error !== '' && <Text style={{ color: "red" }}>{error}</Text>}

          </View>
          <View>
            <Text style={styles.label}>
              Nome social/Fantasia(opcional)
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => dispatch(setSocialName(value))}
              keyboardType="default"
              maxLength={100}
            />

          </View>

          <View>


            <Text style={styles.label}>
              Data de nascimento/Abertura
            </Text>


            {showPicker && (
              <DateTimePicker
                value={date}
                mode='date'
                display="spinner"
                onChange={onChange}
                style={Platform.OS === 'ios' ? styles.dateIos : styles.dateAndroid}
                textColor='#ffffff'
                locale='pt-BR'
              />
            )}

            {showPicker && Platform.OS === "ios" && (
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.button} onPress={toggleDatePicker}>
                  <Text style={{ color: "#D3FE57", fontFamily: "semibold" }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={confirmIosDate}>
                  <Text style={{ color: "#D3FE57", fontFamily: "semibold" }}>Ok</Text>
                </TouchableOpacity>
              </View>

            )}



            {!showPicker && (
              <View style={styles.inputIcon}>
                <Ionicons name='calendar-sharp' size={20} color={"#fff"} />
                <Pressable
                  onPress={toggleDatePicker}
                >
                  <TextInput
                    placeholder='Sat Aug 21 2004'
                    onChangeText={setDateOfBirth}
                    editable={false}
                    value={dateOfBirth}
                    placeholderTextColor="#535454"
                    onPressIn={toggleDatePicker}
                    color="#fff"

                  />
                </Pressable>
                {errorDate !== '' && <Text style={{ color: "red" }}>{errorDate}</Text>}
              </View>
            )}
          </View>
          {!showPicker && (
            <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >
              <TouchableOpacity style={styles.buttonPrimary} onPress={() => {
                dispatch(resetState())
                navigation.goBack()
              }}>
                <Ionicons name='arrow-back' size={20} />
                <Text>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonPrimary} onPress={validForm}>
                <Text>Próximo</Text>
                <Ionicons name='arrow-forward' size={20} />
              </TouchableOpacity>
            </View>

          )}




        </View>


      </Animatable.View>
    </View>
  )
}

export default CreateAccount

