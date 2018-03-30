import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Tab from './components/Tab';

import configureStore from './store/configureStore';

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 


export default class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false})),
        };
        
 

    }



   

    render()
    {
        if (this.state.isLoading) {
            return null;
          }

         return(
            // <Cats styles={{flex:1}} />
            <Provider  store={this.state.store}>
                <Dogs styles={{flex:1}} />
            </Provider>

         );
    }
}
 
