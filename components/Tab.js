import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';

import FastImage from 'react-native-fast-image';
import {CachedImage} from "react-native-img-cache";

export default class Tab extends Component {

    constructor() 
    {
        super()

    }


  
  

  render() {
    // let pic = {
    //     uri: this.props.image
    //   };

    //Image.prefetch(this.props.image,()=>console.log('Image is being fetched', this.props.image))
   
    let img = <Image source={{   uri: this.props.image  }} style={{width: 50, height: 50}} />
    console.log("render")

    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
    const uri = "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";
    

    return (
      <View style={{flex:1}} >
        
        {img}
       
        <CachedImage style={{ height: 50, width: 50 }} source={{   uri: this.props.image  }} />
        
        <FastImage
            style={{height: 50, width: 50 }}
            source={{
                uri: this.props.image,
                headers:{ Authorization: 'someAuthToken' },
                priority: FastImage.priority.normal,
            }}
            
        />

       
        <Text> {this.props.image} "and33  rredddde  fff  ff fee"</Text>
      </View>
    );
  }
}
