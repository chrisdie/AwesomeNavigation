import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';
 
export default class RowAdder extends Component<{}>
{
    constructor()
    {
        super();
 
        this.state = { 
          
          ViewArray: [], 

          Disable_Button: false 

        }
 
        this.animatedValue = new Animated.Value(0);
        
        this.Array_Value_Index = 0;

      

    }

    HideMe = (arg) => 
    {
      console.log(this);
      console.log(this.Array_Value_Index-1, this.state.ViewArray, "hello1");
      let comp = this.state.ViewArray[this.Array_Value_Index-1] ;
      console.log(comp, "hello2");
      comp.pressStatus = true;
     
      this.setState(this.state); 

    }
 
    Add_New_View_Function = () =>
    {
        this.animatedValue.setValue(0);
 
        let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index, pressStatus : false }
 
        this.setState({ Disable_Button: true, ViewArray: [ ...this.state.ViewArray, New_Added_View_Value ] }, () =>
        {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true
                }
            ).start(() =>
            {
                this.Array_Value_Index = this.Array_Value_Index + 1;

                this.setState({ Disable_Button: false });
            }); 
        });              
    }

    render()
    {
        const AnimationValue = this.animatedValue.interpolate(
        {
            inputRange: [ 0, 1 ],

            outputRange: [ -59, 0 ]
        });
 
        let Render_Animated_View = this.state.ViewArray.map(( item, key ) =>
        {
            if(( key ) == this.Array_Value_Index)
            {
                return(
 
                    <Animated.View 
                      key = { key } 
                      style = {item.pressStatus ? styles.hiddenContainer : [  styles.Animated_View_Style, { opacity: this.animatedValue, transform: [{ translateY: AnimationValue }] } ]  }>
                        
                        <Text style = { styles.View_Inside_Text } > Thiss Is Row { item.Array_Value_Index } </Text>
                   
                    </Animated.View> 
                
              );
            }
            else 
            {
                return(

                    <View 
                      key = { key } 
                      style = { styles.Animated_View_Style }>

                       <TouchableOpacity 
                        activeOpacity = { 0.7 } 
                        disabled = { this.state.Disable_Button } 
                        onPress = { this.HideMe }>
               
               
                        <Text style = { styles.View_Inside_Text } > Thisx Is Row { item.Array_Value_Index } </Text>

                         </TouchableOpacity>


                    </View>

                );
            }
        });
 
        return(
            <View style = { styles.MainContainer }>

                <ScrollView>

                    <View style = {{ flex: 1, padding: 2 }}>
                    {
                        Render_Animated_View
                    }
                    </View>

                </ScrollView>
 
                <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle } 
                disabled = { this.state.Disable_Button } 
                onPress = { this.Add_New_View_Function }>
                    
                    <Image 
                    source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
                    style = { styles.FloatingButtonStyle }
                    />
                
                </TouchableOpacity>

                

            </View>
        );
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
 
    Animated_View_Style:
    {
        height: 60,
        backgroundColor: '#FF9800',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
 
    View_Inside_Text:
    {
        color: '#fff',
        fontSize: 24
    },

    TouchableOpacityStyle:{
  
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },

    FloatingButtonStyle: {
  
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
    hiddenContainer: {
      top: window.height,
      bottom: -window.height
    }
});