/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  
  const [courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText){
    // console.warn('It Pressed');
      // console.warn(enteredGoalText);
      setCourseGoals( (currentCourseGoals) => [
        ...currentCourseGoals,
         { text: enteredGoalText, key: Math.random().toString() },
        ]);
  };

  return (
   <View style={styles.appContainer}>
    
    <GoalInput onAddGoal={addGoalHandler} />

    <View style={styles.goalsContainer}>
      <FlatList 
       data = {courseGoals}
       renderItem = {(itemData) => {
          return (
              <GoalItem text = {itemData.item.text} />              
          );
       }}
      />
         
      
   </View>

   </View>
  );
}

const styles = StyleSheet.create({
   appContainer: {
     flex: 1,
     paddingTop: 50,
    paddingHorizontal: 16,
   },

   goalsContainer: {
     flex: 5,
   },

});

export default App;
