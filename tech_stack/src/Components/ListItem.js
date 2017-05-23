import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
//In order to go up from one library you add a dot
//The import * as variable is for importing everything from a file and then assigning it

class ListItem extends Component {
    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        if (library.id === selectedLibraryId) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={titleStyle}>{title}</Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

const styles = {
    titleStyle: {
        fontSize: 18,
        marginLeft: 15
    }
};
export default connect(mapStateToProps, actions)(ListItem);
