import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
//In order to go up from one library you add a dot
//The import * as variable is for importing everything from a file and then assigning it

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log(this.props);
        return (
        <CardSection>
            <Text style={titleStyle}>{this.props.library.title}</Text>
        </CardSection>
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
