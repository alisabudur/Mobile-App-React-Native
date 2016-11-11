/**
 * Created by Alisa on 11/10/2016.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    LeftButton,
    RightButton,
    ListView,
    TextInput,
    Linking

} from 'react-native';

class SendEmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            startLocation: '',
            endLocation: '',
        }

    }

    onSendPress() {
        Linking.openURL('mailto:' + this.state.email + '?' +
            'subject=Travel from React-Native' +
            '&body=Salut,\n\nVoi calatori de la ' + this.state.startLocation +
            ' la ' + this.state.endLocation + '!\n\nO zi frumoasa!');
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Email:</Text>
                <TextInput onChangeText={(text) => this.setState({email: text})}></TextInput>
                <Text>Start:</Text>
                <TextInput onChangeText={(text) => this.setState({startLocation: text})}></TextInput>
                <Text>Destination:</Text>
                <TextInput onChangeText={(text) => this.setState({endLocation: text})}></TextInput>
                <TouchableHighlight
                    onPress={() => this.onSendPress()}>
                    <View>
                        <Text style={styles.button}>Send</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        paddingTop: 70,
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 15
    },
});

export default SendEmailForm;