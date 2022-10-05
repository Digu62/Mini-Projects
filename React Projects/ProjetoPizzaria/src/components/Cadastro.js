import React, { Component } from 'react';

import { View, Image, Text, TextInput,  StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../style/style';


class Cadastro extends Component{
    state = {
        usuario: '',
        email: '',
        senha: ''
    }

    render(){
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        return(
            <View style={styles.container}>
                <Text style={styles.tituloCadastro}>Cadastre-se</Text>
                <Text style={styles.textoCadastro}>Preencha corrretamente todos os campos para finalizar o cadastro</Text>

                <TextInput style={styles.caixaDeTexto} placeholder={'Informe um usuário'} onChangeText= {text => this.state.usuario = text}/>
                <TextInput style={styles.caixaDeTexto} placeholder={'Informe um e-mail'} onChangeText= {text => this.state.email = text}/>
                <TextInput style={styles.caixaDeTexto} placeholder={'Informe uma senha'} secureTextEntry={true} onChangeText= {text => this.state.senha = text}/>
                <TextInput style={styles.caixaDeTexto} placeholder={'Confirme a senha'} secureTextEntry={true} onChangeText= {text => this.state.senha = text}/>
                
                <TouchableOpacity style={styles.botaoCadastro} onPress={() => {this.props.navigation.navigate('CadastroRealizado', {'usuario': this.state.usuario}, {'email': this.state.email}, {'senha': this.state.senha})}}>
                    <Text style={styles.textoBotaoCadastro}>Finalizar Cadastro</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botaoCadastro} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text style={styles.textoBotaoCadastro}>Retornar ao login</Text>
                </TouchableOpacity>
            </View>
        );
    }
};


export default Cadastro;