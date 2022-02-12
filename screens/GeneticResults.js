import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
import GeneticScreen from './GeneticScreen';

  
export default class GeneticResults extends Component{
  
  constructor(props){
    super(props);
    this.state = {
   
    }
  }
  
render(){

  const bloodEndType1 = this.props.navigation.getParam('bloodEndType1');
    const bloodEndType2 = this.props.navigation.getParam('bloodEndType2');
    var parentsBloodTypeEnd = bloodEndType1 + ' and ' + bloodEndType2;

      const bloodType1 = this.props.navigation.getParam('bloodType1');
    const bloodType2 = this.props.navigation.getParam('bloodType2'); 
    var parentsBloodType = bloodType1 + ' and ' + bloodType2;

      const color1 = this.props.navigation.getParam('color1');
    const color2 = this.props.navigation.getParam('color2');
    var colorType = color1 + ' and ' + color2;

 const parentHair1 = this.props.navigation.getParam('parentHair1');
    const parentHair2 = this.props.navigation.getParam('parentHair2');
    var parentHair = parentHair1 + ' and ' + parentHair2;
    
 const parentEar1 = this.props.navigation.getParam('parentEar1');
    const parentEar2 = this.props.navigation.getParam('parentEar2');
    var parentEar = parentEar1 + ' and ' + parentEar2;

    var childBloodEnd = '';
    var childBlood = '';
    var childEyeColor = '';
    var childHairColor = '';
    var childEar = '';

switch(parentsBloodType){
case 'A and A':{
childBlood = 'A, O'
}
break;
case 'A and B':{
childBlood = 'A,B,AB,O'
}
break;
case 'B and A':{
childBlood = 'A,B,AB,O'
}
break;
case 'A and AB':{
childBlood = 'A,B,AB'
}
break;
case 'AB and A':{
childBlood = 'A,B,AB'
}
break;
case 'A and O':{
childBlood = 'A,O'
}
break;
case 'O and A':{
childBlood = 'A,O'
}
break;
case 'B and B':{
childBlood = 'B,O'
}
break;
case 'B and AB':{
childBlood = 'A,B,AB'
}
break;
case 'AB and B':{
childBlood = 'A,B,AB'
}
break;
case 'B and O':{
childBlood = 'B,O'
}
break;
case 'O and B':{
childBlood = 'B,O'
}
break;
case 'AB and AB':{
childBlood = 'A,B,AB'
}
break;
case 'AB and O':{
childBlood = 'A,B'
}
break;
case 'O and AB':{
childBlood = 'A,B'
}
break;
case 'O and O':{
childBlood = 'O'
}
break;
  default: {
    childBlood = 'No Data Entered'

  }
}
switch (parentsBloodTypeEnd) {

  case '+ and +':{
childBloodEnd = '+ (75%), but it is possible that it would be - (25%)'
  }
  break;
 case '+ and -':{
childBloodEnd = '+ (75%), but it is possible that it would be - (25%)'
  }
  break;
   case '- and +':{
childBloodEnd = '+ (75%), but it is possible that it would be - (25%)'
  }
  break;
   case '- and -':{
childBloodEnd = '-'
  }
  break;
  default: {
    childBloodEnd = 'No Data Entered'

  }
    break;
}


switch(colorType){
case 'Brown and Brown':{
childEyeColor = 'chanceBrown = 75 chanceGreen = 18.8 chanceBlue = 6.3 '
}
break;
case 'Brown and Blue':{
childEyeColor = 'chanceBrown = 50 chanceBlue = 50 chanceGreen = 0'
}
break;
case 'Brown and Green':{
childEyeColor = 'chanceBrown = 50 chanceGreen =  37.5 chanceBlue = 12.5 '
}
break;
case 'Blue and Blue':{
childEyeColor = 'chanceBlue = 99 chanceGreen = 1 chanceBrown = 0'
}
break;
case 'Blue and Brown':{
childEyeColor = 'chanceBrown = 50 chanceBlue = 50 chanceGreen = 0'
}
break;
case 'Green and Green':{
childEyeColor = 'chanceBrown = 75 chanceBlue = 25 chanceGreen = 0'
}
break;
case 'Green and Blue':{
childEyeColor = ' chanceBlue = 50 chanceGreen = 50 chanceBrown = 0'
}
break;
case 'Green and Brown':{
childEyeColor = 'chanceBrown = 50 chanceGreen =  37.5 chanceBlue = 12.5 '
}
break;
  default: {
    childEyeColor = 'No Data Entered'

  }
}

switch(parentHair){
case 'Black and Black':{
childHairColor = 'Black'
}
break;
case 'Black and Brown' :
case 'Brown and Black' :{
childHairColor = '50% Black, 50% Brown'
}
break;
case 'Black and Red':
case 'Red and Black':{
childHairColor = 'Brown'
}
break;
case 'Black and Strawberry Blond':
case 'Strawberry Blond and Black':{
childHairColor = 'Brown'
}
break;
case 'Black and Blond':
case 'Blond and Black':{
childHairColor = 'Brown'
}
break;
case 'Brown and Brown':{
childHairColor = '50% Brown, 25% Black, 12% Blond, 11% Strawberry Blond, 3% Red'
}
break;
case 'Brown and Red':
case 'Red and Brown':{
childHairColor = '50% Brown, 34% Strawberry Blond, 16% Red'
}
break;
case 'Brown and Strawberry Blond':
case 'Strawberry Blond and Brown':{
childHairColor = '50% Brown, 25% Strawberry Blond, 17% Blond, 8% Red'
}
break;
case 'Brown and Blond':
case 'Blond and Brown':{
childHairColor = '50% Brown, 34% Blond, 16% Strawberry Blond'
}
break;
case 'Red and Red':{
childHairColor = 'Red'
}
break;
case 'Red and Strawberry Blond':
case 'Strawberry Blond and Red':{
childHairColor = '50% Red, 50% Strawberry Blond'
}
break;
case 'Red and Blond':
case 'Blond and Red':{
childHairColor = 'Strawberry Blond'
}
break;
case 'Strawberry Blond and Strawberry Blond':{
childHairColor = '50% Strawberry Blond, 25% Red, 25% Blond'
}
break;
case 'Strawberry Blond and Blond':
case ' Blond and Strawberry Blond':{
childHairColor = '50% Strawberry Blond, 50% Blond'
}
break;
case 'Blond and Blond':{
childHairColor = 'Blond'
}
break;
  default: {
    childHairColor = 'No Data Entered'

  }
}

switch(parentEar){
case 'Attached and Attached':{
childEar = 'Attached'
}
break;
case 'Attached and Detached' :{
childEar = '67% Detached, 33% Attached'
}
break;
case 'Detached and Attached' :{
childEar = '67% Detached, 33% Attached'
}
break;
case 'Detached and Detached' :{
childEar = '89% Detached, 11% Attached'
}
break;
  default: {
    childEar = 'No Data Entered'

  }
}

console.log(parentsBloodType)
console.log(parentsBloodTypeEnd)
console.log(colorType)
console.log(parentHair)
console.log(childBlood)
console.log(childBloodEnd)
console.log(childEyeColor)
console.log(childHairColor)
console.log(childEar)

  return(

    
    <View>
    <Header 
     centerComponent = {{
       text: 'DiscoverDNA',
     }}
    />     
            <TextAnimationFadeIn value={"If the two parent blood types are " + parentsBloodType + " then the childs blood type will most likely be one of these:" + childBlood } delay={10} duration={200} style={{color: 'black', fontSize:20}} />
<Text> </Text>
            <TextAnimationFadeIn value={"If the two parent blood types are " + parentsBloodTypeEnd + " then the childs blood type will most likely be one of these:" + childBloodEnd } delay={15} duration={200} style={{color: 'black', fontSize:20}} />
            <Text> </Text>
             <TextAnimationFadeIn value={"If the two parent eye types are " + colorType + " then the childs eye color will most likely be one of these:" + childEyeColor } delay={20} duration={200} style={{color: 'black', fontSize:20}} />
             <Text> </Text>
  <TextAnimationFadeIn value={"If the two parent hair colors are " + parentHair + " then the childs hair color will most likely be one of these:" + childHairColor } delay={25} duration={200} style={{color: 'black', fontSize:20}} />
  <Text> </Text>
             <TextAnimationFadeIn value={"If the two parent earlobe types are " + parentEar + " then the childs earlobe type will most likely be one of these:" + childEar } delay={30} duration={200} style={{color: 'black', fontSize:20}} />


     <Image source = {require('../assets/dna.png')} style ={{height:270,width:180,position:'absolute',top:550,left:90}}/>
     <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('GeneticScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/back.png')} style = {{backgroundColor: 'white', width:80, height:80}}/>
</TouchableOpacity>
     </View>
  )
}
}