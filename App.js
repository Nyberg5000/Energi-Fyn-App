import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import TodayDate from './components/TodayDate';
import AssignmentItem from './components/AssignmentItem';

export default function App() {
    





  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text>
          Dagens opgaver
        </Text>
        <Text>
          <TodayDate/>
       </Text>
      </View>
     <Text>
      <AssignmentItem/>
     </Text>
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
});
