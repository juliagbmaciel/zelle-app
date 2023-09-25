import {  Text, View, Image } from 'react-native'
import styles from './initialPage.style'
import Button from '../../components/Buttons'
import * as Animatable from 'react-native-animatable'






const InitialPage = ({ navigation }) => {


  
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/img/logo.png')}
      style={styles.logo}
      />
      <Animatable.View animation="fadeInUp" style={styles.backgroundBall}>
        <Animatable.Image
          animation="flipInY"
          useNativeDriver={true}
          duration={1500}
          source={require('../../assets/img/cards.png')}
          style={styles.image}
        />
        <View style={styles.containerContent}>
          <Text style={styles.title}>Gerencie seu dinheiro de maneira simplificada</Text>
          <Text style={styles.subTitle}>Conecte o dinheiro com seus objetivos</Text>
          <Button title={"Criar conta"} bgColor={"#D3FE57"} radius={"30px"} padding={"11px 99px"} onPress={() => navigation.navigate('CreateAccount')} />
          <Button title={"Fazer Login"} bgColor={"#171715"} colorTitle={"#D3FE57"} onPress={() => navigation.navigate('FirstWelcome')} />
        </View>

      </Animatable.View>
    </View>
  )
}

export default InitialPage

