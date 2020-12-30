import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#DBDDDE" />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
};
