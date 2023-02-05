import { Text, View, StyleSheet } from "react-native";

function GoalItem(props){
   return(
    <View style={styles.goalsItem}>
          <Text style={{color:'white'}}>
              {props.text}
           </Text>
           </View>
   );   
}

const styles = StyleSheet.create({
        goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
       },
});

export default GoalItem;