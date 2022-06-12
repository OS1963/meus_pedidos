
  // conteudo anterior
  
  // // criando estado loaded para carregar a fonte
  // const [loaded] = useFonts({
  //   AdventPro: require('./assets/fonts/AdventPro-Light.ttf')
  // });
  // // caso a fonte não seja carregada, o retorno é nulo (ver essa questão depois)
  // if (!loaded) {
  //   return null;
  // }

  // return (
  //   <SafeAreaView style={estilo.container}>
  //     <SafeAreaView>
  //       <Text style={{fontFamily:'AdventPro', fontSize: 50, color:'#717F7F'}}>Meus Pedidos</Text>
  //     </SafeAreaView>

  //     <SafeAreaView>
  //     <Image
  //       source={require('./assets/logo.png')}
  //       style={estilo.logo}
  //     /> 
  //     </SafeAreaView>

  //     <SafeAreaView>
  //       <TouchableOpacity
  //       activeOpacity={0.5}>
  //         <Image
  //           source={require('./assets/vermais.png')}
  //           style={estilo.verMais}
  //         />
  //       </TouchableOpacity>
  //     </SafeAreaView>
  //   </SafeAreaView>
  // );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   imagem:{
//     width: 210,
//     height: 205,
//   }
// });


function TelaPedidos({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Tela Pedidos</Text>
      <Text>Aqui será mostrados os pedidos em forma de uma lista</Text>

      {/* inserindo botão para poder cadastrar */}
      <Button
      title='Cadastrar Pedidos'
      onPress={()=>navigation.navigate('Cadastrar')}/>
    </View>
  )
}