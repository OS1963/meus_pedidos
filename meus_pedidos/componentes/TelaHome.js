//Tela inicial
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView} from 'react-native';
import estilo from '../estilos/estilo';
import Icon from 'react-native-vector-icons/AntDesign'
import {StatusBar} from 'expo-status-bar'


export default function({navigation}){
    return(
      <SafeAreaView style={estil.container}>
        <StatusBar hidden={false} backgroundColor={'#fff'}/>
        <Text>Tela Inicial</Text>
        <Text>Aqui será mostrado os pedidos em forma de uma lista</Text>
        <Text>Aqui será mostrado os pedidos em forma de uma lista</Text>
        <Text>Aqui será mostrado os pedidos em forma de uma lista</Text>
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

