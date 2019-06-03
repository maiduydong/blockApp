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


                   
                        <ImageBackground source = {IMG.BOOK} style={styles.img}>
                            <View style= {styles.icon}>
                                <Text style = {styles.text}>LIFESTYLE</Text>
                             
                                 <View style = {styles.name}>

                                     <Image  source ={Topic.avatar}/>
                                     <View style = {styles.authorName}>

                                         <Text style = {styles.authorText}>{Topic.author}</Text>
                                         <Text style = {styles.dateText}>{Topic.date}</Text>
                                     </View>

                                 </View>
                            </View> 
                            
                        </ImageBackground>
                    


                    <View style={styles.note}>
                        <View style = { styles.titleCon}> 
                            <Text style = {styles.title}> {Topic.title}</Text>
                        </View>
                        <View style = {styles.dersiptionCon}>
                            <Text style = {styles.dersiption}>{Topic.decription}</Text>
                        </View>
                        <View style = {{flexDirection:'row'}}>
                            <View style ={{flexDirection:'row',alignItems:'flex-start', justifyContent:'flex-start'}}>
                                     <Image style ={{resizeMode:'cover', marginBottom: 50,}} source ={require('../res/like.png')}/>
                                     <Image style ={{ resizeMode:'center', marginRight: 200  }}source ={require('../res/comments.png')}></Image>
                            </View>
                            <View style ={{flexDirection:'column',alignItems:'flex-start', justifyContent:'flex-start'}} >
                                    <Image  source ={Topic.avatar}/>
                                    <Image  source ={Topic.avatar}/>
                                    <Text> 117</Text>
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

        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    content: {
        
        width: width - 40,
        height: height * 3/ 4,
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

       
        width: width - 50,
        height: (height * 2 / 3) - (height * 0.40)

    },
    icon:{
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#F9A825',
        marginTop: 10,
        marginLeft: 5,
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        color:'white',
        fontSize: 15,
        marginTop:10
        
    },
    titleCon:{
        width: width -40,
        height: 70,
       
    },
    dersiptionCon:{
        width: width - 40,
        height:100,
      
    },
    title:{
        fontSize:20,
        paddingTop:30,
        fontWeight: 'bold',
    },
    dersiption:{
        fontSize: 15,
        opacity: 0.7,
    },
    name:{
        width: 200,
        height: 50,
        
        justifyContent:'flex-end',
        marginTop: 500,
        flexDirection: 'row',
        marginLeft: 20,
        
    },
    authorName:{
        flexDirection: 'row',
        width: 80,
        marginRight: 10,
    },
    authorText:{
        fontSize: 20,
        color:"white"
    },
    dateText:{
        fontSize: 15,
        color:"white"
    }
})
