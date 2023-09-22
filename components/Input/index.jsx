import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from './input.style'

const index = ({label, keyboardType, maxLength, onChange, onFocus, onBlur, value}) => {
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
                onFocus={onFocus ? onFocus : () => {}}
                onBlur={onBlur ? onBlur : () => {}}
                value={value && value}
            />
        </View>
    )
}

export default index

