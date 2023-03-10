import {Text,View,StyleSheet,TextInput,Button} from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        // console.warn(enteredText);
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return(
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter Your Goal' 
          style={styles.inputText} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
          <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
     },
     inputText: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
     },
});

export default GoalInput;