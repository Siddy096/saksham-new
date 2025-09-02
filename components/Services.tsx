import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Button } from 'react-native';
import { TouchableOpacity } from "react-native";
import { Image } from 'react-native';
import { Alert } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

export default function Services({navigation}){
    return(
        <View style = {styles.container}>
        <Text style={styles.label1}>Services</Text>
        <View style = {styles.row}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Fitness"})}>
                <Image
                source={require('@/assets/images/yoga.png')}
                style={styles.buttonImage}
                />
            </TouchableOpacity>
            <Text style={styles.label}>FITNESS</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Dance"})}>
                <Image
                source={require('@/assets/images/dance.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>DANCE</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Education"})}>
                <Image
                source={require('@/assets/images/education.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>EDUCATION</Text>
            </View>
        </View>
        <View style = {styles.row}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Beauty"})}>
                <Image
                source={require('@/assets/images/beauty.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>BEAUTY</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Cooking"})}>
                <Image
                source={require('@/assets/images/cooking.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>COOKING</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Event"})}>
                <Image
                source={require('@/assets/images/event.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>EVENT</Text>
            </View>
        </View>
        <View style = {styles.row}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={() => navigation.navigate("Services", {name: "Tailoring"})}>
                <Image
                source={require('@/assets/images/tailoring.png')}
                style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.label}>TAILORING</Text>
            </View>
            <TouchableOpacity style = {styles.circleButton} onPress = {() => Alert.alert("Button clicked")}>
            <Image></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.circleButton} onPress = {() => Alert.alert("Button clicked")}>
            <Image></Image>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 5, // space between buttons
  },
  row: {
    flexDirection: "row", // arrange buttons in a row
    marginBottom: 10,     // space between rows
  },
  buttonImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover'
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column"
  },
  label1: {
    fontSize: 30,
    fontWeight: "bold"
  }
});