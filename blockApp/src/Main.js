import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { green } from 'ansi-colors';


export default class Main extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <View style ={styles.content}>
                    <Text>kkk</Text>
                </View>

            </View>


        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#E5E5E5',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
    },
    content:{
        
        width:width -40,
        height:height*2/3,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    img:{

    },
    note:{

    }
})
