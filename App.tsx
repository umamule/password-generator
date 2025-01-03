

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
   <SafeAreaView style={styles.container}>
   <view>
    <Text>Password generator</Text>
   </view>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{

  }
});

export default App;
