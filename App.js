import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import TodayDate from './components/TodayDate';

export default function App() {
    





  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text>Dagens opgaver</Text>
        <Text>
          <TodayDate/>
       </Text>
        

      </View>
      <View style= {styles.listObject}>
        <Button color='#01553D'  onPress={()=> Alert.alert ('Åbner nyt vindue')} title='Tjek af elstander 1234'></Button>
        <Button color='#01553D' title='Reparation på elstander 3456'></Button>
      </View>  
        
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#E1F8EC',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    //marginLeft:10,
    //marginRight:5,
    marginTop: 30,
    paddingTop:10,
  },
  header:
  {
//skal være i midten
    //flex:1,
  },
    listObject:
  {
    flex:4,
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
    
  }
  

});
