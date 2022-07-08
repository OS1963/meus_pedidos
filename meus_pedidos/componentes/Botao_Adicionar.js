//Aqui temos o botão adicionar personalizado
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

export default function Adicionar(){
    return(
        <View style={estilo.container}>
            <Entypo name='plus' size={60} color={'#fff'}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        width: 60, 
        height: 60,
        borderRadius:30,
        backgroundColor:'#5CC6BA',
    }
})
