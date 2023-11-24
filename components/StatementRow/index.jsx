import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultSyle from '../../src/defaultStyle/style'


export default function StatementRow({ title }) {

    return (
        <View style={styles.container}>
            <View style={styles.rowIcon}>
                <MaterialCommunityIcons name='transfer-down' color={'#fff'} size={15} />
            </View>
            <View>
                <Text style={styles.label}>Transferência enviada</Text>
                <Text style={styles.subtitle}>Arianne da Silva Barbosa</Text>

                <Text style={styles.subtitle}>R$ 10,00</Text>
            </View>


        </View>
    )
}