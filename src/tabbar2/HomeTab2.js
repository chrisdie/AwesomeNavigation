import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomePage extends Component {


    navMe(num){
        console.log("navMe "+ num);
        // let navi = NavigationActions.navigate('Dogs'+num)
        // let stfa = TabBar.router.getStateForAction(navi)
        this.props.navigation.navigate("Dogs"+num)
        console.log("navMe***  ens")

        //.navigate({ routeName: 'Dogs'+num });

    }
    
        render(){
            return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Page</Text>
                <Button title="dogs1" onPress={() => this.navMe(1)}/>
                <Button title="dogs2" onPress={() => this.navMe(2)}/>
                <Button title="dogs3" onPress={() => this.navMe(3)}/>
                <Button title="dogs4" onPress={() => this.navMe(4)}/>
                <Button title="dogs5" onPress={() => this.navMe(5)}/>
                <Button title="dogs6" onPress={() => this.navMe(6)}/>
                
            </View>
            )
        }
    
}

export default HomePage;
