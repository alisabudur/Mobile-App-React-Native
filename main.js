/**
 * Created by Alisa on 11/10/2016.
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

class Main extends Component {
    constructor(props) {
        super(props);
    }

    onGoToListPressed() {
        this.props.navigator.push({
            index: 1,
        })
    }

    onSendEmailPressed() {
        this.props.navigator.push({
            index: 3,
        })
    }

    // onShowChart() {
    //     this.props.navigator.push({
    //         index: 5,
    //     })
    // }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.onGoToListPressed()}
                >
                    <View>
                        <Text style={styles.button}>Go to travel list</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.onSendEmailPressed()}
                >
                    <View>
                        <Text style={styles.button}>Send email</Text>
                    </View>
                </TouchableHighlight>

                {/*<TouchableHighlight*/}
                    {/*onPress={() => this.onShowChart()}*/}
                {/*>*/}
                    {/*<View>*/}
                        {/*<Text style={styles.button}>Show chart</Text>*/}
                    {/*</View>*/}
                {/*</TouchableHighlight>*/}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 80
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 15,
        margin: 7
    },
});

export default Main;