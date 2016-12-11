/**
 * Created by Alisa on 12/11/2016.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Chart from 'react-native-chart';
import {Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height / 4,
        width: width,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: width - 50,
        height: height - 50,
    },
});
const pieData = [
    [0, 5],
    [1, 2],
];
const pieColors = ["white", "yellow", "blue"]

export class SimpleChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    componentDidMount() {
        console.log("componentDidMountChart");
        this.setState({data: this.props.getData("Medias")})
    }

    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={this.state.data}
                    type="bar"
                    showDataPoint={true}
                    showGrid={false}
                />
            </View>
        );
    }
}
