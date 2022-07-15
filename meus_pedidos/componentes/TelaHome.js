//Tela inicial
import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import Visualizar from  'react-native-vector-icons/Fontisto'
import {StatusBar} from 'expo-status-bar';
// import { ListItem } from 'react-native-elements';
import Botao_Adicionar from './Botao_Adicionar';
import MaskInput from 'react-native-mask-input';



//importando bibliotecas para permitir a atualização auomática da tela home:
import { useFocusEffect } from '@react-navigation/native';
//importando o Async para poder mostrar os dados armazenados
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Jost_100Thin } from '@expo-google-fonts/jost';

function verPedido(item){
  return(

    // <View>
    //   <Modal animationType='slide'
    //   // transparent={true}
    //   visible={true}
    //   // style={{}}
    //   >
    //     <Text>oool</Text>
    //   </Modal>
    // </View>
    Alert.alert(item.nome)
  )
}

export default function TelaHome({navigation}){

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
    console.log('oi')
    buscarPedido();
  },[]));

  // useEffect(()=>{
  //   buscarPedido()
  //   return () => clearInterval(buscarPedido)
  // }, [])


  const data = new Date();
    return(
      <SafeAreaView style={estil.container}>
        <StatusBar hidden={true} backgroundColor={'#fff'}/>
       <FlatList
        keyExtractor={(item) => item.id}
        style={estil.flatlist}
        data={pedidos}
        renderItem={({item}) => {
          return(
            <View style={estil.containerLista}>
              <Image source={require('../assets/avatar.png')}
              style={estil.avatar}
              />
              <View>
                <Text style={estil.titulo}>{item.nome}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Icone name='whatsapp' size={18} color={'green'}/>
                  <Text style={{paddingLeft:5, fontSize:15}}>{item.telefone}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <Icone name='truck-delivery' size={20} color={'blue'}/>
                  <Text style={{paddingLeft:5, fontSize:15}}>{item.previsao_entrega}</Text>
                </View>
              </View>
              
              {/* Botões */}
              
              <View style={estil.botoes}>

                {/* <Button title='ver' onPress={() => setModalVisivel(true)}/> */}
                <View style={estil.botao}>
                <TouchableOpacity onPress={() => navigation.navigate('Pedidos', item)}>
                  <Visualizar name='preview' size={30} color={'#31A6E8'}/>
                </TouchableOpacity>
                </View>
                
                <View style={estil.botao}>
                <TouchableOpacity onPress={() => navigation.navigate('EditarPedidos', item)}>
                  <Icon name='edit' size={30} color={'#FF8000'}/>
                </TouchableOpacity>
                </View>

                <View style={estil.botao}>
                <TouchableOpacity onPress={() => remover(item.id)}>
                  <Icon name='delete' size={30} color={'red'}/>
                </TouchableOpacity>
                </View>

                
              </View>
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
      // padding: 15,
      flex: 1,
      // backgroundColor:'#E5E5E5'
      flexDirection:'column'
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
      paddingBottom:10,
      marginBottom:10,
      paddingTop:10,
      paddingLeft: 20,
      paddingRight:20,
      borderRadius:4,
      borderBottomWidth:1,
      borderBottomColor:'#717F7F',
      // backgroundColor:'#DFDFDF',
      flexDirection:'row',
      // justifyContent:'space-between'
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

    },

    avatar:{
      // width: 25,
      marginRight:15,
    },

    titulo:{
      fontSize:20,
      fontWeight:'bold',
    }, 

    botoes:{
      flexDirection:'row',
      marginBottom: 2,
      // marginLeft: '3%',
      justifyContent:'space-around',
      // paddingLeft:'30%',
      position: 'absolute',
      alignItems:'flex-end',
      left: '70%',
      top: '70%'
    },
    botao:{
      flexDirection:'row',
      marginLeft: 15,
      // padding:5,
      justifyContent:'space-around',
      // paddingLeft:'30%',
      position: 'relative',
      // alignItems:'flex-end',
      // left: '150%',
    },
    // estilizando a modal:
    modalPrincipal:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#EDE8E8'
    },
    modalView:{
      backgroundColor:'#fff',
      borderRadius:30,
      padding: 15,
      width: 300,
      alignItems:'center'
    }

  })

