import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'



export default function LoanRow({title, content}) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <Text style={styles.labelContent}>{content}</Text>
        </View>
    )
}