import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const GoalItem=(props)=>{
    return(
        <View style={styles.listItem}>
              <Text>{props.Goal}</Text>
              </View>
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