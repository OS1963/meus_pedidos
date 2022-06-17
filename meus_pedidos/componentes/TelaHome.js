//Tela inicial
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal} from 'react-native';
import estilo from '../estilos/estilo';


export default function({navigation}){
    
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Tela Inicial</Text>
        {/* para navegar entre as telas pode-se adicionar botões, links, toutchbole  */}
        <Button
        title='Tela Pedidos'
        // no onpress definimos a tela que deve ser redirecionada passando como parâmentro seu name
        onPress={()=>navigation.navigate('Pedidos')}/>
  
         {/* inserindo botão para poder cadastrar */}


         <Button
        title='Cadastrar Pedidos'
        onPress={()=>navigation.navigate('Cadastrar')}/>
      </View>
    )
  }