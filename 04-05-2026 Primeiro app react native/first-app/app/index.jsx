import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/imagem.jpg'

export default function Index() {
  return (
    // <View style = {estilos.corpo}>
    //   <Text style = {estilos.titulo}>Meu primeiro app</Text>
    // </View>
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Meu primeiro app</Text>
      <Image source={Foto} style={estilos.Imagem}/>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o App</Text>
        <Text style={estilos.texto}>Primeiro aplicativo feito com React Native desenvolvido pelo Senai</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderei</Text>
        <Text style={estilos.item}>- Push Notification</Text>
        <Text style={estilos.item}>- Acesso aos recursos nativos</Text>
        <Text style={estilos.item}>- Acesso a APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que vou precisar</Text>
        <Text style={estilos.item}>- Node JS</Text>
        <Text style={estilos.item}>- Vs Code</Text>
        <Text style={estilos.item}>- Emulador ou Celular</Text>
        <Text style={estilos.item}>- Ser um aluno ou uma aluna</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo:{
    flex:1,
    padding:20,
    alignItems:'center',
    backgroundColor:'#37b1e1'
  },
  titulo:{
    fontSize:30,
    textAlign:'center'
  },
  subtitulo:{
    fontSize:20,
    textAlign:'center'
  },

  container:{
    backgroundColor:'#66e7dc'
  },

  Imagem:{
    height:200,
    width:'100%'
  }

})
