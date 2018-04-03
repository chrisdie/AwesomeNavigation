import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import StackNav from './StackNav';

import configureStore from '../store/configureStore';


  
// const AppWithNavigationState = ({ dispatch, nav }) => (
//     <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// );


export default class AppStack extends React.Component {

    constructor()
    {
        super();
        this.state = {
            fetching: true,
            store: configureStore(() => 
             {
                this.setState({fetching: false, dogs: {}, idxs: {} })
             }),
        };
        
    }

    render(){

        if (this.state.fetching) {
            return null;
        }

        const navigation = addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })
    
        return(
            <Provider store={this.state.store}>
                <StackNav  />
            </Provider>
        )
    }
}
const mapStateToProps = state => ({
    nav: state.nav,
});
  
