//Tela para inserir pedidos
import React, {useState}from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {Entypo, Feather, AntDesign} from '@expo/vector-icons';
//importando a biblioteca que permite arazenamento local:
import AsyncStorage from '@react-native-async-storage/async-storage';
//
import { TextInputMask } from 'react-native-masked-text';

import MaskInput from 'react-native-mask-input';


import Botao_Salvar from './Botao_Salvar'






export default function AdicionarPedido({navigation}){
  // criando os estados
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [servico, setServico] = useState(null)
  const [inicio, setInicio] = useState(null)
  const [previsao_entrega, setPrevisao_entrega] = useState(null)

  // criando estados para validar formulário
  const [errorNome, setErrorNome] = useState(null)
  const [errorTelefone, setErroTelefone] = useState(null)
  const [errorServico, setErrorServico] = useState(null)

  //teste
  const [test, setTest] = useState(null)
  
  const validar = () =>{
    setErrorNome('Preencha o nome do cliente')
    
    return true;
  }


  //criando funções de armazenamento:
   async function salvar(){
    
    if (validar()){
    //inicio
    const id = Date();
    try{
    const pedido = {
      id,
      nome,
      telefone,
      servico,
      inicio,
      previsao_entrega}
  
    console.log(pedido)


    //armazenando as informações no dispositivo (chave, valor)
    //na chave coloquei o nome da aplicação(meuspedidos) seguida da coleção que é pedidos
    //para poder armazenar os dados é preciso convertê-los em string através do JSON

    //recupreando os dados já salvos e salvando com o novos dados que foram inseridos:
    const response = await AsyncStorage.getItem("@meuspedidos:pedidos");
    const dadosAnteriores = response ? JSON.parse(response) : [];

    //criando um novo objeto que vai conter todo os dados anteriores e vai permitir setar outros novos dados:
    const pedidos = [...dadosAnteriores, pedido];

    //armazenando os dados no formato string
    await AsyncStorage.setItem("@meuspedidos:pedidos", JSON.stringify(pedidos));
 
    //mensagem de sucesso para armazenamento realizado com sucesso
    Alert.alert(
      'Sucesso','Pedido Cadastrado com Sucesso',
    )
    }catch(error){
      console.log(error);
      Alert.alert(
        'Error','Ocorreu um erro ao tentar salvar pedido'
      )
    }
  }

  //fim
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
          placeholder='Digite o nome...'
          errorMessage={errorNome}/>

          {/* <Text style={estilo.txt}>Telefone</Text> */}
          {/* com o textiputmask: */}
          {/* <TextInputMask
          style={estilo.inputs}
            type='cel-phone'
            options={{
              maskType:'BRL',
              withDDD:true,
              dddMask:'(99) '
            }}
            value={telefone}
            onChangeText={setTelefone}
            placeholder='Digite o telefone...'
          /> */}

          <Text style={estilo.txt}>Contato</Text>
          <MaskInput
          style={estilo.inputs}
          value={telefone}
          onChangeText={setTelefone}
          mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          keyboardType={'numeric'}
          />

        
          <Text style={estilo.txt}>Serviço</Text>
          <TextInput
          style={estilo.inputs}
          onChangeText={setServico}
          placeholder='Descreva o serviço...'/>

          <Text style={estilo.txt}>Data de início</Text>
          <MaskInput
          style={estilo.inputs}
          value={inicio}
          onChangeText={setInicio}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          placeholder={'__/__/____'}
          keyboardType={'numeric'}
          />

          <Text style={estilo.txt}>Previsão de entrega</Text>
          <MaskInput
          style={estilo.inputs}
          value={previsao_entrega}
          onChangeText={setPrevisao_entrega}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          placeholder='__/__/____'
          keyboardType='numeric'
          />
          
        </View>



        <View>
          <Button 
          title='Salvar'
          onPress={() => {
            salvar()
            navigation.goBack()
          }}/>

          <TouchableOpacity>
            <Botao_Salvar/>
          </TouchableOpacity>
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
      fontSize: 18,
      paddingBottom:5,

    },
    txt:{
      marginTop: 20,
    }
  })