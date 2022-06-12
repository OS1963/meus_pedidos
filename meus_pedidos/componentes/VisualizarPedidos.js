import React from 'react';
import {View, Text, Button} from 'react-native'

export default function({navigation}){
    return(
      <View>
        <Text>Dados do Pedido</Text>
        <Text>Nome, Contato, Descrição do Servço</Text>
        <Text>essa tela vai ser aberta quando clicar no pedido a ser expandido</Text>
  
        {/* Botão para permitir a edição do pedido */}
        <Button
        title='Editar Pedido'
        onPress={()=>navigation.navigate('EditarPedido')}/>
      </View>
    )
  }