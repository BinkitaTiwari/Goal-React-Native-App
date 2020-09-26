import React, { Component } from 'react';
import {StyleSheet,View, TextInput,Button, Modal} from 'react-native';

class GoalInput extends Component {
    state={
        goal: ' '
    }

    inputHandler=(enteredText)=>{
        this.setState({goal:enteredText})
      } 

      addGoalhandler=()=>{
          this.props.addGoals(this.state.goal);
          this.setState({goal: ' '})
      }

    render() {

        return(
         <Modal visible={this.props.visible} animationType="slide">
             <View style={styles.container1}>
            <TextInput 
            placeholder="Enter your goals" 
            style={styles.input}
            //onChangeText={(text)=> {this.setState({goal:text})}}
            onChangeText={this.inputHandler}
            value={this.state.goal}/>
            

            <View style={styles.button} >
                <View style={styles.button1}>
                    <Button title="CANCEl" color="red" onPress={this.props.cancelGoals}/>
     
                </View>
                <View style={styles.button1}>
                    <Button title="ADD" onPress={this.addGoalhandler}/>
                </View>
                   
            </View>
            
            
            </View>
         </Modal>
            
            
            
    
        )
    }
    
}
const styles= StyleSheet.create({
    container1:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
      },
      input:{
        width: 250, 
        borderWidth: 2, 
        borderColor: 'black',
        padding: 10,
        marginBottom: 20
        
      },
      button:{
          flexDirection: "row",
          justifyContent: 'space-between',
          width: 250
      },
      button1:{
          width: 100
      }
})

export default GoalInput;