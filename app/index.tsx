import React from "react";
import { Button, View } from "react-native";
import Header from "@/components/Header";
import styles from "./design";
import Advertisement from "@/components/Advertisement";
import Services from "@/components/Services";

export default function Home(){
    return(
        <View style = {styles.appContainer}>
            <Header></Header>
            <Advertisement></Advertisement>
            <Services></Services>
        </View>
    )
}