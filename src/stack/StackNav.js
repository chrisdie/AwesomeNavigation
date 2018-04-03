import React from 'react';
import PropTypes from 'prop-types'

import { addNavigationHelpers, StackNavigator, HeaderBackButton  } from 'react-navigation';

import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import {
    createReduxBoundAddListener,
    // createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

import MainPage from './MainPage';
import DogScreen from '../_shared/DogScreen';



export const AppNavigator = StackNavigator({
    Main: { screen: MainPage },
    Dogs1: {    screen: DogScreen, 
                navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
                title: 'Dogs1',
                headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
         })},    
    Dogs2: { screen: DogScreen}  ,
    Dogs3: { screen: DogScreen}  ,
    Dogs4: { screen: DogScreen}  ,
    Dogs5: { screen: DogScreen}  ,
    Dogs6: { screen: DogScreen}  
}, {
    initialRouteName: 'Main',
    mode: 'modal'
});
  
class AppWithNavigationState extends React.Component {

    constructor(){
        super();
        this._addListener = createReduxBoundAddListener("root");
    }

    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired,
    }
  
    render() {
      const navigation = addNavigationHelpers({ 
            dispatch: this.props.dispatch, 
            state: this.props.nav,
            addListener: this._addListener })
      return <AppNavigator navigation={navigation} />
    }
  }

const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);