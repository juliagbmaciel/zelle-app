import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './initialPage.style'
import React from 'react'
import Button from '../../components/Buttons'
import * as Animatable from 'react-native-animatable'

const index = ({ navigation }) => {



  return (
    <View style={styles.container}>
      <View style={styles.backgroundBall}>
        <Animatable.Image
          animation="flipInY"
          delay={500} 
          source={require('../../assets/img/cards.png')}
          style={styles.image}
        />
        <View style={styles.containerContent}>
          <Text style={styles.title}>Gerencie seu dinheiro de maneira simplificada</Text>
          <Text style={styles.subTitle}>Conecte o dinheiro com seus objetivos</Text>
          <Button title={"Criar conta"} bgColor={"#D3FE57"} radius={"30px"} padding={"11px 99px"} onPress={() => navigation.navigate('Login')} />
          <Button title={"Fazer Login"} bgColor={"#171715"} colorTitle={"#D3FE57"} onPress={() => navigation.navigate('Login')} />
        </View>

      </View>
    </View>
  )
}

export default index

