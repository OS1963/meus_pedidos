import React from "react"
import {View, Text, Button} from 'react-native';
export default function({navigation}){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
        <Text>Tela Pedidos</Text>
        <Text>Aqui será mostrados os pedidos em forma de uma lista</Text>
  
        {/* inserindo botão para poder cadastrar */}
        <Button
        title='Cadastrar Pedidos'
        onPress={()=>navigation.navigate('Cadastrar')}/>
      </View>
    )
  }