import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen1() {
  return (
    <View style={styles.container}>
      <Text>Open up Screen1.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
