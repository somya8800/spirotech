import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "hi"],
    load: "languageOnly",

    interpolation: {
      escapeValue: false,
    },

    resources: {
      /* ================= ENGLISH ================= */
      en: {
        translation: {
          /* NAV */
          home: "Home",
          dashboard: "Dashboard",
          analytics: "Analytics",
          settings: "Settings",

          /* HOME */
          heroBadge: "✨ Smart Spirulina Monitoring",
          heroTitle: "Grow the Future with",
          spirulina: "Spirulina",
          heroDescription:
            "Monitor, analyze, and optimize your Spirulina cultivation with our intelligent smart system.",
          goToDashboard: "Go to Dashboard →",

          /* FOOTER */
          footer: {
            connect: "Connect With Us",
            contact: "Contact",
            instagram: "Instagram",
            twitter: "Twitter / X",
            whatsapp: "WhatsApp",
          },

          /* LIVE IMPACT */
          impact: {
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
          },

          /* EDUCATION */
          edu: {
            articles: {
              title: "Spirulina Articles",
              what: "What is Spirulina?",
              whatDesc:
                "Protein rich blue-green algae used as a future superfood.",
              health: "Health Benefits",
              healthDesc:
                "Boosts immunity, improves energy and supports heart health.",
              env: "Environmental Impact",
              envDesc: "Eco-friendly cultivation using very little water.",
            },

            readMore: "Read More",

            usage: {
              title: "Global Spirulina Usage",
              india: "India",
              usa: "USA",
              japan: "Japan",
              europe: "Europe",
              others: "Others",
            },

            quiz: {
              title: "Spirulina Quiz",
              q1: "Ideal pH range?",
              o1a: "5-6",
              o1b: "8.5-10.5",
              o1c: "3-4",
              o1d: "12+",

              q2: "Spirulina is?",
              o2a: "Algae",
              o2b: "Fungus",
              o2c: "Plant",
              o2d: "Mineral",

              q3: "Best temperature?",
              o3a: "10°C",
              o3b: "30-35°C",
              o3c: "50°C",
              o3d: "5°C",

              q4: "Main benefit?",
              o4a: "Protein",
              o4b: "Sugar",
              o4c: "Fat",
              o4d: "Salt",
            },

            next: "Next",

            level: {
              beginner: "Beginner 🌱",
              advanced: "Advanced Grower 🌿",
              expert: "Spirulina Expert 🧪",
            },
          },
        },
      },

      /* ================= HINDI ================= */
      hi: {
        translation: {
          home: "होम",
          dashboard: "डैशबोर्ड",
          analytics: "एनालिटिक्स",
          settings: "सेटिंग्स",

          footer: {
            connect: "हमसे जुड़ें",
            contact: "संपर्क",
            instagram: "इंस्टाग्राम",
            twitter: "ट्विटर / एक्स",
            whatsapp: "व्हाट्सएप",
          },

          impact: {
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
          },

          edu: {
            articles: {
              title: "स्पिरुलिना लेख",
              what: "स्पिरुलिना क्या है?",
              whatDesc:
                "प्रोटीन से भरपूर नीला-हरा शैवाल।",
              health: "स्वास्थ्य लाभ",
              healthDesc:
                "इम्युनिटी बढ़ाता है और ऊर्जा देता है।",
              env: "पर्यावरणीय प्रभाव",
              envDesc: "कम पानी में टिकाऊ उत्पादन।",
            },

            readMore: "और पढ़ें",

            usage: {
              title: "वैश्विक स्पिरुलिना उपयोग",
              india: "भारत",
              usa: "अमेरिका",
              japan: "जापान",
              europe: "यूरोप",
              others: "अन्य",
            },

            quiz: {
              title: "स्पिरुलिना क्विज़",
              q1: "आदर्श pH सीमा?",
              o1a: "5-6",
              o1b: "8.5-10.5",
              o1c: "3-4",
              o1d: "12+",

              q2: "स्पिरुलिना क्या है?",
              o2a: "शैवाल",
              o2b: "फंगस",
              o2c: "पौधा",
              o2d: "खनिज",

              q3: "सर्वोत्तम तापमान?",
              o3a: "10°C",
              o3b: "30-35°C",
              o3c: "50°C",
              o3d: "5°C",

              q4: "मुख्य लाभ?",
              o4a: "प्रोटीन",
              o4b: "शुगर",
              o4c: "वसा",
              o4d: "नमक",
            },

            next: "आगे",
            level: {
              beginner: "शुरुआती 🌱",
              advanced: "उन्नत उत्पादक 🌿",
              expert: "स्पिरुलिना विशेषज्ञ 🧪",
            },
          },
        },
      },
    },
  });

export default i18n;
