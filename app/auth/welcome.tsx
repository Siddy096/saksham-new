import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, ArrowRight, Star } from 'lucide-react-native';

export default function WelcomeScreen() {
  return (
    <LinearGradient
      colors={['#8B5CF6', '#EC4899']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <View style={styles.logoSection}>
          <View style={styles.iconContainer}>
            <Heart size={80} color="white" fill="white" />
            <Star size={40} color="#F59E0B" fill="#F59E0B" style={styles.starIcon} />
          </View>
          <Text style={styles.appName}>Saksham</Text>
          <Text style={styles.tagline}>Empowering Women, Building Futures</Text>
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.welcomeTitle}>Welcome to Your Journey</Text>
          <Text style={styles.welcomeSubtitle}>
            Join thousands of women who are taking charge of their lives, 
            building skills, and creating lasting change in their communities.
          </Text>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/auth/signup')}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
              <ArrowRight size={20} color="#8B5CF6" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/auth/login')}
          >
            <Text style={styles.secondaryButtonText}>I Already Have an Account</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 60,
    justifyContent: 'space-between',
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  starIcon: {
    position: 'absolute',
    top: -15,
    right: -20,
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonSection: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
    marginRight: 8,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});