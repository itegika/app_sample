import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContextProvider} from 'context/appContext';
import {TabNavigator} from '@navigation/TabNavigator';
// import Today from ''

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
