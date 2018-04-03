import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { connect } from "react-redux";

import { TabNavigator, addNavigationHelpers } from "react-navigation";


import AppTabBar1 from './tabbar1/App';
import AppStack from './stack/App';
import AppTabRouter from './tabrouter/App';
import AppTabBar2 from './tabbar2/App';
//import configureStore from '../store/configureStore';

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 


const AppBar = TabNavigator({
    TabNav1: { screen: AppTabBar1},    
    Stack: { screen: AppStack}  ,
    TabRouter: { screen: AppTabRouter}  ,
    TabBar2: { screen: AppTabBar2}  ,

    });




export default class App extends React.Component {

    constructor()
    {
        super();
        // this.state = {
        //     fetching: true,
        //     store: configureStore(() => 
        //      {
        //         this.setState({fetching: false, dogs: {}, idxs: {} })
        //      }),
        // };
        
    }


    render(){

        // if (this.state.fetching) {
        //     return null;
        // }


        return(
        
            <AppBar />
        
        )
    }
}


 
