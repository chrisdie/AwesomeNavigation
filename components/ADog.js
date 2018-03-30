import React, { Component } from 'react';
import {  View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

export default class ADog extends Component {



  render() {

    const { dog } = this.props;
    

    return (
        <View style={{ alignItems: 'flex-start', justifyContent: 'space-between'}}>
        {dog ? (
            <View>
                <Text >Keep clicking for new dogrgssss</Text>
                <FastImage
                    style={{height: 101, width: 100 }}
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
