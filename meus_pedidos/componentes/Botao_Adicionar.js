//Aqui temos o botão adicionar personalizado
import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export default function Adicionar({children, onPress}){
    return(

           <TouchableOpacity
           style={{
            top: -30,
            justifyContent: 'center',
            alignItems:'center',
           }}
           onPress={onPress}
           >

            <View style={{
                width: 60,
                height: 60,
                borderRadius:30,
                backgroundColor:'#5CC6BA'

            }}>
                {children}
            </View>
           </TouchableOpacity>
    )
}
