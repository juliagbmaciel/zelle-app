import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './initialPage.style'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
        <View style={styles.backgroundBall}>
          <Image
          source={require('../../assets/img/cards.png')}
          style={styles.image}
          />
          <Text style={styles.title}>Gerencie seu dinheiro de forma simplificada</Text>
        </View>
    </View>
  )
}

export default index

