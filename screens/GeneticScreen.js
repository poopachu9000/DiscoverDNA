import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform,StatusBar} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import {Header} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
export default class GeneticScreen extends Component{
  constructor(props){
    super();
    
    this.state = {
    dropDownHeight: 40,
    dropDownHeight2: 40,
    dropDownHeight3: 40,
    dropDownHeight4: 40,
    dropDownHeight5: 40,
    dropDownHeight6: 40,
    dropDownHeight7: 40,
    dropDownHeight8: 40,
      dropDownHeight9: 40,
    dropDownHeight10: 40,
      bloodType1: 'N/A',
      bloodType2: '',
      bloodEndType1: '',
      bloodEndType2: '',
      color1: '',
      color2: '',
      parentHair1: '',
      parentHair2: '',
      parentEar1: '',
      parentEar2: '',
    }
  }
  goToGeneticResults=(bloodType1,bloodType2,bloodEndType1,bloodEndType2,color1,color2, parentHair1, parentHair2,parentEar1,parentEar2)=> {
      this.props.navigation.navigate('GeneticResults',{bloodType1:bloodType1},)
      this.props.navigation.navigate('GeneticResults',{bloodType2:bloodType2},)
        this.props.navigation.navigate('GeneticResults',{bloodEndType1:bloodEndType1},)
      this.props.navigation.navigate('GeneticResults',{bloodEndType2:bloodEndType2},)
        this.props.navigation.navigate('GeneticResults',{color1:color1},)
      this.props.navigation.navigate('GeneticResults',{color2:color2},)
         this.props.navigation.navigate('GeneticResults',{parentHair1:parentHair1},)
      this.props.navigation.navigate('GeneticResults',{parentHair2:parentHair2},)
          this.props.navigation.navigate('GeneticResults',{parentEar1:parentEar1},)
      this.props.navigation.navigate('GeneticResults',{parentEar2:parentEar2},)
    }
render(){
  return(

    <View>
    <Header 
     centerComponent = {{
       text: 'DiscoverDNA',
     }}
    />

    <Text>Mothers Blood Type </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight: 190
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight:40
  })}} 

items = {[
  { label:'A', value:'A' },
  { label:'B', value:'B' },
    { label:'AB', value:'AB' },
  { label:'O', value:'O' },
]} 
onChangeItem = {item => 
this.setState( {bloodType1:item.value})
}
/>
</View>
</SafeAreaView>
</ScrollView>

                <Ionicons name={"heart"} style = {{ position:'absolute',left:200, top:100,fontSize:40
}}/>
    <Ionicons name={"woman"} style = {{ position:'absolute',left:250, top:100,fontSize:40
}}/>


    <Text>Mothers End Blood Type</Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight2),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight2: 120
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight2:40
  })}} 

items = {[
  { label:'+', value:'+' },
  { label:'-', value:'-' },

]} 
onChangeItem = {item => 
this.setState( {bloodEndType1:item.value})
}
/>
</View>
</SafeAreaView>
</ScrollView>
                <Ionicons name={"add-circle-outline"} style = {{ position:'absolute',left:200, top:160,fontSize:40
}}/>
    <Ionicons name={"swap-horizontal-outline"} style = {{ position:'absolute',left:229, top:160,fontSize:40
}}/>
   <Ionicons name={"remove-circle-outline"} style = {{ position:'absolute',left:260, top:160,fontSize:40
}}/>


    <Text>Fathers Blood Type </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight3),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight3: 190
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight3:40
  })}} 

items = {[
  { label:'A', value:'A' },
  { label:'B', value:'B' },
    { label:'AB', value:'AB' },
  { label:'O', value:'O' },
]} 
onChangeItem = {item => 
this.setState( {bloodType2:item.value})
}
/>
</View>
</SafeAreaView>
</ScrollView>

              <Ionicons name={"heart"} style = {{ position:'absolute',left:200, top:220,fontSize:40
}}/>
    <Ionicons name={"man"} style = {{ position:'absolute',left:250, top:220,fontSize:40
}}/>

    <Text>Fathers End Blood Type </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight4),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight4: 120
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight4:40
  })}} 

items = {[
  { label:'+', value:'+' },
  { label:'-', value:'-' },

]} 
onChangeItem = {item => 
this.setState( {bloodEndType2:item.value})
}
/>
</View>
</SafeAreaView>
</ScrollView>

    <Ionicons name={"add-circle-outline"} style = {{ position:'absolute',left:200, top:280,fontSize:40
}}/>
    <Ionicons name={"swap-horizontal-outline"} style = {{ position:'absolute',left:229, top:280,fontSize:40
}}/>
   <Ionicons name={"remove-circle-outline"} style = {{ position:'absolute',left:260, top:280,fontSize:40
}}/>

    <Text>Mothers Eye Color </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight5),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight5: 150
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight5:40
  })}} 

items = {[
  { label:'Brown', value:'Brown' },
  { label:'Blue', value:'Blue' },
  { label:'Green', value:'Green' },
]} 
onChangeItem = {item => 
this.setState( {color1:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>

    <Ionicons name={"eye-outline"} style = {{ position:'absolute',left:200, top:390,fontSize:40
}}/>
   <Ionicons name={"man"} style = {{ position:'absolute',left:250, top:390,fontSize:40
}}/> 
    <Text>Fathers Eye Color </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight6),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight6: 150
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight6:40
  })}} 

items = {[
  { label:'Brown', value:'Brown' },
  { label:'Blue', value:'Blue' },
  { label:'Green', value:'Green' },
]} 
onChangeItem = {item => 
this.setState( {color2:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>

    <Ionicons name={"eye-outline"} style = {{ position:'absolute',left:200, top:330,fontSize:40
}}/>
   <Ionicons name={"woman"} style = {{ position:'absolute',left:250, top:330,fontSize:40
}}/>

    <Text>Mothers Hair Color </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight7),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight7: 190
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight7:40
  })}} 

items = {[
    { label:'Black', value:'Black' },
  { label:'Brown', value:'Brown' },
  { label:'Red', value:'Red' },
    { label:'Strawberry Blond', value:'Strawberry Blond' },
  { label:'Blond', value:'Blond' },
]} 
onChangeItem = {item => 
this.setState( {parentHair1:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>

    <Ionicons name={"person-outline"} style = {{ position:'absolute',left:200, top:450,fontSize:40
}}/>
   <Ionicons name={"woman"} style = {{ position:'absolute',left:250, top:450,fontSize:40
}}/> 
    <Text>Fathers Hair Color </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight8),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight8: 190
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight8:40
  })}} 

items = {[
    { label:'Black', value:'Black' },
  { label:'Brown', value:'Brown' },
  { label:'Red', value:'Red' },
    { label:'Strawberry Blond', value:'Strawberry Blond' },
  { label:'Blond', value:'Blond' },
]} 
onChangeItem = {item => 
this.setState( {parentHair2:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>

    <Ionicons name={"person-outline"} style = {{ position:'absolute',left:200, top:510,fontSize:40
}}/>
   <Ionicons name={"man"} style = {{ position:'absolute',left:250, top:510,fontSize:40
}}/> 

    <Text>Mothers Earlobe</Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight9),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight9: 120
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight9:40
  })}} 

items = {[
    { label:'Attached', value:'Attached' },
  { label:'Detached', value:'Detached' },
 
]} 
onChangeItem = {item => 
this.setState( {parentEar1:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>

    <Ionicons name={"ear-outline"} style = {{ position:'absolute',left:200, top:565,fontSize:40
}}/>
   <Ionicons name={"woman"} style = {{ position:'absolute',left:250, top:565,fontSize:40
}}/>

    <Text>Fathers Earlobe </Text>

        <ScrollView>
    <SafeAreaView>
               <View style = {{height:(this.state.dropDownHeight10),width:150}}>
<DropDownPicker 

containerStyle = {{height:40,borderRadius:20,marginBottom:10}}
onOpen = {()=>{
  this.setState({
    dropDownHeight10: 120
  })
}}
onClose = {()=>{
  this.setState({
    dropDownHeight10:40
  })}} 

items = {[
    { label:'Attached', value:'Attached' },
  { label:'Detached', value:'Detached' },
 
]} 
onChangeItem = {item => 
this.setState( {parentEar2:item.value})
}
/>
</View>   
</SafeAreaView>
</ScrollView>
    <Ionicons name={"ear-outline"} style = {{ position:'absolute',left:200, top:620,fontSize:40
}}/>
   <Ionicons name={"man"} style = {{ position:'absolute',left:250, top:620,fontSize:40
}}/>
   <TouchableOpacity 
            style={{backgroundColor:"black",height:50}} 
            onPress={()=>this.goToGeneticResults(this.state.bloodType1, this.state.bloodType2, this.state.bloodEndType1, this.state.bloodEndType2,this.state.color1, this.state.color2,this.state.parentHair1, this.state.parentHair2, this.state.parentEar1, this.state.parentEar2, )}>
            <Text style = {{fontSize:50,marginLeft:107,marginTop:-6,color:"white"}}>Submit</Text>
          </TouchableOpacity>
    
     </View>
  )
}
}