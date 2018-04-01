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

        
        
        this.breedgen = this.nextBreed();
        console.log("Dogs this.breedgen ", this.breedgen)
    }


    shouldComponentUpdate(nextProps, nextState, nextContext){
        console.log("Dogs shouldComponentUpdate idxs", this.props.num, this.props.idxs, nextProps.idxs)
        console.log("Dogs shouldComponentUpdate dogs", this.props.num, this.props.dogs, nextProps.dogs)
        if (!this.props.idxs[this.props.num]){
            console.log("Dogs shouldComponentUpdate no idx yet", this.props.num)
            return true;
        }
        // no data for me:
        if (!this.props.num in nextProps.idxs){
            console.log("Dogs shouldComponentUpdate no data", 
                this.props.num,
                this.props.idxs[this.props.num],
                nextProps.idxs[this.props.num])
            return false;
        }
        // first update for me
        if (!this.props.num in this.props.idxs && (this.props.num in nextProps.idxs)){
            console.log("Dogs shouldComponentUpdate first update", 
                this.props.num,
                this.props.idxs[this.props.num],
                nextProps.idxs[this.props.num])
            return true;
        }
        // differnt update for me
        if (this.props.idxs[this.props.num] === nextProps.idxs[this.props.num]){
            console.log("Dogs shouldComponentUpdate same dogs", 
                this.props.num,
                this.props.idxs[this.props.num],
                nextProps.idxs[this.props.num])
            return false;
        }
        console.log("breed shouldComponentUpdate true!", this.props.num)
        return true;
    }

    nextBreed = function* (prev) {
        const breeds = ["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","chihuahua","chow","clumber","collie","coonhound","corgi","dachshund","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","pyrenees","redbone"]
        while(true){
            let res =  breeds[Math.floor(Math.random()*breeds.length)]
            while (res === prev){
                res =  breeds[Math.floor(Math.random()*breeds.length)]
            }
            console.log("generator res",res)
            yield res
        }
    }

  render() {

    console.log("Dogs render props",this.props);

    const { fetching,  dogs, onRequestDog, error, idxs, num } = this.props;
    console.log("Dogs render props num",num);

    console.log("Dogs render this.breedgen",this.breedgen);

    
    const idx = (num && idxs && (num in idxs)) ? idxs[num] : "nothing loaded yet" 
    const idx2 = this.breedgen.next(idx).value
    console.log("Dogs render idx via breedgen",idx, idx2, this.breedgen);

    console.log("Dogs render dogs",dogs);
    console.log("Dogs render idx",idx, idx2);

    

    console.log("Dogs renderrs fetching", fetching)
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
            onPress={() => {onRequestDog(idx2,num)}}
            title="Get Dogg"
            color="#841584"
            accessibilityLabel="Learn more about this purpl button" />
                
        {/* )}  */}

        <Text>Dogs of breed "{idx}" - next will be: "{idx2}" </Text>
        { dogs && <Breed dogs={dogs[num]} /> }

        {error && <Text style={{ color: "red" }}>Uh oh - something went wrong!</Text>}

      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("Dogs mapStateToProps state",state, state.reducer.idxs[state.reducer.num])
  const res =  {
    fetching: state.reducer.fetching,
    dogs: state.reducer.dogs,
    error: state.reducer.error,
    idxs:  state.reducer.idxs,
  };
  console.log("Dogs mapStateT oPropsr es",res)
  return res;

};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: (idx,num) => {
        console.log("Dogs onRequestDog idx",idx, num)
        dispatch({ type: "API_CALL_REQUEST", idx ,num})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);