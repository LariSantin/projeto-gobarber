import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/auth.routes';
import AppProvider from './hooks';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor= '#312e38'  />
    <AppProvider>
      <View style={{flex:1, backgroundColor: '#312e38' }}>
          <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>

);

export default App;
