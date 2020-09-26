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
  View,
  FlatList, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';


export default class App extends Component {
  state={
  
    courseGoal: [ ],
    modalVisible: false
   
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

 goalAddHandler=(goalTitle)=>{
   //console.log(this.state.goal);
   this.setState({courseGoal:[...this.state.courseGoal,
    {id: Math.random().toString(), value: goalTitle}]});

    this.setState({modalVisible: false})

    
 }

 goalRemoveHandler=(goalId)=>{
  this.setState({courseGoal: [...this.state.courseGoal.filter(goal => goal.id !== goalId)]})
 }

 cancelHandler=()=>{
  this.setState({modalVisible: false})
 }
  render() {
    
    return (
      <View style={styles.screen}> 
      <View >
      <Button title="Click to Add Goals" onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}/>
      </View>
      
        <GoalInput 
        visible={this.state.modalVisible} 
        addGoals={this.goalAddHandler}
        cancelGoals={this.cancelHandler}
        />

        <View>
          <FlatList 
          keyExtractor= {(item,index)=> item.id}
          data={this.state.courseGoal} 
          renderItem={itemData=> (
             <GoalItem 
             id={itemData.item.id} 
             Delete={this.goalRemoveHandler} 
             goals={itemData.item.value}/>

          ) }/>
         
          
        </View>

     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen:{
    padding: 30
    
  }
  
  
});


