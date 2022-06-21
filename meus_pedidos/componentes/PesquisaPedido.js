//tela de pedidos, aqui apresentará todos os pedidos;
import React from "react"
import {View, Text, Button} from 'react-native';

export default function PesquisaPedido(){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
        <Text>Tela Pedidos</Text>
        <Text>Aqui será mostrados os pedidos em forma de uma lista e vai permitir pesquisar os pedidos</Text>
      </View>
    )
  }