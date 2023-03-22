import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {MotiView, MotiText, AnimatePresence} from 'moti';

const Moviments = ({data}) => {

  const [showValue, setShowValue] = useState(false)  

  return (
    <TouchableOpacity style={styles.container} onPress={()=> setShowValue((current) =>!current )}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue && (
                        <AnimatePresence exitBeforeEnter>
                             <MotiText 
                                from={{
                                    translateX: 100
                                }}
                                animate={{
                                    translateX: 0
                                }}
                                transition={{
                                    type:'timing',
                                    duration: 500
                                }}
                                style={[styles.value, data.type === 0? styles.espenses:null ]}>
                                {data.type === 0 ?  `-R${data.value}`: `R${data.value}`}
                            </MotiText>
                        </AnimatePresence>)
            }
            {!showValue && <AnimatePresence exitBeforeEnter>
                                <MotiView 
                                    from={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    transition={{
                                        type: 'timing'
                                    }}
                                    style={styles.skeleton}></MotiView>
                          </AnimatePresence>}
            
       
      </View>
    </TouchableOpacity>
  )
}

export default Moviments

const styles = StyleSheet.create({
    container:{
        flex: 1,marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date:{
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16
    },
    value:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71'
    },
    espenses:{
        color: '#e74c3c'
    },
    skeleton:{
        width: 80,
        height: 10,
        marginTop:6,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})