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
import styles from './login.style.jsx'
import DateTimePicker from '@react-native-community/datetimepicker'



const CreateAccount = ({ navigation }) => {
  
  const [completeName, setCompleteName] = useState('')
  const [socialName, setSocialName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  console.log('completeName')
  console.log(socialName)
  console.log(dateOfBirth)

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
            value={completeName}
            onChangeText={setCompleteName}
            keyboardType="default"
          />
          <Text style={{ color: "red" }}>*Campo Obrigatório</Text>
        </View>
        <View>
          <Text style={styles.label}>
            Nome social/Fantasia(opcional)
          </Text>
          <TextInput
            style={styles.input}
            value={socialName}
            onChangeText={setSocialName}
            keyboardType="default"
            maxLength={2}
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
              style={Platform.OS === "ios" ? styles.dateIos : styles.dateAndroid}
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
                  placeholderTextColor="#fff"
                  onPressIn={toggleDatePicker}
                  color="#fff"

                />
              </Pressable>
            </View>
          )}
        </View>
        <View style={Platform.OS === "ios" ? styles.buttonsView : styles.buttonsViewAnd} >
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => { navigation.goBack() }}>
            <Ionicons name='arrow-back' size={20} />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text>Próximo</Text>
            <Ionicons name='arrow-forward' size={20} />
          </TouchableOpacity>
        </View>



      </View>


    </Animatable.View>
  </View>
)
}

export default CreateAccount

