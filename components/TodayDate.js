import { StyleSheet, View, Text } from "react-native";


function TodayDate(){
  const date=new Date();
  
  
    const modifiedDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    return(
        <View >
        <Text style={styles.dateStyle} >Dags dato: {modifiedDate}</Text> 
        </View>
    );
  
    
}

export default TodayDate;

const styles =StyleSheet.create({
 
    dateStyle:  {
       fontWeight: "bold",
       fontSize: 17,
       
       
        //marginTop: 10,
        //marginLeft:10,
        //marginRight:10,
    
      },

})