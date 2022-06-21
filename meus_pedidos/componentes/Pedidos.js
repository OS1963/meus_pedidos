//Tela para inserir pedidos
import React from 'react';
import {View, Text, Button} from 'react-native'
//Importando biblioteca para poder trabalhar com armazenamento local
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pedidos(){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
        <Text>tela que mostra os pedidos feita apenas para um teste</Text>

      </View>
    )
  }