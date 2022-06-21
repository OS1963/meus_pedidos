import React from "react";
import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';



export default estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F5F9',
        alignItems:'center',
        justifyContent:"center",
        marginTop: 20,
    },

    logo:{
        width: 210,
        height: 205,
      },
    
    titulo:{
        fontFamily:'./assets/AdventPro',
        fontSize: 50,
    },
    
    adicionar:{
        color: '#5CC6BA',
        width: 70,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    
})