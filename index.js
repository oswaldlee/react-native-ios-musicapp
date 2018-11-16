// Import library to help create a component
import React from 'react';
import { SafeAreaView, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Music from './src/components/Music';

// Create component
const App = () => {
  return (
    <SafeAreaView>
      <Header headerText={'Music'} />
      <Music />
    </SafeAreaView>
  );  
};
// Render component to device
  AppRegistry.registerComponent('albums', () => App);
  
