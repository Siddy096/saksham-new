import { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Heart, Star } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const logoScale = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);
  const heartRotation = useSharedValue(0);
  const starScale = useSharedValue(0);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
  }));

  const subtitleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
  }));

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${heartRotation.value}deg` }, { scale: starScale.value }],
  }));

  const starAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: starScale.value }],
  }));

  const navigateToLanguageSelection = () => {
    router.replace('/language-selection');
  };

  useEffect(() => {
    // Start animations
    logoScale.value = withSpring(1, { duration: 1000 });
    
    titleOpacity.value = withTiming(1, { duration: 800 }, () => {
      subtitleOpacity.value = withTiming(1, { duration: 600 });
    });

    heartRotation.value = withSequence(
      withTiming(10, { duration: 500 }),
      withTiming(-10, { duration: 500 }),
      withTiming(0, { duration: 500 })
    );

    starScale.value = withSequence(
      withTiming(1.2, { duration: 800 }),
      withTiming(1, { duration: 600 })
    );

    // Navigate after animation completes
    const timer = setTimeout(() => {
      runOnJS(navigateToLanguageSelection)();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#8B5CF6', '#EC4899', '#F59E0B']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
          <View style={styles.iconContainer}>
            <Animated.View style={[styles.heartIcon, heartAnimatedStyle]}>
              <Heart size={60} color="white" fill="white" />
            </Animated.View>
            <Animated.View style={[styles.starIcon, starAnimatedStyle]}>
              <Star size={30} color="#F59E0B" fill="#F59E0B" />
            </Animated.View>
          </View>
        </Animated.View>

        <Animated.Text style={[styles.title, titleAnimatedStyle]}>
          Saksham
        </Animated.Text>
        
        <Animated.Text style={[styles.subtitle, subtitleAnimatedStyle]}>
          सक्षम • Empowering Women
        </Animated.Text>
        
        <Animated.Text style={[styles.tagline, subtitleAnimatedStyle]}>
          Building Futures Together
        </Animated.Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    zIndex: 1,
  },
  starIcon: {
    position: 'absolute',
    top: -10,
    right: -20,
    zIndex: 2,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontWeight: '300',
  },
});