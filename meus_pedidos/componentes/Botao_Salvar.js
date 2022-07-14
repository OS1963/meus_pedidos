//Aqui temos o botão salvar personalizado
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

export default function Adicionar(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>SALVAR</Text>
            <Entypo style={estilo.icone} name='check' size={50} color={'#F1EBEB'}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flexDirection:'row',
        width: '50%', 
        height: 60,
        borderRadius:30,
        backgroundColor:'#5CC6BA',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-evenly',
        
    },

    texto:{
        fontSize:25,
        fontWeight:'bold',
        color: '#fff',
        
    },

    icone:{
        // justifyContent:'center',
        // alignItems:'flex-end'
    }
})
