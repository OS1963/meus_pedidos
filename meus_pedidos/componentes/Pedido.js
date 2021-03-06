//Tela para inserir pedidos
import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
//Importando biblioteca para poder trabalhar com armazenamento local
import AsyncStorage from '@react-native-async-storage/async-storage';
import TelaHome from './TelaHome';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import {Entypo, Feather, AntDesign, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import { Jost_200ExtraLight } from '@expo-google-fonts/jost';

export default function Pedido({route, navigation}){
  
  //validando para saber se o usuário realmente quer exluir o pedido. Se sim, a função removerPedido é chamada, 
  //caso contrário nada acontece
  function remover(id){
    Alert.alert('Excluir Pedido','Deseja excluir o pedido?',[
      {text:'Sim',
      onPress(){
        removerPedido(id);
        navigation.goBack();
        console.warn('Pedido Removido com Sucesso')
      }
    },
      {text:'Não'}
    ])
  }

  //função para remover pedido:
  async function removerPedido(id){
    const response = await AsyncStorage.getItem('@meuspedidos:pedidos');
    const dadosAnteriores = response ? JSON.parse(response) : [];

    const pedidos = dadosAnteriores.filter((item) => item.id != id);
    await AsyncStorage.setItem("@meuspedidos:pedidos", JSON.stringify(pedidos));
    setPedidos(pedidos);
    console.log()
    
  }

  const [pedido, setPedido] = useState(route.params ? route.params : {})
    return(
      <SafeAreaView style={estilo.container}>
        <View>
          <Image source={require('../assets/avatar2.png')}style={estilo.imagem}/>
        </View>
        <View>
        <Text style={estilo.titulo}>{pedido.nome}</Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <MaterialCommunityIcons name='whatsapp' size={30} color={'green'}/>
        <Text style={estilo.texto}>{pedido.telefone}</Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../assets/servico2.png')}style={{width:30, height:30}} />
          <Text style={estilo.texto}>{pedido.servico}</Text>
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <SimpleLineIcons name='login' size={25} color={'#31A6E8'} style={{paddingRight:5}}/>
          <Text style={estilo.texto}>{pedido.inicio}</Text>
        </View>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <SimpleLineIcons name='logout' size={25} color={'red'} style={{paddingRight:5}}/>
          <Text style={estilo.texto}>{pedido.previsao_entrega}</Text>
        </View>

        {/* Botões: Editar/Remover */}

        <View style={estilo.botoes}>
        <View>
          <TouchableOpacity onPress={() => remover(pedido.id)}>
            <AntDesign name='delete' size={50} color={'red'}/>
          </TouchableOpacity>
        </View>
                
        <View style={estilo.botao}>
          <TouchableOpacity onPress={() => navigation.navigate('Adicionar')}>
               <AntDesign name='edit' size={50} color={'#FF8000'}/>
            </TouchableOpacity>
        </View>
        </View>
        
        
      </SafeAreaView>
    )
  }

  const estilo= StyleSheet.create({
    container:{
     flex: 1,
     padding: 20,
     alignItems: 'center'
    },
    
    imagem:{
      width: 120,
      height: 120,
    },
    titulo:{
      fontSize:35,
      fontWeight:'bold',
    },
    texto:{
      fontSize: 20,

    },
    botoes:{
      marginTop:'20%',
      flexDirection: 'row',
    },
    botao:{
        marginLeft:'30%'
    }

  })

