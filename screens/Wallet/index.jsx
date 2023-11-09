import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../../components/Card'



const Wallet = () => {
    const data =  [
        {id: 1, name: 'lalal'},
        {id: 2, name: 'lalal'},
        {id: 3, name: 'lalal'}
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Text>Wallet</Text>
            <FlatList data={data} style={styles.teste} renderItem={(item) => <Card/>} horizontal showsHorizontalScrollIndicator pagingEnabled bounces={false}/>
        </SafeAreaView>
    )
}

export default Wallet
