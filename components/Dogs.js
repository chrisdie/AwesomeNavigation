import React, { Component } from "react";
import logo from "./logo.svg";
import ADog from "./ADog";
import FastImage from 'react-native-fast-image';
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';

import { connect } from "react-redux";

class Dogs extends Component {
  render() {

    console.log("render props",this.props);

    const { fetching, dog, onRequestDog, error, idx } = this.props;
    
    const idx2 = idx === 1 ? 2 : 1;

    console.log("render dog",dog);
    console.log("render idx",idx, idx2);
    return (
      <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>


      {fetching ? (
          <Button 
           title="Get Dogg"
           color="#841584"
           accessibilityLabel="Learn more about this purple button"
           disabled />
        ) : (
          <Button 
            onPress={() => onRequestDog(idx2)}
            title="Get Dogg"
            color="#841584"
            accessibilityLabel="Learn more about this purpl button" />
                
        )} 

        <ADog dog={dog} />
        

        {error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}

      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps state",state)
  const res =  {
    fetching: state.reducer.fetching,
    dog: state.reducer.dog,
    error: state.reducer.error,
    idx:  state.reducer.idx,
  };
  console.log("mapStateT oProps r es",res)
  return res;

};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: (idx) => {
        console.log("onRequestDog idx",idx)
        dispatch({ type: "API_CALL_REQUEST", idx })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);