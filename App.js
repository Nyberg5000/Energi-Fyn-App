import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';

import TodayDate from './components/TodayDate';
import AssignmentItem from './components/AssignmentItem';

export default function App() {
    
  return (
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
