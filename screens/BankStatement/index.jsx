import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import {
    Ionicons, FontAwesome, SimpleLineIcons
} from '@expo/vector-icons'
import styles from './styles.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import defaultStyle from '../../src/defaultStyle/style.jsx'
import StatementRow from '../../components/StatementRow/index.jsx'



const BankStatement = ({ navigation }) => {


    return (

        <SafeAreaView style={defaultStyle.container}>
            <View style={{ gap: 40 }}>
                <TouchableOpacity>
                    <Ionicons name='arrow-back' color={'#fff'} size={30} onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <Text style={defaultStyle.title}> Histórico </Text>
            </View>
            <ScrollView>
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
                <StatementRow />
            </ScrollView>
        </SafeAreaView>

    )
}

export default BankStatement