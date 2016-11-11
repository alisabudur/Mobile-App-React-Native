/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
    ListView

} from 'react-native';

import TravelList from './travelList.js';
import TravelDetails from  './travelDetails.js';
import Main from './main.js';
import SendEmailForm from './sendEmailForm'

const routes = [
    {
        title: 'Main',
        index: 0
    }, {
        title: 'Travel list',
        index: 1
    },
    {
        title: 'Travel details',
        index: 2
    },
    {
        title: 'Prepare email',
        index: 3
    }
]

function compare(a, b) {
    if (a.Id < b.Id)
        return -1;
    if (a.Id > b.Id)
        return 1;
    return 0;
}

export default class TravelApp extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            travels: [
                {
                    Id: 0,
                    StartLocation: 'Cluj',
                    EndLocation: 'Oradea',
                },
                {
                    Id: 1,
                    StartLocation: 'Cluj',
                    EndLocation: 'Medias',
                },
                {
                    Id: 2,
                    StartLocation: 'Constanta',
                    EndLocation: 'Oradea',
                },

                {
                    Id: 3,
                    StartLocation: 'Bucuresti',
                    EndLocation: 'Medias',
                },
                {
                    Id: 4,
                    StartLocation: 'Sibiu',
                    EndLocation: 'Cluj',
                },
            ]
        };
    }

    onUpdate(travel) {
        console.log("onUpdate: " + travel.StartLocation + " " + travel.EndLocation);
        var newTravels = this.state.travels.slice();
        newTravels.splice(travel.Id, 1);
        newTravels.push(travel);
        newTravels.sort(compare);

        this.setState({travels: newTravels});
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={
                        (route, navigator) => {
                            switch (route.index) {
                                case 0:
                                    return (<Main navigator={navigator}
                                                  route={routes[route.index]} {...route.passProps}></Main>)
                                case 1:
                                    return (<TravelList navigator={navigator} travels={this.state.travels}
                                                        route={routes[route.index]} {...route.passProps}></TravelList>);
                                case 2:
                                    return (<TravelDetails navigator={navigator} onUpdate={this.onUpdate.bind(this)}
                                                           route={routes[route.index]} {...route.passProps}></TravelDetails>);
                                case 3:
                                    return (<SendEmailForm navigator={navigator}
                                                           route={routes[route.index]} {...route.passProps}></SendEmailForm>)
                            }
                        }
                    }
                    configureScene={
                        (route, routeStack) =>
                            Navigator.SceneConfigs.PushFromRight
                    }
                    navigationBar={
                        <Navigator.NavigationBar
                            routeMapper={{
                                LeftButton: (route, navigator, index, navState) => {
                                    if (route.index == 0) {
                                        return null;
                                    }
                                    return (
                                        <TouchableHighlight onPress={()=>navigator.pop()}>
                                            <Text style={styles.navigationBarText}>Back</Text>
                                        </TouchableHighlight>
                                    )
                                },
                                RightButton: (route, navigator, index, navState) => {
                                    return null;
                                },
                                Title: (route, navigator, index, navState) => {
                                    return (<Text
                                        style={[styles.navigationBarText, styles.titleText]}>{routes[route.index].title}</Text>);
                                },
                            }}
                            style={styles.navigationBar}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationBar: {
        backgroundColor: 'blue',
    },
    navigationBarText: {
        color: 'white',
        padding: 10,
        fontSize: 15
    },
    titleText: {
        fontSize: 20,
        paddingTop: 5
    }

});

AppRegistry.registerComponent('TravelApp', () => TravelApp);
