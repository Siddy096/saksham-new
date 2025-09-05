import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight, Globe } from 'lucide-react-native';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
];

export default function LanguageSelectionScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleContinue = () => {
    // Store selected language in AsyncStorage here
    router.replace('/auth/welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F8FAFC', '#F1F5F9']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Globe size={60} color="#8B5CF6" />
            <Text style={styles.title}>Choose Your Language</Text>
            <Text style={styles.subtitle}>Select your preferred language to continue</Text>
          </View>

          <View style={styles.languageList}>
            {languages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={[
                  styles.languageItem,
                  selectedLanguage === language.code && styles.selectedItem
                ]}
                onPress={() => setSelectedLanguage(language.code)}
              >
                <View style={styles.languageContent}>
                  <Text style={[
                    styles.languageName,
                    selectedLanguage === language.code && styles.selectedText
                  ]}>
                    {language.name}
                  </Text>
                  <Text style={[
                    styles.nativeName,
                    selectedLanguage === language.code && styles.selectedNativeText
                  ]}>
                    {language.nativeName}
                  </Text>
                </View>
                {selectedLanguage === language.code && (
                  <ChevronRight size={20} color="#8B5CF6" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <LinearGradient
              colors={['#8B5CF6', '#EC4899']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>Continue</Text>
              <ChevronRight size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  languageList: {
    flex: 1,
    marginBottom: 30,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  selectedItem: {
    borderColor: '#8B5CF6',
    backgroundColor: '#F3F4F6',
  },
  languageContent: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  selectedText: {
    color: '#8B5CF6',
  },
  nativeName: {
    fontSize: 16,
    color: '#6B7280',
  },
  selectedNativeText: {
    color: '#8B5CF6',
  },
  continueButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginRight: 8,
  },
});