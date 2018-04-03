import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

class MainPage extends Component {

    onChooseChannel(num) {
        console.log("onChooseChannel "+ num);
        this.props.navigation.navigate('Dogs'+num);
    }

    

    render() {

        const buttons = []
        for (let i = 1; i < 7; i++){
            buttons.push(
                <Button  
                    title={"DogScreen " + i} 
                    key={"key"+i} 
                    onPress={() => this.onChooseChannel(i)}   />)
        }
       
        return (
            <View >
                {buttons}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {  };
};

export default MainPage;