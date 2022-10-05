import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    /*
    container: {
      flex: 1,
      backgroundColor: '#C23616',
      justifyContent: "center",
      alignItems: 'center',
    },
  
    texto: {
      color: '#800000',
      fontSize: 25,
      textAlign: 'center',
    },
    */
    legenda: {
      color: 'blue',
      fontSize: 18,
    },
    button: {
      backgroundColor: 'blue',
      opacity: 0.6,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 50,
      padding: 20,
      marginTop: 10,
      borderRadius: 20,
    },
    imagem: {
      width: 300,
      height: 300,
      borderRadius: 30,
      marginBottom: 50,
      opacity: 0.8,
    },
    caixa: {
      width: 200,
      backgroundColor: 'blue',
      fontSize: 25,
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
    },
    textButton: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLink: {
      marginTop: 10,
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'blue',
    },

    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#C23616',
      justifyContent: "center",
      alignItems: 'center',
    },

    tituloCadastro: {
      alignItems: 'center',
      fontSize: 30,
      color: '#FBC531',
      marginBottom: 20,
      //fontFamily: 'Lemon',
    },

    textoCadastro: {
      alignItems: 'center',
      fontSize: 15,
      color: '#F5F6FA',
      marginBottom: 30,
    },

    caixaDeTexto: {
      fontSize: 20,
      marginTop: 20,
      borderRadius: 5,
      backgroundColor: '#FFF6F6',
      width: 250,
      height: 50,
      textAlign: 'center',
    },

    botaoCadastro: {
      backgroundColor: '#FBC531',
      borderRadius: 50,
      width: 250,
      height: 50,
      marginTop: 30,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }, 

    textoBotaoCadastro: {
      fontSize: 25,
      color: '#2F3640',
    },

    tituloCadastroRealizado: {
      alignItems: 'center',
      fontSize: 45,
      color: '#FBC531',
      marginBottom: 20,
      //fontFamily: 'Lemon',
    },

    textoCadastroRealizado: {
      alignItems: 'center',
      fontSize: 25,
      color: '#F5F6FA',
      marginVertical: 100,
    }
});

export default styles;