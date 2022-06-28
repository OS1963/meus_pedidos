//Tela inicial
import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import estilo from '../estilos/estilo';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'expo-status-bar';



//importando o Async para poder mostrar os dados armazenados
import AsyncStorage from '@react-native-async-storage/async-storage';
function exibirPedido(){
  pedido = {
    nome: String,
    telefone: String,
    servico: String,
    inicio: String,
    previsao_entrega:String,
  }
}

export default function({navigation}){
  // o data ficara salvo a lista de pedidos
  // const [data, setData] = useState([{nome:'orlando', senha:'Silva'}])
  // const [newData, setNewData] = useState([])

//criando estado para poder permitir a exbição dos dados armazenados:
  //estado para salvar a lista de pedidos
  const [pedidos, setPedidos] = useState([]);

  async function buscarPedido (){
    const response = await AsyncStorage.getItem('@meuspedidos:pedidos');
    const pedidos = response ? JSON.parse(response) : [];
    console.log(pedidos);
    setPedidos(pedidos);
  }

   useEffect(()=>{
    buscarPedido();
  },[]);

  const amigos =[
    {nome:'Orlando', Sobrenome: 'Silva', Key: '1'},
    {nome:'Fernanda', Sobrenome: 'Silva', Key: '2'},
    {nome:'Iolanda', Sobrenome: 'Silva', Key: '3'},
    {nome:'Valdira', Sobrenome: 'Silva', Key: '4'},
    {nome:'Samuel', Sobrenome: 'Silva', Key: '5'},
  ]

 

  // async function handleFetchData(){
  //   // const response = await AsyncStorage.removeItem('@meuspedidos:pedidos');
  //   // const response = await AsyncStorage.getAllKeys();
  //   const response = await AsyncStorage.getItem('@meuspedidos:pedidos');
  //   const data = response ? JSON.parse(response) : {};
  //   setData([data]);
    // console.log(response);
    // console.log(JASON.parse(response))
  // }

  // useEffect(()=>{
  //   handleFetchData();
  // },[]);

    return(
      <SafeAreaView style={estil.container}>
        <StatusBar hidden={false} backgroundColor={'#fff'}/>
        <Text>Tela Inicial</Text>
        {/* <FlatList style = {estil.flatlist}
        data={pedidos}
        // keyExtractor={(item) => item.nome}
        keyExtractor={(pedidos) => pedidos.nome}
        renderItem={({item}) => (
          <View style={estil.containerLista}>
            <Text style={estil.textoLista}>Nome: {item}</Text>
            <TouchableOpacity>
              <Icon name='delete' size={25} color={'red'}/>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        /> */}

        <FlatList
        data={pedidos}
        renderItem={({item, index}) => {
          return(
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.telefone}</Text>
            </View>
          )
        }}
        />

        
        <View style={estil.caixa_botao}>
          <TouchableOpacity onPress={() => navigation.navigate('Adicionar')}>
            <Icon name='pluscircle' size={70} style={{color:'#5CC6BA'}}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const estil = StyleSheet.create({
    container:{
      paddingTop:30,
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

