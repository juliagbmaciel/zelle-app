import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import styles from './cardModalStyle'


const CardModal = ({ isVisible }) => {
    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={true}
            >
                <View style={styles.modal}>
                    <Text>Olaa mundo</Text>
                </View>
            </Modal>
        </View>
    )
}

export default CardModal
