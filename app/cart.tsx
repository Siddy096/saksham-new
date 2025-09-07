import React from "react-native";
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function Cart(){
    return(
        <View style={styles.container}>
            <Text>This is Cart Screen</Text>
        </View>
    );
}

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