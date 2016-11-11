/**
 * Created by Alisa on 11/7/2016.
 */
import React from 'react';
import {
    View,
    ListView,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

class TravelList extends React.Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.travels)
        };
    }

    componentWillReceiveProps(newProps) {
        console.log("WillRP");
        const dataSource = this.state.dataSource.cloneWithRows(newProps.travels);
        this.setState({dataSource});
    }

    render() {
        return (
            <ListView style={styles.container}
                      enableEmptySections={true}
                      dataSource={this.state.dataSource}
                      renderRow={(data, rowId) =>
                          <TouchableOpacity onPress={()=> this.props.navigator.push({
                              index: 2,
                              passProps: {
                                  id: data.Id,
                                  startLocation: data.StartLocation,
                                  endLocation: data.EndLocation
                              }
                          })}>
                              <View>
                                  <Text style={styles.listItem}>{data.StartLocation + " - " + data.EndLocation}</Text>
                              </View>
                          </TouchableOpacity>
                      }
                      renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
                          <View key={rowID} style={{height: 1, backgroundColor: 'lightgray'}}/>
                      }
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',

    },
    listItem: {
        padding: 10
    }
});

export default TravelList;
