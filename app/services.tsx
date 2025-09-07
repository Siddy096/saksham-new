import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';

export default function services(){

  const params = useLocalSearchParams<{name?: string}>();
  return (
    <View style={styles.container}>
      {
        params.name ? (
            <Text>This is {params.name} Screen</Text>
        ) : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    fontSize: 20,
  },
});
