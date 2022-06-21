//Tela para inserir pedidos
import React, {useState}from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import {Entypo, Feather, AntDesign} from '@expo/vector-icons'


export default function AdicionarPedido({navigation}){
  // criando os estados
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [servico, setServico] = useState(null)
  const [inicio, setInicio] = useState(null)
  const [Previsao_entrega, setPrevisao_entrega] = useState(null)

    return(
      <View>
        <Text>titulo: Adicionar Pedidos</Text>
        <View style={estilo.form}>
          <Text>Nome</Text>
          <TextInput style={estilo.inputs}
          autoFocus={true}
          onChangeText={value => setNome(value)}
          placeholder='Digite o nome...'/>

          <Text style={estilo.txt}>Telefone</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={value => setTelefone(value)}
          keyboardType='numeric'
          placeholder='Digite o telefone...'/>

          <Text style={estilo.txt}>Serviço</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={value => setServico(value)}
          placeholder='Descreva o serviço...'/>

          <Text style={estilo.txt}>Data de início</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={value => setInicio(value)}
          placeholder='Data de entrada...'/>

          <Text style={estilo.txt}>Previsão de entrega</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={value => setPrevisao_entrega(value)}
          placeholder='Previsão de entrega...'/>
        </View>
      </View>
    )
  }

  const estilo = StyleSheet.create({
    form:{
      margin: 20,
    },
    inputs:{
      width: '100%',
      // paddingBottom:15,
      borderBottomWidth: 1,
      borderBottomColor:'#0005',
      // marginTop:10
    },
    txt:{
      marginTop: 20,
    }
  })