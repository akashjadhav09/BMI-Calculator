import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en_US: {
    translation: {
      "welcome": "Welcome to the BMI Calculator",
      "calculate": "Calculate",
      "reset": "Reset",
      "selectGender": "Select Gender",
      "enterYour": "Enter Your {{label}}",
      "name": "Name",
      "age": "Age",
      "height": "Height (Cm)",
      "weight": "Weight (Kg)",
      "male" : "Male",
      "female" : "Female",
      "other" : "Other"
    },
  },
  hi_IN: {
    translation: {
      "welcome": "बीएमआई कैलकुलेटर में आपका स्वागत है",
      "calculate": "गणना करें",
      "reset": "रीसेट करें",
      "selectGender": "लिंग चुनें",
      "enterYour": "{{label}} दर्ज करें",
      "name": "नाम",
      "age": "उम्र",
      "height": "ऊंचाई (सेमी)",
      "weight": "वजन (किलोग्राम)",
      "male": "पुरुष",
      "female": "महिला",
      "other": "अन्य"
    },
  },
  ar_SA:{
    translation: {
    "welcome": "مرحبًا بك في حاسبة مؤشر كتلة الجسم",
    "calculate": "احسب",
    "reset": "إعادة ضبط",
    "selectGender": "حدد الجنس",
    "enterYour": "أدخل الخاص بك {{label}}",
    "name": "اسم",
    "age": "عمر",
    "height": "الارتفاع (سم)",
    "weight": "الوزن (كجم)",
    "male": "ذكر",
    "female": "أنثى",
    "other": "آخر"
    },
  },
  de_DE:{
    translation: {
    "welcome": "Willkommen beim BMI-Rechner",
    "calculate": "Berechnen",
    "reset": "Zurücksetzen",
    "selectGender": "Wählen Sie Geschlecht aus",
    "enterYour": "Geben Sie Ihre ein {{label}}",
    "name": "Name",
    "age": "Alter",
    "height": "Höhe (cm)",
    "weight": "Gewicht (kg)",
    "male": "Männlich",
    "female": "Weiblich",
    "other": "Andere"
    },
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
