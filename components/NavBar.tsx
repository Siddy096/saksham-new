import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./ui/NavBarCSS";

export default function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("@/assets/images/home.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("@/assets/images/search.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("@/assets/images/bell.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Image
          source={require("@/assets/images/profile.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}
