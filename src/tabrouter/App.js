import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { connect } from "react-redux";

import { TabRouter, 
    createNavigator,
    createNavigationContainer, } from "react-navigation";

import DogScreen from '../_shared/DogScreen';
import HomePage from './Home';

import configureStore from '../store/configureStore';

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 


const TabBar = TabRouter({
    Dogs1: { screen: props => <DogScreen {...props} key="a" num="a"/>},    
    Home:  { screen: HomePage}  ,
    Dogs3: { screen: props => <DogScreen {...props} key="b" />}  ,
    Dogs4: { screen: DogScreen}  ,
    Dogs5: { screen: DogScreen}  ,
    Dogs6: { screen: DogScreen}  
    });



const MyView = ({ navigation, router }) => {
    const ChildComponent = router.getComponentForState(navigation.state);
    
    return (
        <View style={{ flex: 1 }}>
        <ChildComponent />
        <Button title="dogs1" onPress={() => navigation.navigate('Dogs1')} />
        <Button title="home" onPress={() => navigation.navigate('Home')} />
        <Button title="dogs3" onPress={() => navigation.navigate('Dogs3')} />
        </View>
    );
}

const App = createNavigator(TabBar)(MyView);
  
const Nav =  createNavigationContainer(App);
  


export default class AppTabRouter extends React.Component {

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
            <Nav />
        </Provider>
        )
    }
}


 
