//Tela para inserir pedidos
import React, {useState}from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {Entypo, Feather, AntDesign} from '@expo/vector-icons';
//importando a biblioteca que permite arazenamento local:
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function AdicionarPedido({navigation}){
  // criando os estados
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [servico, setServico] = useState(null)
  const [inicio, setInicio] = useState(null)
  const [previsao_entrega, setPrevisao_entrega] = useState(null)

   //função para salvar temmporariamente(no estado) as informações ao clicar no botão Salvar:
   async function handleNew(){
    const newData = {
      // id:"",
      nome,
      telefone,
      servico,
      inicio,
      previsao_entrega
    }

    console.log(newData)

    //armazenando as informações no dispositivo (chave, valor)
    //na chave coloquei o nome da aplicação(meuspedidos) seguida da coleção que é pedidos
    //para poder armazenar os dados é preciso convertê-los em string através do JSON
    await AsyncStorage.setItem("@meuspedidos:pedidos", JSON.stringify(newData));

    Alert.alert(
      'Sucesso','Pedido Cadastrado com Sucesso'
    )
  }

    return(
      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={30}>
        {/* <Text>titulo: Adicionar Pedidos</Text> */}
        <ScrollView>
        <View style={estilo.form}>
          <Text>Nome</Text>
          <TextInput style={estilo.inputs}
          autoFocus={true}
          onChangeText={setNome}
          placeholder='Digite o nome...'/>

          <Text style={estilo.txt}>Telefone</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={setTelefone}
          keyboardType='numeric'
          placeholder='Digite o telefone...'/>

          <Text style={estilo.txt}>Serviço</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={setServico}
          placeholder='Descreva o serviço...'/>

          <Text style={estilo.txt}>Data de início</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={setInicio}
          placeholder='Data de entrada...'/>

          <Text style={estilo.txt}>Previsão de entrega</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={setPrevisao_entrega}
          placeholder='Previsão de entrega...'/>
        </View>
        <View>
          <Button 
          title='Salvar'
          onPress={handleNew}/>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
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