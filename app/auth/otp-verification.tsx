import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Shield } from 'lucide-react-native';

export default function OTPVerificationScreen() {
  const { phone, type, name, email } = useLocalSearchParams();
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      Alert.alert('Error', 'Please enter the complete 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      // Here you would verify OTP with Twilio and create/authenticate user in Supabase
      setTimeout(() => {
        setLoading(false);
        if (type === 'signup') {
          // Create new user in Supabase
          router.replace('/(tabs)');
        } else {
          // Authenticate existing user
          router.replace('/(tabs)');
        }
      }, 2000);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    
    setCanResend(false);
    setResendTimer(30);
    
    // Resend OTP logic here
    Alert.alert('Success', 'OTP has been resent to your phone number');
    
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
        
        <View style={styles.iconContainer}>
          <Shield size={60} color="#8B5CF6" />
        </View>
        
        <Text style={styles.title}>Verify Your Phone</Text>
        <Text style={styles.subtitle}>
          We've sent a 6-digit code to{'\n'}
          <Text style={styles.phoneNumber}>+91 {phone}</Text>
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={setOTP}
            keyboardType="number-pad"
            maxLength={6}
            placeholder="000000"
            textAlign="center"
            autoFocus
          />
        </View>

        <TouchableOpacity
          style={[styles.verifyButton, loading && styles.disabledButton]}
          onPress={handleVerifyOTP}
          disabled={loading}
        >
          <Text style={styles.verifyButtonText}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          {canResend ? (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendButton}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.resendTimer}>Resend in {resendTimer}s</Text>
          )}
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
  iconContainer: {
    marginBottom: 24,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  phoneNumber: {
    fontWeight: '600',
    color: '#8B5CF6',
  },
  form: {
    paddingHorizontal: 20,
    flex: 1,
  },
  otpContainer: {
    marginBottom: 32,
  },
  otpInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    paddingVertical: 20,
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '600',
    color: '#374151',
    letterSpacing: 8,
  },
  verifyButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 24,
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
  verifyButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#6B7280',
  },
  resendButton: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '600',
  },
  resendTimer: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});