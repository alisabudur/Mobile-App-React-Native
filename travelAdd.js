/**
 * Created by Alisa on 12/11/2016.
 */
/**
 * Created by Alisa on 11/7/2016.
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableElement,
    Linking
} from 'react-native';

class TravelAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            startLocation: this.props.startLocation,
            endLocation: this.props.endLocation,
            newStartLocation: this.props.startLocation,
            newEndLocation: this.props.endLocation
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Start:</Text>
                <TextInput value={this.state.newStartLocation}
                           onChangeText={(text) => this.setState({newStartLocation: text})}></TextInput>
                <Text>Destination:</Text>
                <TextInput value={this.state.newEndLocation}
                           onChangeText={(text) => this.setState({newEndLocation: text})}></TextInput>
                <TouchableHighlight
                    onPress={() => {
                        this.onAddPressed()
                    }}>
                    <View>
                        <Text style={styles.button}>Add</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    onAddPressed() {
        this.props.onAdd(this.getData());
        this.props.navigator.pop();
    }

    getData = () => {
        console.log("getData " + this.state.newStartLocation + " " +
            this.state.newEndLocation
        )
        ;
        return {
            Id: this.state.id,
            StartLocation: this.state.newStartLocation,
            EndLocation: this.state.newEndLocation
        };
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 70,
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 15
    },
});

export default TravelAdd;
