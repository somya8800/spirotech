import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    supportedLngs: ["en", "hi"],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    resources: {

      /* ================= ENGLISH ================= */
      en: {
        translation: {

          home: "Home",
          dashboard: "Dashboard",
          analytics: "Analytics",
          settings: "Settings",

          heroBadge: "✨ Smart Spirulina Monitoring",
          heroTitle: "Grow the Future with",
          spirulina: "Spirulina",
          heroDescription:
            "Monitor, analyze, and optimize your Spirulina cultivation with our intelligent smart system.",
          goToDashboard: "Go to Dashboard →",

          whatIsSpirulina: "What Is Spirulina?",
          healthBenefits: "Health Benefits",
          environmentalImpact: "Environmental Impact",
          futureOfFood: "Future Of Food",

          footerConnect: "Connect With Us",
          footerContact: "Contact",
          instagram: "Instagram",
          twitter: "Twitter / X",
          whatsapp: "WhatsApp",

          cultureAccuracy: "Culture Health Accuracy",
          smartMonitoring: "Smart Monitoring System",
          realtimeTracking: "Real-time Tracking",
          sustainable: "Sustainable Production",
          moreProtein: "More Protein Than Soybeans",
          optimization: "Smart Culture Optimization",
          carbonAbsorption: "Carbon Absorption System",
          oxygen: "Natural Oxygen Production",
          microalgae: "Microalgae Intelligence",
          lowWater: "Low Water Consumption",
          sensorAnalysis: "Sensor Based Analysis",
          biotech: "Next-Gen Food Research",
          spaceFood: "NASA Studied Superfood",

          aiTitle: "AI Powered Culture Insights",
          aiDesc:
            "Spirotech continuously analyzes water quality and growth patterns.",

          /* DASHBOARD */
          "Real Time Dashboard": "Real Time Dashboard",
          "Live Sensor Reading": "Live Sensor Reading",
          "System Status": "System Status",
          "online": "Online",
          "AllSensors": "All Sensors Active",

          temperature: "Temperature",
          Humidity: "Humidity",
          "Light Intensity": "Light Intensity",
          "Growth Rate": "Growth Rate",
          "Air Quality": "Air Quality",
          airQuality: "Air Quality",
          "air quality": "Air Quality",
          phLevel: "pH Level",
        },
      },

      /* ================= HINDI ================= */
      hi: {
        translation: {

          home: "होम",
          dashboard: "डैशबोर्ड",
          analytics: "एनालिटिक्स",
          settings: "सेटिंग्स",

          heroBadge: "✨ स्मार्ट स्पिरुलिना मॉनिटरिंग",
          heroTitle: "भविष्य उगाएँ",
          spirulina: "स्पिरुलिना",
          heroDescription:
            "अपने स्पिरुलिना उत्पादन की निगरानी और विश्लेषण करें।",
          goToDashboard: "डैशबोर्ड पर जाएं →",

          whatIsSpirulina: "स्पिरुलिना क्या है?",
          healthBenefits: "स्वास्थ्य लाभ",
          environmentalImpact: "पर्यावरणीय प्रभाव",
          futureOfFood: "भविष्य का भोजन",

          footerConnect: "हमसे जुड़ें",
          footerContact: "संपर्क",
          instagram: "इंस्टाग्राम",
          twitter: "ट्विटर / एक्स",
          whatsapp: "व्हाट्सएप",

          cultureAccuracy: "संस्कृति स्वास्थ्य सटीकता",
          smartMonitoring: "स्मार्ट निगरानी प्रणाली",
          realtimeTracking: "रीयल-टाइम ट्रैकिंग",
          sustainable: "सतत उत्पादन",
          moreProtein: "20 गुना अधिक प्रोटीन",
          optimization: "स्मार्ट कल्चर अनुकूलन",
          carbonAbsorption: "कार्बन अवशोषण प्रणाली",
          oxygen: "प्राकृतिक ऑक्सीजन उत्पादन",
          microalgae: "माइक्रोएल्गी इंटेलिजेंस",
          lowWater: "कम पानी की खपत",
          sensorAnalysis: "सेंसर आधारित विश्लेषण",
          biotech: "अगली पीढ़ी का फूड रिसर्च",
          spaceFood: "NASA अध्ययन सुपरफूड",

          aiTitle: "एआई संचालित कल्चर इनसाइट्स",
          aiDesc:
            "Spirotech पानी की गुणवत्ता और विकास पैटर्न का विश्लेषण करता है।",

          /* DASHBOARD */
          "Real Time Dashboard": "रीयल टाइम डैशबोर्ड",
          "Live Sensor Reading": "लाइव सेंसर रीडिंग",
          "System Status": "सिस्टम स्थिति",
          "online": "ऑनलाइन",
          "AllSensors": "सभी सेंसर सक्रिय",

          temperature: "तापमान",
          Humidity: "नमी",
          "Light Intensity": "प्रकाश तीव्रता",
          "Growth Rate": "विकास दर",
          "Air Quality": "वायु गुणवत्ता",
          airQuality: "वायु गुणवत्ता",
          "air quality": "वायु गुणवत्ता",
          phLevel: "पीएच स्तर",
        },
      },
    },
  });

export default i18n;
