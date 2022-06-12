import React from 'react';
import {View, Text, Button} from 'react-native'
export default function({navigation}){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
        <Text>Cadastrar Pedidos</Text>
  
        {/* Botão para voltar para a tela Inicial */}
        <Button
        title='Home'
        onPress={()=>navigation.navigate('Home')}/>
  
        {/* Botão para permitir visualizar pedido ao ser clicado: Observação: temos que modificar para que isso seja feito quando clicar no pedido e não no botão */}
        <Button
        title='Visualizar Pedidos'
        onPress={()=>navigation.navigate('VisualizarPedidos')}/>
      </View>
    )
  }