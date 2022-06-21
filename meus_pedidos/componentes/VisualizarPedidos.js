//Parte que será chamada quando clicarmos no pedido a ser expandido
import React from 'react';
import {View, Text, Button} from 'react-native'

export default function VisualizarPedidos(){
    return(
      <View>
        <Text>Dados do Pedido</Text>
        <Text>Nome, Contato, Descrição do Servço</Text>
        <Text>essa tela vai ser aberta quando clicar no pedido a ser expandido</Text>
      </View>
    )
  }