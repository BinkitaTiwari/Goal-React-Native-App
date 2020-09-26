import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity} from 'react-native';

const GoalItem=(props)=>{
    return(
        <TouchableOpacity onPress={props.Delete.bind(this, props.id)}>
            <View style={styles.listItem}>
               <Text>{props.goals}</Text>

             </View>
        </TouchableOpacity>
        
    )
}

const styles= StyleSheet.create({
    listItem:{
        padding: 10,
        marginVertical: 20,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderBottomWidth: 2,
        justifyContent: 'center'
      }
})

export default GoalItem;