import React, { Component } from "react";
import logo from "./logo.svg";
import Dogs from "./Dogs";
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';


export default class DogScreen extends React.Component 
{
    

    render()
    {
            let {num} = this.props;
            if(!num){
                num = "b" + Math.floor(Math.random() * 100)
            }
            if (!this.num)
                this.num = num
            console.log("DogScreen num state before", this.state)
            // if (!num && !this.state && !this.state['num']){
            //     num = Math.floor(Math.random() * 100)

            //     console.log("DogScreen num state before", this.state)
            //     this.setState({...this.state, num})
            //     console.log("DogScreen num state after", this.state)
            // }else{
            //     num = this.state.num
            // }

            console.log("DogScreenn num", this.num)
            return(

            <View style={{flex:1}}> 
                <Text>{this.num}</Text>
                <Dogs styles={{flex:1}} num={this.num} />
            </View>

            // <Provider  store={this.state.store}>
            //     <Dogs styles={{flex:1}} />
            // </Provider>

            );
    }
}  
