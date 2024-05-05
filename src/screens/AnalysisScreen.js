import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent';

const Analysis = () => {
  return (
    <>
      <HeaderComponent />
      <View style={{ padding: 40 }}>
        <Text style={styles.statusText}>Analysis Screen</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  statusText: {
    color: '#002d4d',
    alignSelf: 'center',
    marginVertical: 40,
    fontSize: 20
  }
})

export default Analysis