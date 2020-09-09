import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NameText from "./src/components/NameText"

export default function App() {
  return (
    <View style={styles.container}>
      <NameText value="Arbaz"/> 
      <NameText />
      <NameText />
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
