
import {combineReducers} from 'redux';
import EmpReducer from './EmpReducer';

const RootReducer = combineReducers({
    EmpReducer : EmpReducer
});

export default RootReducer; 