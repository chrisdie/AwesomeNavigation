import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { connect } from "react-redux";

import { TabNavigator, addNavigationHelpers } from "react-navigation";


import DogScreen from '../_shared//DogScreen';
import configureStore from '../store/configureStore';

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 


const TabBar = TabNavigator({
    Dogs1: { screen: DogScreen},    
    Dogs2: { screen: DogScreen}  ,
    Dogs3: { screen: DogScreen}  ,
    Dogs4: { screen: DogScreen}  ,
    Dogs5: { screen: DogScreen}  ,
    Dogs6: { screen: DogScreen}  
    });




export default class App extends React.Component {

    constructor()
    {
        super();
        this.state = {
            fetching: true,
            store: configureStore(() => 
             {
                this.setState({fetching: false, dogs: {}, idxs: {} })
             }),
        };
        
    }


    render(){

        if (this.state.fetching) {
            return null;
        }


        return(
        <Provider store={this.state.store}>
            <TabBar />
        </Provider>
        )
    }
}


 
