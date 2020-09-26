import React, { Component } from 'react';
import {StyleSheet,View, TextInput,Button} from 'react-native';

class GoalInput extends Component {
    state={
        goal: ' '
    }

    inputHandler=(enteredText)=>{
        this.setState({goal:enteredText})
      } 

    render() {

        return(
            <View style={styles.container1}>
            <TextInput 
            
            placeholder="Enter your goals" 
            style={styles.input}
            //onChangeText={(text)=> {this.setState({goal:text})}}
            onChangeText={this.inputHandler}
            value={this.state.goal}/>
            
            
            <Button title="ADD" onPress={this.props.addGoals.bind(this,this.state.goal)}/>
            
            </View>
    
        )
    }
    
}
const styles= StyleSheet.create({
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
      }
})

export default GoalInput;