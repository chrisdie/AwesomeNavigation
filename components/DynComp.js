import React, { Component } from 'react';
import {
View,
Text,
StyleSheet,    
TextInput,
TouchableOpacity,
TouchableHighlight
} from 'react-native';    

export default class DynComp extends Component {

  constructor(props) {
    super(props);
    let ele1 = (
      <View key={1}>
        <Text>Element {1}</Text>
        <TouchableOpacity onPress={ () => this._add()  }>
         <Text>Add</Text>
        </TouchableOpacity>
      </View>
     );

    this.state = {
      ele: [],
      key: 1
    }

    this.state.ele.push(ele1);

   }

  _add(){

    let key = this.state.key + 1;

    let ele2 = (
      <View key={key}>
        <Text>Element {key}</Text>
        <TouchableOpacity onPress={ () => this._add()  }>
         <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );

    let ele = this.state.ele;
    ele.push(ele2);
    this.setState({ ele: ele,key : key})

  }
  render() {

    return (
      <View style={styles.container}>
       <Text>This text should be before</Text>
        { this.state.ele }
       <Text>This text should be after</Text>
       <TouchableHighlight onPressOut={ () => this._add()  }>
          <Text>Tap Me</Text>
        </TouchableHighlight>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    }
})