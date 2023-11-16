import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function SettingsRow({title}) {

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SettingPage', title)}>
            <Text style={styles.label}>{title}</Text>
            <Ionicons name='chevron-forward' color={'#ccc'} size={15}/>
        </TouchableOpacity>
    )
}