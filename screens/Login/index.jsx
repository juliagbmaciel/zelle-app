import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform
} from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import styles from './login.style.jsx'
import DateTimePicker from '@react-native-community/datetimepicker'


const Login = () => {

  const [completeName, setCompleteName] = useState('')
  const [socialName, setSocialName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState("")

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
          <Text style={styles.label}>
            Nome completo/Razão social 
          </Text>
          <TextInput
            style={styles.input}
            value={completeName}
            onChangeText={setCompleteName}
            keyboardType="default"
          />
          <Text style={styles.label}>
            Nome social/Fantasia(opcional)
          </Text>
          <TextInput
            style={styles.input}
            value={socialName}
            onChangeText={setSocialName}
            keyboardType="default"
          />
          <Text style={styles.label}>
            Data de nascimento/Abertura
          </Text>


          {showPicker && (
            <DateTimePicker
              value={date}
              mode='date'
              display="spinner"
              onChange={onChange}
              style={Platform.OS === "ios" ? styles.dateIos : styles.dateAndroid}
            />
          )}

          {showPicker && Platform.OS === "ios" && (
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <TouchableOpacity style={styles.button}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>


          )}



          {!showPicker && (
            <Pressable
              onPress={toggleDatePicker}
            >
              <TextInput
                style={styles.input}
                placeholder='Sat Aug 21 2004'
                placeholderTextColor="#11182744"
                onChangeText={setDateOfBirth}
                editable={false}
                value={dateOfBirth}
                placeholderTextColor="#fff"
                onPressIn={toggleDatePicker}
              />
            </Pressable>

          )}


        </View>

      </Animatable.View>
    </View>
  )
}

export default Login

