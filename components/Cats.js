import React, { Component } from 'react';
import Tab from './Tab'; 

import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 


export default class Cats extends Component<{}>
{
    constructor()
    {
        super();
 
        this.state = { 
          ViewArray: [], 
          Disable_Button: false 
        }

        this.state = {indexToShow:0}

        this.idx = 0;

        this.tabs = [];
 

    }



    onPressChange = () => {

        const maxIdx = 1;
         
        this.idx =  this.idx < maxIdx ?  this.idx+1 : 0;
  
        this.setState ({indexToShow: this.idx})
        console.log(this.idx,"this.idxxx")

    }

   

    render()
    {

        

        let tabDatas = [
            {img: 'http://wallpaper-gallery.net/blog/the-most-beautiful-cats-in-the-whole-world/the-most-beautiful-cats-in-the-whole-world-1.jpg'},
            {img: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=2000'},
         ];
         if (! this.tabs){
            this.tabs = []   
         }

         if (!this.tabs[0]){ 
            for (let idx in tabDatas){
                const tabData = tabDatas[idx]; 
                this.tabs.push(
                    <Tab image={tabData.img} />
                )
            }
            console.log(this.tabs[this.state.indexToShow], this.tabs, "tabs")
            console.log("generate tabs") 
        }

         return(
            <View style={{flex:1}}>
                <Text>{this.state.indexToShow}</Text> 
                <Button
                    onPress={this.onPressChange}
                    title="Change Index"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    {this.tabs[this.state.indexToShow]} 

                 <Tab image={tabDatas[this.state.indexToShow].img} />
            </View>
        );

        
        // return(
        //     <View style={{flex:1}}>
        //         <Text>{this.state.indexToShow}</Text> 
        //         <Button
        //             onPress={this.onPressChange}
        //             title="Change Index"
        //             color="#841584"
        //             accessibilityLabel="Learn more about this purple button"
        //             />
        //         {this.state.indexToShow === 0 &&    
        //             <Tab image='http://wallpaper-gallery.net/blog/the-most-beautiful-cats-in-the-whole-world/the-most-beautiful-cats-in-the-whole-world-1.jpg' />}
        //         { this.state.indexToShow === 1 &&   
        //             <Tab image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=2000' />}
        //     </View>
        // );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    
});