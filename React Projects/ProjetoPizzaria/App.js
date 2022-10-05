import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/components/Login';
import Menu from './src/components/Menu';
import Cadastro from './src/components/Cadastro';
import Finalizado from './src/components/Finalizado';
import CadastroRealizado from './src/components/CadastroRealizado';

const MainNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
  
  
  CadastroRealizado: {
    screen: CadastroRealizado,
    navigationOptions: {
      header: null
    }
  },

  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      header: null
    }
  },


  Finalizado: {
    screen: Finalizado,
    navigationOptions: {
      header: null
    }
  },

  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(MainNavigation);