import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import CarList from './components/CarList';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
      
      <StatusBar style='auto' />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
