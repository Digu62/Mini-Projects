import React, { Component } from 'react';
import { View, Image, TouchableOpacity,  Text, TextInput, Alert} from 'react-native';
import styles from '../style/style';

class Login extends Component{
    state = {
        nome: ''
    }

    render(){
        return(
            <View style={styles.container}>
            {/*<Image source={require('../images/img1.png')} style={styles.imagem}/>*/}
                <TextInput style={styles.caixa} placeholder={'Insira o usuario'} onChangeText={text => this.state.nome=text}/>
                <TextInput style={styles.caixa} placeholder={'Insira sua senha'} secureTextEntry={true}/>
                
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Menu',{'nome': this.state.nome})}}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={()=>{this.props.navigation.navigate('Cadastro')}}>
                    <Text style={styles.textLink}>Não possui conta? Crie uma!</Text>
                </TouchableOpacity>
            </View> 
        );
    };
};

//make this component available to the app
export default Login;