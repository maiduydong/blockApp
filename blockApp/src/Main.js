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
import Data from './Data';
const { height, width } = Dimensions.get('window');
import { green } from 'ansi-colors';
import Topic from './Data';
const IMG = { BOOK: require('../res/QC_3.jpg') };

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>



                    <ImageBackground source={IMG.BOOK} style={styles.img}>
                        <View style={styles.img}>
                            <View style={styles.nhandan}>
                                <Text style={styles.textnhandan}>LIFESTYLE</Text>
                            </View>
                            <View style={styles.authorinimage}>
                                <Image source={Topic.avatar} />
                                <View>
                                <Text style={styles.textAuthor}>{Topic.author}</Text>
                                <Text style={styles.textDate}>{Topic.date}</Text>
                                </View>
                                

                            </View>
                        </View>



                    </ImageBackground>



                    <View style={styles.note}>
                        <View style={styles.titleCon}>
                            <Text style={styles.title}> {Topic.title}</Text>
                        </View>
                        <View style={styles.dersiptionCon}>
                            <Text style={styles.dersiption}>{Topic.decription}</Text>
                        </View>
                        <View style={styles.bottom}>
                            <View style = {styles.bottomLeft}>
                                <Image  style ={{marginTop: 1,height: 50, width: 50, resizeMode:'contain'}} source= {require('../res/like.png')}></Image>
                                <Image style ={{marginTop: 1,height: 50, width: 50,resizeMode:'center'}} source={require('../res/comments.png')}></Image>
                            </View>
                            <View style ={{width: width - 220}}/>
                            <View style ={styles.bottomRight}>
                                <Image style ={styles.bottomRightImage} source= {require('../res/DiNang.png')}/>
                                <Text style={{paddingLeft: 1, color:'#828282', fontSize:20 }}>{`+`+Topic.sumVisit}</Text>
                            

                            </View>
                        </View>
                    </View>

                </View>

            </View>



        )

    }

}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    content: {

        width: width - 40,
        height: height * 3 / 4,
        flexDirection:'column',
        backgroundColor: '#E5E5E5',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    img: {

        flexDirection: 'column',
        borderTopLeftRadius: 10,
        justifyContent: 'space-between',

        width: width - 50,
        height: height * 0.4

    },
    nhandan: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#F9A825',
        marginTop: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textnhandan: {
        color: 'white',
        fontSize: 15
    },
    authorinimage: {
        paddingBottom: 4,
        flexDirection: 'row',
        paddingLeft: 5
    },
    textAuthor:{
        color:'#FFFFFF',
        fontSize: 15,
        fontWeight:'bold',
        paddingLeft: 5,
    },
    textDate:{
        color:'#FFFFFF',
        fontSize: 12,
        paddingLeft: 5,
    },
    note: {


        width: width - 100,
        height: (height * 3 / 4) - (height * 0.4),
        flexDirection:'column',
       

    },
    icon: {
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#F9A825',
        marginTop: 10,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginTop: 10

    },
    titleCon: {
        width: width - 45,
        height: 70,

    },
    dersiptionCon: {
        width: width - 50,
        height: 100,

    },
    title: {
        fontSize: 20,
        paddingTop: 30,
        fontWeight: 'bold',
    },
    dersiption: {
        fontSize: 15,
        opacity: 0.7,
    },
    bottom:{
        flexDirection:'row',
        backgroundColor: '#E5E5E5',
        //width: width - 50,
        height: 100,
        justifyContent: 'space-between',
       
    },
    bottomLeft:{
        flexDirection:'row',
        justifyContent:'flex-start',
       
    },
    bottomRight:{
        flexDirection:'row',
        paddingRight: 10,
        marginTop: 10,
        justifyContent:'space-between'
    },
    bottomRightImage:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginRight: 10,
    }



})
