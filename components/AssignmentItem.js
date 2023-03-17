// her hentes opgaver ind fra database evt.. Disse vises i en liste - skal importeres til app.js
//i app.js bruges pressable til at trykke på enkelte opgaver som vises i en liste - en flatlist
import { StyleSheet, View, Button } from "react-native";
function AssignmentItem(){
return(
    <View style= {styles.listObject}>
    <Button color='#01553D'  onPress={()=> Alert.alert ('Åbner nyt vindue')} title='Tjek af elstander 1234'></Button>
    <Button color='#01553D' title='Reparation på elstander 3456'></Button>
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