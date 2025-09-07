import React from "react";
import { View, ScrollView } from "react-native";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Advertisement from "@/components/Advertisement";
import Services from "@/components/Services";
import MostPopularServices from "@/components/MostPopularServices";

export default function Home() {
  return (
    <View style={{ flex: 1 }}> 
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Header />
        <Advertisement />
        <Services />
        <MostPopularServices />
      </ScrollView>
      <NavBar />
    </View>
  );
}
