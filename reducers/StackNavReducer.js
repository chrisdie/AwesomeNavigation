import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/StackNav';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const StackNavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};

export default StackNavReducer;