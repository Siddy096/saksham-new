import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './ui/MostPopularServicesCSS';

export default function MostPopularServices() {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.text}>Services Near You</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.subContainer}>

          {/* Fitness */}
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/skyblue.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Dance */}
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/yellow.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Education */}
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/purple.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Beauty */}
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/skyblue.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/yellow.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.subSubContainer}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/images/purple.png')}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.insideContainerText}>Business Name: </Text>
                <Text style={styles.insideContainerText}>Address: </Text>
                <Text style={styles.insideContainerText}>Owner Name: </Text>
                <Text style={styles.insideContainerText}>Genre: </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
