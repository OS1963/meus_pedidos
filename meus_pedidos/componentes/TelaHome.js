//Tela inicial
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import estilo from '../estilos/estilo';
import Icon from 'react-native-vector-icons/AntDesign'
import {StatusBar} from 'expo-status-bar'

//importando o Async para poder mostrar os dados armazenados
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function({navigation}){

  //criando estado para poder permitir a exbição dos dados armazenados:
  // const [data, setData] = useState


    return(
      <SafeAreaView style={estil.container}>
        <StatusBar hidden={false} backgroundColor={'#fff'}/>
        <Text>Tela Inicial</Text>
        <FlatList
        />

        <View style={estil.caixa_botao}>
          <TouchableOpacity onPress={() => navigation.navigate('Adicionar')}>
            <Icon name='pluscircle' size={70} style={{color:'#5CC6BA'}}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const estil = StyleSheet.create({
    container:{
      paddingTop:30,
      padding: 15,
      flex: 1,
      // backgroundColor:'#E5E5E5'
    },
    caixa_botao:{
      alignItems: 'center',
      position:'absolute',
      bottom: 30,
      right: 30,
    },
  })

