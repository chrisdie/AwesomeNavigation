import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { connect } from "react-redux";

import { TabNavigator, addNavigationHelpers } from "react-navigation";
import { NavigationActions } from 'react-navigation';

import Cats from './components/Cats';
import Dogs from './components/Dogs';
import DogScreen from './components/DogScreen';
import Tab from './components/Tab';

import configureStore from './store/configureStore';

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
import HomePage from './components/HomeTab2';
 


const TabBar = TabNavigator({
    Home: { screen: HomePage},    
    Dogs1: { screen: DogScreen}  ,
    Dogs2: { screen: DogScreen}  ,
    Dogs3: { screen: DogScreen}  ,
    Dogs4: { screen: DogScreen}  ,
    Dogs5: { screen: DogScreen}  ,
    Dogs6: { screen: DogScreen}  ,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false,
        }),});




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
            <View flex={1}>
                <TabBar />
            </View>
        </Provider>
        )
    }
}


 
