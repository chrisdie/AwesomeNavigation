import React, { Component } from 'react';
import ADog from "./ADog";
import { View, Text,ScrollView,  } from 'react-native';

export default class Breed extends Component {

shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log("breed shouldComponentUpdate", this.props, nextProps)
    if (this.props.idx === nextProps.idx){
        console.log("breed shouldComponentUpdate false!")
        return false;
        
    }
    console.log("breed shouldComponentUpdate true!")
    return true;
}

  render() {
    console.log("breed render")
    const { dogs, idx } = this.props;

    const alldogs = []
    let breedDogs = dogs
    for (let i in breedDogs){
        const dog = breedDogs[i]; 
        alldogs.push(<ADog dog={dog} key={dog} />)
    }

    

    return (
      <View>
         <ScrollView  >
            {alldogs}
        </ScrollView>
      </View>
    );
  }
}
