import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
//In order to go up from one library you add a dot
//The import * as variable is for importing everything from a file and then assigning it

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        console.log(this.props);
        return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={titleStyle}>{title}</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        marginLeft: 15
    }
};
export default connect(null, actions)(ListItem);
