
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