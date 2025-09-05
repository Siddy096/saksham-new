import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Phone, User, Mail } from 'lucide-react-native';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (phone.length < 10) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }

    setLoading(true);
    try {
      // Here you would integrate with Supabase and Twilio
      // For now, we'll simulate the process
      setTimeout(() => {
        setLoading(false);
        router.push({
          pathname: '/auth/otp-verification',
          params: { phone, type: 'signup', name, email }
        });
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#8B5CF6" />
          </TouchableOpacity>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join the Saksham community</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <User size={20} color="#8B5CF6" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <Mail size={20} color="#8B5CF6" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <Phone size={20} color="#8B5CF6" style={styles.inputIcon} />
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                style={[styles.input, styles.phoneInput]}
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.signupButton, loading && styles.disabledButton]}
            onPress={handleSignUp}
            disabled={loading}
          >
            <Text style={styles.signupButtonText}>
              {loading ? 'Creating Account...' : 'Send OTP'}
            </Text>
          </TouchableOpacity>

          <View style={styles.loginLink}>
            <Text style={styles.loginLinkText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/login')}>
              <Text style={styles.loginLinkButton}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
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
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
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
  },
  phoneInput: {
    borderLeftWidth: 1,
    borderLeftColor: '#E5E7EB',
    paddingLeft: 12,
    marginLeft: 8,
  },
  signupButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 20,
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
  signupButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  loginLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginLinkText: {
    fontSize: 16,
    color: '#6B7280',
  },
  loginLinkButton: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '600',
  },
});