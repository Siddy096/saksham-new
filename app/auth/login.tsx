import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Phone } from 'lucide-react-native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!phone.trim() || phone.length < 10) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    setLoading(true);
    try {
      // Here you would check if user exists in Supabase and send OTP via Twilio
      setTimeout(() => {
        setLoading(false);
        router.push({
          pathname: '/auth/otp-verification',
          params: { phone, type: 'login' }
        });
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#8B5CF6" />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Phone size={20} color="#8B5CF6" style={styles.inputIcon} />
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, loading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </Text>
        </TouchableOpacity>

        <View style={styles.signupLink}>
          <Text style={styles.signupLinkText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/signup')}>
            <Text style={styles.signupLinkButton}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 20,
    flex: 1,
  },
  inputGroup: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  inputIcon: {
    marginRight: 12,
  },
  countryCode: {
    fontSize: 16,
    color: '#374151',
    marginRight: 8,
    fontWeight: '500',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    paddingVertical: 14,
    borderLeftWidth: 1,
    borderLeftColor: '#E5E7EB',
    paddingLeft: 12,
    marginLeft: 8,
  },
  loginButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
    elevation: 0,
    shadowOpacity: 0,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  signupLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  signupLinkText: {
    fontSize: 16,
    color: '#6B7280',
  },
  signupLinkButton: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '600',
  },
});