import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Saksham',
      empoweringWomen: 'Empowering Women',
      buildingFutures: 'Building Futures',
      getStarted: 'Get Started',
      alreadyHaveAccount: 'I Already Have an Account',
      createAccount: 'Create Account',
      signIn: 'Sign In',
      phoneNumber: 'Phone Number',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      sendOTP: 'Send OTP',
      verifyOTP: 'Verify OTP',
      enterOTP: 'Enter 6-digit OTP',
      resendOTP: 'Resend OTP',
      chooseLanguage: 'Choose Your Language',
      continue: 'Continue',
    },
  },
  hi: {
    translation: {
      welcome: 'सक्षम में आपका स्वागत है',
      empoweringWomen: 'महिला सशक्तिकरण',
      buildingFutures: 'भविष्य का निर्माण',
      getStarted: 'शुरू करें',
      alreadyHaveAccount: 'मेरे पास पहले से एक खाता है',
      createAccount: 'खाता बनाएं',
      signIn: 'साइन इन करें',
      phoneNumber: 'फोन नंबर',
      fullName: 'पूरा नाम',
      emailAddress: 'ईमेल पता',
      sendOTP: 'OTP भेजें',
      verifyOTP: 'OTP सत्यापित करें',
      enterOTP: '6-अंकीय OTP दर्ज करें',
      resendOTP: 'OTP पुनः भेजें',
      chooseLanguage: 'अपनी भाषा चुनें',
      continue: 'जारी रखें',
    },
  },
  bn: {
    translation: {
      welcome: 'সক্ষমে আপনাকে স্বাগতম',
      empoweringWomen: 'নারী ক্ষমতায়ন',
      buildingFutures: 'ভবিষ্যৎ গড়া',
      getStarted: 'শুরু করুন',
      alreadyHaveAccount: 'আমার ইতিমধ্যে একটি অ্যাকাউন্ট আছে',
      createAccount: 'অ্যাকাউন্ট তৈরি করুন',
      signIn: 'সাইন ইন করুন',
      phoneNumber: 'ফোন নম্বর',
      fullName: 'পূর্ণ নাম',
      emailAddress: 'ইমেইল ঠিকানা',
      sendOTP: 'OTP পাঠান',
      verifyOTP: 'OTP যাচাই করুন',
      enterOTP: '৬-সংখ্যার OTP লিখুন',
      resendOTP: 'OTP পুনরায় পাঠান',
      chooseLanguage: 'আপনার ভাষা বেছে নিন',
      continue: 'অব্যাহত রাখুন',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;