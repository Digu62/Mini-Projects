import React, { Component } from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../style/style';

// define your styles
class CadastroRealizado extends Component{
    render(){
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        return(
            <View style={styles.container}>
                <Text style={styles.tituloCadastroRealizado}>Parabéns!!</Text>
                <Text style={styles.textoCadastroRealizado}>Cadastro realizado com sucesso. Retorne para a tela de login para acessar a sua conta.</Text>
                
                <TouchableOpacity style={styles.botaoCadastro} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text style={styles.textoBotaoCadastro}>Retornar ao login</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

//make this component available to the app
export default CadastroRealizado;