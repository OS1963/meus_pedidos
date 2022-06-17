// Nesse componente temos as rotas e criação das telas e navegação entre as telas
// També é possível criar direto do APP, mas dessa maneira o código fica mais limpo
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Entypo, Feather, AntDesign} from '@expo/vector-icons'

// import CadastrarPedidos from './componentes/CadastrarPedidos';

import CadastrarPedidos from './CadastrarPedidos'
import TelaHome from './TelaHome';
import EditarPedidos from './EditarPedidos';
import TelaPedidos from './TelaPedidos';
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

            <Guias.Screen name='Cadastrar' component={CadastrarPedidos} options={{headerTitle:'Adicionar pedido', tabBarIcon: ({focused}) => (
                <Entypo name='plus' size={30} style={{color:'#fff'}}/>
            ), 
            tabBarButton: (props) => (
                <Adicionar {...props}/>
            )
        }}/>

            {/* vou colocar pedidos como pesquisar */}
            <Guias.Screen name='Pedidos' component={TelaPedidos} options={{headerTitle:'Pesquisar pedido',tabBarIcon:({focused}) => (
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
