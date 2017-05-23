import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem'

class LibraryList extends Component {
    componentWillMount() {
        //The following is boilerplate. Copy it from code to code
       const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
       });
       this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow() {

    }

    render() {
        console.log(this.props);
        return (
            <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
