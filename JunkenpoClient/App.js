import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? '#000000' : '#ffffff',
          }}
        >
          <Text>Jun-Ken-Po</Text>
          <Button 
            title="Start New Game!" 
            onPress={() => console.log('start game')} 
          />
        </View>
    </SafeAreaView>
  );
};

export default App;
