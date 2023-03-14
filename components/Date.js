import { StyleSheet, View, Text } from "react-native";

function Date(){
   const date=new Date();
   const modifiedDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    return(
        <View style={styles.date}  >
        <Text>Dags dato: {modifiedDate}</Text> 
        </View>
    );
}

export default Date;

const styles =StyleSheet.create({
    date:
      {
        //flex:1,
        borderBottomWidth:1,
        marginTop: 10,
        marginLeft:10,
        marginRight:10,a
      },

})