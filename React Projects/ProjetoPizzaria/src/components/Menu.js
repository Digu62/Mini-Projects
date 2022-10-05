import React, { Component } from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../style/style';

// define your styles
class Menu extends Component{
    render(){
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        return(
            <View style={styles.container}>
                {/*<Image source={require('../images/img2.png')} style={styles.imagem}/>*/}
                <Text style={styles.texto}>Olá {nomeUsuario}, bem vindo!</Text>
                <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text style={styles.textButton}>Voltar para login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Espera')}}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
};

//make this component available to the app
export default Menu;