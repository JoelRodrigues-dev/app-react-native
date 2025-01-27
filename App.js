import React, {useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"



function App(){
  const [img, setImg] = useState(require('./src/img/biscoito.png'));
  const [textPhrase, setTextPhrase] = useState('');


  let phrases = [
    'Siga os bons e aprenda com eles',
    'O bom senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres mas nao dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ]

  function restartCookie(){
    setTextPhrase('')
    setImg(require('./src/img/biscoito.png'))
  }



  function cookieBreaker (){
    let numberAleatory = Math.floor(Math.random() * phrases.length)

    setTextPhrase(' " ' + phrases[numberAleatory] + ' " ')
    setImg(require('./src/img/biscoitoAberto.png'))
  }


  return (
    <View style={styles.container}>

    <Image source={img} style={styles.img} />

      <Text style={styles.textPhrase}> {textPhrase} </Text>
      <TouchableOpacity style={styles.btn} onPress={cookieBreaker}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> 
            Quebrar biscoito
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, {marginTop: 15}]} onPress={restartCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}> 
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 150,
    height: 150
  },
  textPhrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  btn:{
    width: 230,
    height: 50,
    backgroundColor: 'green',
    borderColor: '#121212',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent:'center'
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  btnText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }
})


export default App;