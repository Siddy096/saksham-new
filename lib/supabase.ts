import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// You'll need to replace these with your actual Supabase project credentials
const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Phone authentication helper functions
export const sendOTP = async (phone: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: `+91${phone}`,
    });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error };
  }
};

export const verifyOTP = async (phone: string, token: string) => {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      phone: `+91${phone}`,
      token,
      type: 'sms',
    });
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { success: false, error };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
};