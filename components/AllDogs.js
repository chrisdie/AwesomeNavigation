import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class AllDogs extends Component {



  render() {
    return (
        <View style={{ alignItems: 'flex-start', justifyContent: 'space-between'}}>
        {dog ? (
            <View>
                <Text >Keep clicking for new dogrgssss</Text>
                <FastImage
                    style={{height: 100, width: 100 }}
                    source={{
                        uri: dog,
                        headers:{ Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }} />
                <Image 
                    source={{uri:dog}} 
                    style={{width:100, height:100}} />
            </View>
        ) : (
          <Text>Replace the React icon with a doddg!</Text>
        )}
        </View>

    );
  }
}
