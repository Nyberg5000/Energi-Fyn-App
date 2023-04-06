import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';

import TodayDate from './components/TodayDate';
import AssignmentItem from './components/AssignmentItem';

const Stack = createNativeStackNavigator();

const HomeScreen =({navigation})=> {
  return(
    <Button title='Gå til opgave'
    onPress={()=>
      navigation.navigate('Assignment', {name: 'assignment'}) 
    } >
    </Button>
  )
}

const AssignmentScreen=({navigation, route})=>{
  return <Text>Dette er {route.params.name} skærm </Text>
}

export default function App() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Assignment' component={AssignmentScreen}/> 
    <View style={styles.appContainer} >
     <View  >
        <Text style={styles.title} >
          Dagens opgaver
        </Text>
     </View>
      
      <View/>
      <View>
        <Text style={styles.dateContainer} >
          <TodayDate/>
        </Text>
      </View>
      <View style={styles.AssignmentContainer} >
        <Text >
          <AssignmentItem/> 
          <AssignmentItem/> 
          <AssignmentItem/> 
        </Text>
      </View>
      <View>
        
      </View>
    </View>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

 const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 30,
    backgroundColor: '#E1F8EC',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 1
  },
  dateContainer: {
    borderBottomWidth: 1,
    marginBottom: 10,
    
  },
  AssignmentContainer: {
    
  }
  
 
}); 
