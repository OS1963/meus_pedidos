
  // conteudo anterior
  
  // // criando estado loaded para carregar a fonte
  // const [loaded] = useFonts({
  //   AdventPro: require('./assets/fonts/AdventPro-Light.ttf')
  // });
  // // caso a fonte não seja carregada, o retorno é nulo (ver essa questão depois)
  // if (!loaded) {
  //   return null;
  // }

  // return (
  //   <SafeAreaView style={estilo.container}>
  //     <SafeAreaView>
  //       <Text style={{fontFamily:'AdventPro', fontSize: 50, color:'#717F7F'}}>Meus Pedidos</Text>
  //     </SafeAreaView>

  //     <SafeAreaView>
  //     <Image
  //       source={require('./assets/logo.png')}
  //       style={estilo.logo}
  //     /> 
  //     </SafeAreaView>

  //     <SafeAreaView>
  //       <TouchableOpacity
  //       activeOpacity={0.5}>
  //         <Image
  //           source={require('./assets/vermais.png')}
  //           style={estilo.verMais}
  //         />
  //       </TouchableOpacity>
  //     </SafeAreaView>
  //   </SafeAreaView>
  // );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   imagem:{
//     width: 210,
//     height: 205,
//   }
// });


function TelaPedidos({navigation}){
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


//outra app:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
            <Guias.Navigator>
              <Guias.Screen
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
              
              <Guias.Screen
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

              <Guias.Screen
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

              <Guias.Screen
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

              <Guias.Screen
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
            </Guias.Navigator>
          </NavigationContainer>

         
      );
};


//tela home:
import React, { useState } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal} from 'react-native';
import estilo from '../estilos/estilo';


export default function({navigation}){
    const [visivel, setVisivel] = useState(false)

    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
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

  //tela pedidos:
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

  // tela cadastrar 
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

  // por abas:
  // Nesse componente temos as rotas e criação das telas e navegação entre as telas
// També é possível criar direto do APP, mas dessa maneira o código fica mais limpo
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Entypo, Feather, AntDesign} from '@expo/vector-icons'

// import CadastrarPedidos from './componentes/CadastrarPedidos';

import AdicionarPedido from './AdicionarPedido'
import TelaHome from './TelaHome';
import EditarPedidos from './EditarPedidos';
import PesquisaPedido from './PesquisaPedido';
import VisualizarPedidos from './VisualizarPedidos';

//importando o botão adicionar:
import Adicionar from './Botao_Adicionar';

const Guias = createBottomTabNavigator();

export default function Rotas(){
    return(
        <Guias.Navigator
        screenOptions={{tabBarStyle:{backgroundColor:'#fff', borderTopColor:'transparent'}, 
        tabBarInactiveTintColor: '#717F7F', tabBarActiveTintColor:'#5CC6BA', tabBarShowLabel: false,
        tabBarStyle:{
            position: 'absolute',
            bottom: 25,
            left: 30,
            right: 30,
            elevation: 0,
            borderRadius: 15,
            height: 70,
            ...estilo.sombra
        }
        }}
        >
            <Guias.Screen name='Inicio' component={TelaHome} options={{headerShown:false, tabBarIcon:({focused}) => (
                <View style={estilo.centralizar_tabBar}>
                    <Entypo name='home' size={25} style={{color: focused ? '#5CC6BA' : '#717F7F' }}/>
                    <Text style={{fontSize:9, color: focused? '#5CC6BA' : '#717F7F' }}>INÍCIO</Text>
                </View>
            )}}/>

            <Guias.Screen name='AdicionarPedido' component={AdicionarPedido} options={{headerTitle:'Adicionar pedido', tabBarIcon: ({focused}) => (
                <Entypo name='plus' size={30} style={{color:'#fff'}}/>
            ), 
            tabBarButton: (props) => (
                <Adicionar {...props}/>
            )
        }}/>

            {/* vou colocar pedidos como pesquisar */}
            <Guias.Screen name='PesquisaPedido' component={PesquisaPedido} options={{headerTitle:'Pesquisar pedido',tabBarIcon:({focused}) => (
                <View style={estilo.centralizar_tabBar}>
                    <AntDesign name='search1' size={25} style={{color: focused ? '#5CC6BA' : '#717F7F' }}/>
                    <Text style={{fontSize:9, color: focused? '#5CC6BA' : '#717F7F' }}>PESQUISAR</Text>
                </View>
            )

            }}/>

           

            {/* TELA EDITAR DEVE SER ACIONADO QUANDO ESTIVER VISUALIZANDO O PEDIDO E CLICAR EM EDITAR */}

            {/* <Guias.Screen name='Editar' component={EditarPedidos} options={{tabBarIcon:({focused}) => (
                <View>

                    <Text>EDITAR</Text>
                </View>
            )
        }}/> */}

        {/* TELA DADOS DO PEDIDO SÓ DEVE SER ABERTA QUANDO O USUÁRIO CLICAR NO PEDIDO: */}
            {/* <Guias.Screen name='Dados do Pedido' component={VisualizarPedidos}/> */}
        </Guias.Navigator>
    )
}

const estilo = StyleSheet.create({
    sombra:{
        shadowColor:'#5CC6BA',
        shadowOffset:{
            width:0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },

    centralizar_tabBar:{
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
    }
})
