import React from "react";
import { Text } from "react-native-gesture-handler";

//Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const services = ({ route }) => {
    const { name } = route.params;
    return(
    <View style={styles.container}>
      <Text style={styles.smallText}>
        This is { name } Screen
      </Text>
    </View>
  )
}
export default services

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 20,
  }
})