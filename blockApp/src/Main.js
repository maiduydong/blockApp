import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ImageBackground
} from 'react-native';
//import Hinh from '../res/QC3.jpg'
const { height, width } = Dimensions.get('window');
import { green } from 'ansi-colors';
const IMG = { BOOK: require('../res/QC_3.jpg') };

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>


                   
                        <ImageBackground source = {IMG.BOOK} style={styles.img}>
                            <View style= {styles.icon}>
                                <Text style = {styles.text}>LIFESTYLE</Text>
                            </View> 
                        </ImageBackground>
                    


                    <View style={styles.note}>
                    </View>

                </View>

            </View>



        )

    }

}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    content: {
        
        width: width - 40,
        height: height * 2 / 3,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    img: {

        flexDirection: 'row',
        borderTopLeftRadius: 10,
        backgroundColor: 'red',
        width: width - 50,
        height: height * 0.4

    },
    note: {

        backgroundColor: 'yellow',
        width: width - 50,
        height: (height * 2 / 3) - (height * 0.40)

    },
    icon:{
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#F9A825',
        marginTop: 10,
        marginLeft: 5,
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        color:'white',
        
    }
})
