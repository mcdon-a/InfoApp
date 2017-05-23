import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: libraryReducer
});

//console.log(store.getState());
// {libraries: [] }
