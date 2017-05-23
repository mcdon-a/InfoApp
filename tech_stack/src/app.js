import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './Components/common/Header';


const App = () => {
    return (
        //The provider can only have one child component
        <Provider store={createStore(reducers)}>
            <View>
            <Header headerText="Tech Stack" />
            </View>
        </Provider>
    );
};

export default App;
