import { View, Text } from 'react-native'
import styles from './styles'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function SettingsRow({title}) {
    console.log(title)
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <Ionicons name='chevron-forward' color={'#ccc'} size={15}/>
        </View>
    )
}