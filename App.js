/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  state={
    goal: ' ',
    courseGoal: [ ]
  }

 inputHandler=(enteredText)=>{
   this.setState({goal:enteredText})
 } 

 goalAddHandler=()=>{
   console.log(this.state.goal);
   this.setState({courseGoal:[...this.state.courseGoal,this.state.goal]})
 }
  render() {
    
    return (
      <View style={styles.screen}> 
        <View style={styles.container1}>
        <TextInput 
        
        placeholder="Enter your goals" 
        style={styles.input}
        //onChangeText={(text)=> {this.setState({goal:text})}}
        onChangeText={this.inputHandler}
        value={this.state.goal}/>
        
        
        <Button title="ADD" onPress={this.goalAddHandler}/>
        
        </View>
        <View>
          <ScrollView>
          {this.state.courseGoal.map((Goal)=>{
            return(
              <View style={styles.listItem}>
              <Text>{Goal}</Text>
              </View>

            )
          
          })}
          </ScrollView>
          
        </View>

     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen:{
    padding: 30
    
  },
  container1:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
  },
  input:{
    width: 250, 
    borderWidth: 2, 
    borderColor: 'black',
    padding: 10
  },
  listItem:{
    padding: 10,
    marginVertical: 20,
    backgroundColor:'#ccc',
    borderColor: 'black',
    borderBottomWidth: 2,
    justifyContent: 'center'
  }
});


