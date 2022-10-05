//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/style';

// create a component
class Finalizado extends Component {
    render() {
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');
        const valorTotal = navigation.getParam('valor');

        return (<View style={styles.container}>

            <Text style={styles.titulo}>Obrigado pela preferência {nomeUsuario}!</Text>
            <Text style={styles.titulo}>Seu pedido foi confirmado!</Text>

            <View style={{ marginVertical: 6, alignSelf: 'stretch', alignItems: 'center' }}>
                <Text style={styles.texto}>Valor: {valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>

            <View style={{ marginVertical: 16, alignSelf: 'stretch' }}>
                <TouchableOpacity style={styles.buttonPedido} onPress={() => { this.props.navigation.navigate('Login') }}>
                    <Text style={styles.textButton}>Retornar ao Início</Text>
                </TouchableOpacity>

            </View>

        </View>);
    }
}



//make this component available to the app
export default Finalizado;
