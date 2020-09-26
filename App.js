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
  FlatList
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
  
    courseGoal: [ ]
  }

  

 goalAddHandler=(goalTitle)=>{
   //console.log(this.state.goal);
   this.setState({courseGoal:[...this.state.courseGoal,
    {id: Math.random().toString(), value: goalTitle}]})
 }

 goalRemoveHandler=(goalId)=>{
  this.setState({courseGoal: [...this.state.courseGoal.filter(goal => goal.id !== goalId)]})
 }
  render() {
    
    return (
      <View style={styles.screen}> 
        <GoalInput addGoals={this.goalAddHandler}/>
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


