import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import GeneticScreen from './GeneticScreen';

export default class HomeScreen extends Component{
render(){
  return(

    <View>
    <Header 
     centerComponent = {{
       text: 'DiscoverDNA',
     }}
    />       
 
    <Image source = { require('../assets/dna.png')} style = {{width:160,height:260, marginLeft:107,marginTop:50}}/>
    <Text style = {{marginLeft:70, fontSize:20, color:'blue'}}>
     Discover your childs genetics!
    </Text>
        <Text>  </Text>
       <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Blood Type
    </Text>
        <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Eye Color
    </Text>
    <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Hair Color
    </Text>
     <Text style = {{marginLeft:65, fontSize:20}}>
    -Childs Earlobe Type
    </Text>
      <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('GeneticScreen')}} style = {{backgroundColor:"black", width:200, height:50, marginLeft:90, marginTop:70}}>      
      <Text style = {{fontSize:40, marginLeft:20,color:'white'}}>Continue!</Text>
      </TouchableOpacity>
     </View>
  )
}
}