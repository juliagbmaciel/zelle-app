import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultSyle from '../../src/defaultStyle/style'
import { useSelector } from 'react-redux'


export default function StatementRow({ props }) {
    const { accountData } = useSelector(state => {
        return state.userReducer
    })

    const isReceiver = (accountData.account.id === props.account_receiver)
    const value = parseFloat(props.value);
    const data = new Date(props.date);
    const day = data.getDate();
    const month = data.toLocaleString('default', { month: 'short' });



    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <View style={[styles.rowIcon, isReceiver && styles.rowGreenIcon]}>
                <MaterialCommunityIcons name={isReceiver ? 'transfer-down' : 'transfer-up'} color={!isReceiver ? '#fff' : '#1D7536'} size={20} />
            </View>
            <View>
                {isReceiver ? (
                    <View>
                        <Text style={styles.label}>Transferência recebida</Text>
                        <Text style={styles.subtitle}>De {props.client_sender}</Text>
                    </View>

                ) : (
                    <View>
                        <Text style={styles.label}>Transferência enviada</Text>
                        <Text style={styles.subtitle}>Para {props.client_receiver}</Text>
                    </View>

                )}
                <Text style={styles.subtitle}>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
            </View>
            </View>

            <View>
                <Text style={styles.subtitle}>{day} {month}</Text>
            </View>


        </View>
    )
}