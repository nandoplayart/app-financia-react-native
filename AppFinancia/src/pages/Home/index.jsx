import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'


const data =[
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,00',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'PIX cliente X',
    value: '2.300,00',
    date: '07/09/2022',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.300,00',
    date: '22/09/2022',
    type: 1 //entrada
  }
]

const Home = () => {


  handlerItem = (item)=>{
    return <Moviments data={item.item} />
  }

  return (
    <View style={styles.container}>
      <Header name='Luiz Assis' />
      <Balance saldo='15.000,00' gastos='234,00' />
      <Actions />
      <Text style={styles.title}>Ultimas visualizações</Text>
      <FlatList 
          renderItem={handlerItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          data={data} 
          style={styles.list} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize: 18,fontWeight: 'bold',
    marginLeft: 14,
    marginRight:14,
    marginTop: 14 
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
})