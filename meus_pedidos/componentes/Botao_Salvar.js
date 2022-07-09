//Aqui temos o botão salvar personalizado
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

export default function Adicionar(){
    return(
        <View>
            <Entypo style={estilo.icone} name='check' size={50} color={'#5CC6BA'}
            />
            <Text style={estilo.texto}>SALVAR</Text>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        width: 80, 
        height: 80,
        borderRadius:40,
        backgroundColor:'#5CC6BA',
        justifyContent:'center',
        alignItems:'center',
        // justifyContent:'space-between'
        borderColor:'red',
    },

    texto:{
        fontSize:10,
        color: '#fff',
        
    },

    icone:{
        // justifyContent:'center',
        // alignItems:'flex-end'
    }
})
