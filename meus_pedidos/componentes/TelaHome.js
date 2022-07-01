//Tela inicial
import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import estilo from '../estilos/estilo';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'expo-status-bar';
import { ListItem } from 'react-native-elements'

//importando bibliotecas para permitir a atualização auomática da tela home:
import { useFocusEffect } from '@react-navigation/native';



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

  //validando para saber se o usuário realmente quer exluir o pedido. Se sim, a função removerPedido é chamada, 
  //caso contrário nada acontece
  function remover(nome){
    Alert.alert('Excluir Pedido','Deseja excluir o pedido?',[
      {text:'Sim',
      onPress(){
        removerPedido(nome);
      }
    },
      {text:'Não'}
    ])
  }

  //função para remover pedido:
  async function removerPedido(nome){
      const response = await AsyncStorage.getItem('@meuspedidos:pedidos');
    const dadosAnteriores = response ? JSON.parse(response) : [];

    const pedidos = dadosAnteriores.filter((item) => item.nome != nome);
    await AsyncStorage.setItem("@meuspedidos:pedidos", JSON.stringify(pedidos));
    
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

        {/* <FlatList 
        keyExtractor={(item) => item.nome}
        style={estil.flatlist}
        data={pedidos}
        renderItem={({item, index}) => {
          return(
            <View style={estil.containerLista}>
              <View>
              <Text style={{color:'red'}}>Cliente: <Text style={{color:'black'}}>{item.nome}</Text></Text>
              </View>
              <View>
              <Text style={{color:'red'}}>Contato: <Text style={{color:'black'}}>{item.telefone}</Text></Text>
              <Text style={{color:'red'}}>Serviço: <Text style={{color:'black'}}>{item.servico}</Text></Text>
              <Text style={{color:'red'}}>Data de Inicio: <Text style={{color:'black'}}>{item.inicio}</Text></Text>
              <Text style={{color:'red'}}>Previsão de Entrega: <Text style={{color:'black'}}>{item.previsao_entrega}</Text></Text>
              </View>
              <TouchableOpacity onPress={() => removerPedido(item.nome)}>
                <Icon name='delete' size={25} color={'red'}/>
              </TouchableOpacity>
              <Button title='remove' onPress={() => remover(item.nome)}/>
              
            </View>
          )
        }}
        /> */}


        <FlatList
        data={pedidos}
        keyExtractor={(item) => item.nome}
        renderItem={carregarPedido}
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

