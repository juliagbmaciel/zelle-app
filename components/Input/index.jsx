import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './input.style'

const index = ({label, keyboardType, maxLength, onChange}) => {
    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value, label)}
                keyboardType={keyboardType}
                maxLength={maxLength}
            
            />
        </View>
    )
}

export default index

