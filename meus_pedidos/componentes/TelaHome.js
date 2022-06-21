//Tela inicial
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal} from 'react-native';
import estilo from '../estilos/estilo';


export default function(){
    
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Tela Inicial</Text>
        <Text>Aqui será mostrado os pedidos em forma de uma lista</Text>
      </View>
    )
  }