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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Estilo from './estilos/estilo';
//importando biblioteca para trabalhar com icones:
import Icon from 'react-native-vector-icons/AntDesign'

//importando as tela de navegação:
import TelaHome from './componentes/TelaHome';
import TelaPedidos from './componentes/TelaPedidos'
import CadastrarPedidos from './componentes/CadastrarPedidos';
import VisualizarPedidos from './componentes/VisualizarPedidos';
import EditarPedidos from './componentes/EditarPedidos';



//Faz o retorno da pilha de navegção para o Pilha:
const Pilha = createNativeStackNavigator();

//Para utilizar o tabNavigator
const Guias = createBottomTabNavigator();

export default function App(){
      return(
          <NavigationContainer>
            {/* Definndo o statusbar:*/}
            <StatusBar backgroundColor={'#000'}/>
            {/* Iniciando a navegação: */}
            <Pilha.Navigator>
              <Pilha.Screen
              name='Home'
              component={TelaHome}
              options={{title:'Tela Inicial', 
              // modificando a cor de fundo da parte superior da navegação
              headerStyle:{
                backgroundColor:'#5CC6BA',
              },
              // alterando a cor das letras e objetos da parte superior da navegação
              headerTintColor:'#000',
              //podemos também usar a propriedade a baixo que permite mudar: cor, fonte e muito mais:
              headerTitleStyle:{
                color: '#fff',
              },
              //adicionando elementos ou botoões na parte superior da navegação
              // headerRight:()=>()
            }}
              />
              
              <Pilha.Screen
              name='Pedidos'
              component={TelaPedidos}
              options={{title:'Pedidos',
              // modificando a cor de fundo da parte superior da navegação
              headerStyle:{
                backgroundColor:'#5CC6BA',
              },
              // alterando a cor das letras e objetos da parte superior da navegação
              headerTintColor:'#000',
              //podemos também usar a propriedade a baixo que permite mudar: cor, fonte e muito mais:
              headerTitleStyle:{
                color: '#fff',
              }}
              }/>

              <Pilha.Screen
              name='Cadastrar'
              component={CadastrarPedidos}
              options={{title:'Cadastrar Pedidos',
              // modificando a cor de fundo da parte superior da navegação
              headerStyle:{
                backgroundColor:'#5CC6BA',
              },
              // alterando a cor das letras e objetos da parte superior da navegação
              headerTintColor:'#000',
              //podemos também usar a propriedade a baixo que permite mudar: cor, fonte e muito mais:
              headerTitleStyle:{
                color: '#fff',
              }}}/>

              <Pilha.Screen
              name='VisualizarPedidos'
              component={VisualizarPedidos}
              options={{title:'Dados do Pedido',
              // modificando a cor de fundo da parte superior da navegação
              headerStyle:{
                backgroundColor:'#5CC6BA',
              },
              // alterando a cor das letras e objetos da parte superior da navegação
              headerTintColor:'#000',
              //podemos também usar a propriedade a baixo que permite mudar: cor, fonte e muito mais:
              headerTitleStyle:{
                color: '#fff',
              }
              }}/>

              <Pilha.Screen
              name='EditarPedido'
              component={EditarPedidos}
              options={{title:'Editar Pedidos',
              // modificando a cor de fundo da parte superior da navegação
              headerStyle:{
                backgroundColor:'#5CC6BA',
              },
              // alterando a cor das letras e objetos da parte superior da navegação
              headerTintColor:'#000',
              //podemos também usar a propriedade a baixo que permite mudar: cor, fonte e muito mais:
              headerTitleStyle:{
                color: '#fff',
              }
              }}/>
            </Pilha.Navigator>
          </NavigationContainer>

         
      );
};

const estilo = StyleSheet.create({

});
