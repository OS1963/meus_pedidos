import React, {useState} from 'react';
import {View,
        StyleSheet,
        Text, SafeAreaView,
        StatusBar,
        Button,
        Modal,
        Image,
        TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './componentes/Rotas';
import Estilo from './estilos/estilo';
//importando biblioteca para trabalhar com icones:
import Icon from 'react-native-vector-icons/AntDesign'

export default function App(){
  
      return(
          <NavigationContainer>
            <Rotas/>
          </NavigationContainer>
      );
};

const estilo = StyleSheet.create({

});
