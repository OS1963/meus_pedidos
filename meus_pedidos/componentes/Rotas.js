// Nesse componente temos as rotas e criação das telas e navegação entre as telas
// Também é possível criar direto do APP, mas dessa maneira o código fica mais limpo
import React from 'react';
import TelaHome from './TelaHome';
import {Image} from 'react-native'
import AdicionarPedido from './AdicionarPedido';
import EditarPedidos from './EditarPedidos';
import VisualizarPedidos from './VisualizarPedidos';
import PesquisaPedido from './PesquisaPedido';
import Pedidos from './Pedido';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';



const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator initialRouteName='TelaHome'>
            <Stack.Screen name='TelaHome' component={TelaHome} options={{headerTitle:'Meus Pedidos', headerStyle:{
            backgroundColor:'#5CC6BA'},
            headerTitleStyle:{color:'#fff'},
            headerRight: () => (
                <Image source={require('../assets/logo.png')}style={{width:40, height:40}}/>
              ),
    
            }} />

            <Stack.Screen name='Adicionar' component={AdicionarPedido} options={{headerTitle:'Adicionar Pedidos',  headerTintColor:'#DFD5D5', headerStyle:{
            backgroundColor:'#5CC6BA'},
            headerTitleStyle:{color:'#fff'},
            headerRight: () => (
                <Image source={require('../assets/logo.png')}style={{width:40, height:40}}/>
              ),
    
            }}/>
            <Stack.Screen name='PesquisaPedido' component={PesquisaPedido}/>
            <Stack.Screen name='Pedidos' component={Pedidos} options={{headerTitle:'Dados do Pedido', headerTintColor:'#DFD5D5', headerStyle:{
            backgroundColor:'#5CC6BA'},
            headerTitleStyle:{color:'#fff'},
            headerRight: () => (
                <TouchableOpacity>
                    <Icon name='edit' size={40} style={{color:'#fff'}}/>
                </TouchableOpacity>
              ),
            }}/>

            <Stack.Screen name='EditarPedidos' component={EditarPedidos}/>
        </Stack.Navigator>
    )
}
