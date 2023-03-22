import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons';
import { MotiView, MotiText }  from 'moti';
const statusBarHeight = StatusBar.currentHeight? StatusBar.currentHeight + 22: 64;

const Header = ({name}) => {
  return (
    <View style={styles.container}>
     
      <MotiView 
          from={{
            translateY: -150,
            opacity: 0
          }}
          animate={{
            translateY: 0,
            opacity: 1
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 300
          }}
          style={styles.content}>

        <MotiText 
          from={{
            translateX: -300
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800
          }}
          style={styles.username}>{name}
        </MotiText>
        <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
            <Feather name='user' size={27} color='#FFF' />
        </TouchableOpacity>    
      </MotiView>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44       
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    username:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonUser:{
      width: 44,
      height: 44,
      backgroundColor: 'rgba(255,255,255,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44 /2  
    }
})