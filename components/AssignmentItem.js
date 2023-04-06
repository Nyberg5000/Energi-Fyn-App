// her hentes opgaver ind fra database evt.. Disse vises i en liste - skal importeres til app.js
//i app.js bruges pressable til at trykke på enkelte opgaver som vises i en liste - en flatlist
import { StyleSheet, View, Button } from "react-native";
function AssignmentItem(){
function showAssignmentHandler(){
    //vis opgaven med mere info i en ny screen når knap trykkes
    console.log("pressed");
}

return(
    <View style= {styles.listObject}>
    <Button onPress={showAssignmentHandler} color='#01553D' title='Tjek af elstander 1234'></Button>
    <Button color='#01553D' title='Reparation på elstander'></Button>
  </View> 
);
}
export default AssignmentItem;

const styles= StyleSheet.create({
    listObject:
  {
    //flex:4,
    
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
    
  }
});