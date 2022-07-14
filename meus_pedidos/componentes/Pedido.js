//Tela para inserir pedidos
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, Image} from 'react-native'
//Importando biblioteca para poder trabalhar com armazenamento local
import AsyncStorage from '@react-native-async-storage/async-storage';
import TelaHome from './TelaHome';

export default function Pedido({route, navigation}){
  const [pedido, setPedido] = useState(route.params ? route.params : {})
    return(
      <SafeAreaView>
        <View><Image source={require('../assets/avatar.png')}
              style={{}}
              /></View>
        <Text>{pedido.nome}</Text>
        <Text>{pedido.telefone}</Text>
        <Text>{pedido.servico}</Text>
        <Text>{pedido.inicio}</Text>
        <Text>{pedido.previsao_entrega}</Text>
      </SafeAreaView>
    )
  }