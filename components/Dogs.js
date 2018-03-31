import React, { Component } from "react";
import logo from "./logo.svg";
import Breed from "./Breed";
import FastImage from 'react-native-fast-image';
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';

import { connect } from "react-redux";




class Dogs extends Component {

    constructor(){
        super()
        this.alldogViews = {}
    }

  render() {

    console.log("render props",this.props);

    const { fetching,  dogs, onRequestDog, error, idx } = this.props;
    
    const idx2 = idx === "akita" ? "collie" : "akita";

    console.log("render dogs",dogs);
    console.log("render idx",idx, idx2);

    
    //if (!this.alldogViews[idx]){
        this.alldogViews[idx] = <Breed dogs={dogs[idx]} ref={idx} idx={idx} />
    //}

    console.log("renderrs fetching", fetching)
    return (
      <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>


      {/* {fetching ? (
          <Button 
           title="Get Doggg"
           color="#841584"
           accessibilityLabel="Learn more about this purple buttn"
           disabled />
        ) : ( */}
          <Button 
            onPress={() => {onRequestDog(idx2)}}
            title="Get Dogg"
            color="#841584"
            accessibilityLabel="Learn more about this purpl button" />
                
        {/* )}  */}

        {this.alldogViews[idx]}
        
        

        {error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}

      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps state",state)
  const res =  {
    fetching: state.reducer.fetching,
    dogs: state.reducer.dogs,
    error: state.reducer.error,
    idx:  state.reducer.idx,
  };
  console.log("mapStateT oPropsr es",res)
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