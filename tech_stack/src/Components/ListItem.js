import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { titleSyle } = styles;
        return (
        <CardSection>
            <Text style={titleSyle}>{this.props.library.title}</Text>
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
export default ListItem;
