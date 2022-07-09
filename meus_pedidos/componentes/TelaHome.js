//Tela inicial
import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import estilo from '../estilos/estilo';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'expo-status-bar';
// import { ListItem } from 'react-native-elements';
import Botao_Adicionar from './Botao_Adicionar';
import MaskInput from 'react-native-mask-input';



//importando bibliotecas para permitir a atualização auomática da tela home:
import { useFocusEffect } from '@react-navigation/native';
//importando o Async para poder mostrar os dados armazenados
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function({navigation}){

  //criando estado para poder permitir a exbição dos dados armazenados:
  //estado para salvar a lista de pedidos
  const [pedidos, setPedidos] = useState([]);

  async function buscarPedido (){
    const response = await AsyncStorage.getItem('@meuspedidos:pedidos');
    const pedidos = response ? JSON.parse(response) : [];
    // console.log(pedidos);
    setPedidos(pedidos);
    buscarPedido();
  }

  //validando para saber se o usuário realmente quer exluir o pedido. Se sim, a função removerPedido é chamada, 
  //caso contrário nada acontece
  function remover(id){
    Alert.alert('Excluir Pedido','Deseja excluir o pedido?',[
      {text:'Sim',
      onPress(){
        removerPedido(id);
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


  // para atulizar a página automáticamente usamos o useFocusEffect com o useCallback:
   useFocusEffect(useCallback(()=>{
    buscarPedido();
  },[]));

  const amigos =[
    {nome:'Orlando', Sobrenome: 'Silva', Key: '1'},
    {nome:'Fernanda', Sobrenome: 'Silva', Key: '2'},
    {nome:'Iolanda', Sobrenome: 'Silva', Key: '3'},
    {nome:'Valdira', Sobrenome: 'Silva', Key: '4'},
    {nome:'Samuel', Sobrenome: 'Silva', Key: '5'},
  ]

  const data = new Date();

  //função para carregar pedidos -> estou trabalhando aqui e o erro está vindo daqui
  function carregarPedido({item}){
    return (
      <ListItem
      title={item.nome}/>
    )
    
  }
 
    return(
      <SafeAreaView style={estil.container}>
        <StatusBar hidden={false} backgroundColor={'#fff'}/>
        <FlatList 
        keyExtractor={(item) => item.id}
        style={estil.flatlist}
        data={pedidos}
        renderItem={({item, index}) => {
          return(
            <View style={estil.containerLista}>
              <View>
              <Icon name='smileo' size={40}/>
              {/* <Image source={require('../assets/avatar.png')}
              /> */}
              <Text style={{color:'red'}}>Cliente: <Text style={{color:'black'}}>{item.nome}</Text></Text>
              </View>
              <View>
              <Text style={{color:'red'}}>Contato: <Text style={{color:'black'}}>{item.telefone}</Text></Text>
              <Text style={{color:'red'}}>Serviço: <Text style={{color:'black'}}>{item.servico}</Text></Text>
              <Text style={{color:'red'}}>Data de Inicio: <Text style={{color:'black'}}>{item.inicio}</Text></Text>
              <Text style={{color:'red'}}>Previsão de Entrega: <Text style={{color:'black'}}>{item.previsao_entrega}</Text></Text>
              <Text style={{color:'red'}}>ID: <Text style={{color:'black'}}>{item.id}</Text></Text>
              </View>
              

              {/* botão para remover pedido */}
              <TouchableOpacity onPress={() => remover(item.id)}>
                <Icon name='delete' size={25} color={'red'}/>
              </TouchableOpacity>
              
            </View>
          )
        }}
        />
        <View>
          <Text>{data.toLocaleString()}</Text>
        </View>
        <View style={estil.caixa_botao}>
          <TouchableOpacity onPress={() => navigation.navigate('Adicionar')}>
            {/* <Icon name='pluscircle' size={60} style={{color:'#5CC6BA'}}/> */}
            <Botao_Adicionar/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const estil = StyleSheet.create({
    container:{
      paddingTop:10,
      padding: 15,
      flex: 1,
      // backgroundColor:'#E5E5E5'
    },
    caixa_botao:{
      alignItems: 'center',
      position:'absolute',
      bottom: 30,
      right: 30,
    },

    flatlist:{
      flex: 1,
      marginTop: 5,
    },
    containerLista:{
      marginBottom:15,
      padding: 15,
      borderRadius:4,
      backgroundColor:'#DFDFDF',
    },
    esc:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },

    textoLista:{
      fontSize:14,
      color:'#333',
      fontWeight:'bold',
      marginTop:4,
      textAlign:'center'

    }
  })

