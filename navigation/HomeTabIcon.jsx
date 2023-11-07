import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const styles = StyleSheet.create({
  background: {
    height: '90%',
    backgroundColor: '#D3FE57',

  },
  home: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#D3FE57",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 18,
    paddingRight: 12,
    paddingVertical: 14,
    borderRadius: 20
  },
  transparent: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 20,
    
  }

})

const HomeTabIcon = ({ focused }) => {
  return (
    <View style={focused ? styles.home : styles.transparent}>
      <View style={focused ? styles.background : styles.none}>
        <AntDesign
          name='home'
          size={22}
          color={focused ? '#000' : '#D3FE57'}
        />
      </View>
      <Text style={{color: focused ?  "#000" : "#D3FE57", fontFamily: 'semibold'}}>
        Home
      </Text>
    </View>

  );
};

export default HomeTabIcon;



