import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import styles from "./ui/ServicesCSS";

import { Link } from "expo-router";

export default function Services(){
  return(
    <View style = {styles.serviceContainer}>
      <Text style = {styles.text}>Services</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style = {styles.subContainer}>
          <View style = {styles.subSubContainer}>
            <Link href={{
              pathname: "/services",
              params: {name: "fitness"}
            }}
            push asChild>
              <TouchableOpacity>
                <Image 
                  source={require('@/assets/images/fitness.png')} 
                  style={styles.iconStyle}
                />
                <Text style = {styles.insideContainerText}>Fitness</Text>
              </TouchableOpacity>
            </Link>
        </View>
        <View style = {styles.subSubContainer}>
          <Link href={{
              pathname: "/services",
              params: {name: "dance"}
            }}
            push asChild>
              <TouchableOpacity>
                <Image 
                  source={require('@/assets/images/dance.png')} 
                  style={styles.iconStyle}
                />
                <Text style = {styles.insideContainerText}>Dance</Text>
              </TouchableOpacity>
            </Link>
        </View>
        <View style = {styles.subSubContainer}>
            <Link href={{
              pathname: "/services",
              params: {name: "education"}
            }}
            push asChild>
              <TouchableOpacity>
                <Image 
                  source={require('@/assets/images/education.png')} 
                  style={styles.iconStyle}
                />
                <Text style = {styles.insideContainerText}>Education</Text>
              </TouchableOpacity>
            </Link>
        </View>
        <View style = {styles.subSubContainer}>
          <Link href={{
              pathname: "/services",
              params: {name: "beauty"}
            }}
            push asChild>
              <TouchableOpacity>
                <Image 
                  source={require('@/assets/images/beauty.png')} 
                  style={styles.iconStyle}
                />
                <Text style = {styles.insideContainerText}>Beauty</Text>
              </TouchableOpacity>
            </Link>
        </View>
        <View style = {styles.subSubContainer}>
          <Link href={{
              pathname: "/services",
              params: {name: "explore more"}
            }}
            push asChild>
            <TouchableOpacity>
              {/* <Image 
                source={require('@/assets/images/right-arrow.png')} 
                style={styles.iconStyle}
              /> */}
              <Text style = {styles.insideContainerText}>Explore</Text>
              <Text style = {styles.insideContainerText}>More</Text>
              <Image 
                source={require('@/assets/images/right-arrow.png')}
                style={{width: 100, height: 100}}
              />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}