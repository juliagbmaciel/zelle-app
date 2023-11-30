import { View, Image, Text, ActivityIndicator,TouchableOpacity } from 'react-native'
import defaultStyle from '../../src/defaultStyle/style'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoanRow from '../../components/LoanRow/index.jsx'
import { useSelector } from 'react-redux';
import styles from './styles';
import {  getInstallments } from '../../src/services/api.jsx';
import PressableButton from '../../components/Buttons/index.jsx'
import { CommonActions } from '@react-navigation/native'


export default function AllLoansView({ navigation }) {




    return (
        <SafeAreaView style={defaultStyle.container}>

        </SafeAreaView>
    )
}
