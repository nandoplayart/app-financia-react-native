import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MotiView, MotiText} from 'moti';
const Balance = ({saldo, gastos}) => {
  return (
    <MotiView 
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}
      style={styles.container}>
      <View style={styles.item}>
            <Text style={styles.itemText}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currentSymbol}>R$</Text>
                <Text style={styles.balance}>{saldo}</Text>
            </View>
      </View>

      <View style={styles.item}>
            <Text style={styles.itemText}>Gastos</Text>
            <View  style={styles.content}>
                <Text style={styles.currentSymbol}>R$</Text>
                <Text style={styles.gastos}>{gastos}</Text>
            </View>
      </View>
    </MotiView>
  )
}

export default Balance

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    paddingTop: 22,
    paddingBottom: 22,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    zIndex: 99
  },
  item:{

  },
  itemText:{
    fontSize: 20,
    color: '#DADADA'
  },
  content:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentSymbol:{
    color: '#DADADA',
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },
  gastos:{
    fontSize: 22,
    color: '#e74e3c'
  }  
})