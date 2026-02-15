import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  fallbackLng: "en",

  supportedLngs: ["en", "hi", "mr", "pa", "bn", "kn", "ta"],   // 👈 YEH ADD KARO

  load: "languageOnly",                                        // 👈 YEH ADD KARO

  interpolation: {
    escapeValue: false,
  },

    resources: {
      en: {
        translation: {
          // ================= SIDEBAR =================
          home: "Home",
          dashboard: "Dashboard",
          analytics: "Analytics",
          settings: "Settings",

          // ================= DASHBOARD =================
          realTimeDashboard: "Real-Time Dashboard",
          liveSensorReading:
            "Live sensor readings from your Spirulina tank",

          systemStatus: "System Status",
          online: "Online",
          allSensors: "All sensors reporting",
          lastUpdate: "Last update: just now",

          temperature: "Temperature",
          phLevel: "pH Level",
          waterLevel: "Water Level",
          airQuality:"Air Quality",
          humidity:"Humidity",
          lightIntensity: "Light Intensity",
          growthRate: "Growth Rate",
          range: "Range",
          normal: "Normal",
          warning: "Warning",

          // ================= ANALYTICS =================
          analyticsDescription: "System performance overview",
          day24: "24h",
          day7: "7d",
          day30: "30d",
          tempPhOverTime: "Temperature & pH Over Time",
          lightIntensityPattern: "Light Intensity Pattern",

          // ================= HOME PAGE =================
          heroBadge: "✨ Smart Spirulina Monitoring",
          heroTitle: "Grow the Future with",
          spirulina: "Spirulina",
          heroDescription:
            "Monitor, analyze, and optimize your Spirulina cultivation with our intelligent smart system. Real-time data, automated controls, and actionable insights — all in one place.",
          goToDashboard: "Go to Dashboard →",

          whySpirulina: "Why Spirulina?",
          whatIsSpirulina: "What is Spirulina?",
          whatIsSpirulinaDesc:
            "Spirulina is a blue-green microalgae that thrives in warm, alkaline water. It's one of the oldest life forms on Earth and has been consumed for centuries as a powerful source of nutrition.",

          healthBenefits: "Health Benefits",
          healthBenefitsDesc:
            "Packed with 60–70% protein, essential vitamins, minerals, and antioxidants. Spirulina supports immune health, reduces inflammation, and provides sustained energy naturally.",

          environmentalImpact: "Environmental Impact",
          environmentalImpactDesc:
            "Spirulina produces 20x more protein per acre than soybeans, uses minimal water, absorbs CO₂, and releases oxygen. A true champion of sustainable agriculture.",

          futureOfFood: "Future of Food",
          futureOfFoodDesc:
            "NASA has studied Spirulina as a potential food source for space missions. With growing food demands, it offers a scalable, eco-friendly solution to feed the world.",

          // ================= SETTINGS PAGE =================
          automationNotifications: "Automation & Notifications",
          manageControls:
            "Manage automatic controls and alert preferences",

          automation: "Automation",
          toggleControls:
            "Toggle automatic controls for your tank",

          autoLight: "Auto Light Control",
          autoLightDesc:
            "Automatically manage lighting based on schedule",

          autoPump: "Auto Water Pump",
          autoPumpDesc:
            "Maintain water level automatically",

          autoHeater: "Auto Heater",
          autoHeaterDesc:
            "Regulate temperature to target automatically",

          notifications: "Notifications",
          configureAlerts: "Configure alert preferences",

          emailAlerts: "Email Alerts",
          emailAlertsDesc:
            "Receive daily summary and alerts via email",

          criticalAlerts: "Critical Alerts Only",
          criticalAlertsDesc:
            "Only notify when parameters are out of safe range",

          saveSettings: "Save Settings",
          settingsSaved:
            "Settings Saved Successfully ✅",
        },
      },

      // ================= HINDI =================
      
       hi: {
  translation: {
    home: "होम",
    dashboard: "डैशबोर्ड",
    analytics: "एनालिटिक्स",
    settings: "सेटिंग्स",

    realTimeDashboard: "रीयल-टाइम डैशबोर्ड",
    liveSensorReading:
      "आपके स्पिरुलिना टैंक से लाइव सेंसर रीडिंग",

    systemStatus: "सिस्टम स्थिति",
    online: "ऑनलाइन",
    allSensors: "सभी सेंसर रिपोर्ट कर रहे हैं",
    lastUpdate: "अंतिम अपडेट: अभी",

    temperature: "तापमान",
    phLevel: "पीएच स्तर",
    waterLevel: "जल स्तर",
    humidity: "नमी",
    lightIntensity: "प्रकाश तीव्रता",
    airQuality: "वायु गुणवत्ता",
    growthRate: "विकास दर",
    range: "सीमा",
    normal: "सामान्य",
    warning: "चेतावनी",

    // ✅ ADDED ANALYTICS TRANSLATIONS
    analyticsDescription: "सिस्टम प्रदर्शन अवलोकन",
    day24: "24 घंटे",
    day7: "7 दिन",
    day30: "30 दिन",
    tempPhOverTime: "समय के साथ तापमान और पीएच",
    lightIntensityPattern: "प्रकाश तीव्रता पैटर्न",

    heroBadge: "✨ स्मार्ट स्पिरुलिना मॉनिटरिंग",
    heroTitle: "भविष्य उगाएँ",
    spirulina: "स्पिरुलिना",
    heroDescription:
      "अपने स्पिरुलिना उत्पादन को मॉनिटर, विश्लेषण और ऑप्टिमाइज़ करें। रियल-टाइम डेटा और स्मार्ट कंट्रोल्स के साथ।",
    goToDashboard: "डैशबोर्ड पर जाएँ →",

    whySpirulina: "स्पिरुलिना क्यों?",
    whatIsSpirulina: "स्पिरुलिना क्या है?",
    whatIsSpirulinaDesc:
      "स्पिरुलिना एक नीला-हरा सूक्ष्म शैवाल है जो गर्म क्षारीय पानी में पनपता है।",

    healthBenefits: "स्वास्थ्य लाभ",
    healthBenefitsDesc:
      "प्रोटीन, विटामिन और एंटीऑक्सीडेंट से भरपूर।",

    environmentalImpact: "पर्यावरणीय प्रभाव",
    environmentalImpactDesc:
      "कम पानी में अधिक उत्पादन और CO₂ अवशोषण।",

    futureOfFood: "भविष्य का भोजन",
    futureOfFoodDesc:
      "अंतरिक्ष मिशनों के लिए भी अध्ययन किया गया।",

    automationNotifications: "ऑटोमेशन और नोटिफिकेशन",
    manageControls:
      "स्वचालित नियंत्रण और अलर्ट सेटिंग्स प्रबंधित करें",

    automation: "ऑटोमेशन",
    toggleControls:
      "अपने टैंक के लिए स्वचालित नियंत्रण टॉगल करें",

    autoLight: "ऑटो लाइट कंट्रोल",
    autoLightDesc:
      "शेड्यूल के अनुसार लाइट नियंत्रित करें",

    autoPump: "ऑटो वाटर पंप",
    autoPumpDesc:
      "पानी का स्तर स्वतः बनाए रखें",

    autoHeater: "ऑटो हीटर",
    autoHeaterDesc:
      "तापमान स्वतः नियंत्रित करें",

    notifications: "सूचनाएँ",
    configureAlerts: "अलर्ट प्राथमिकताएँ सेट करें",

    emailAlerts: "ईमेल अलर्ट",
    emailAlertsDesc:
      "ईमेल द्वारा दैनिक सारांश प्राप्त करें",

    criticalAlerts: "केवल महत्वपूर्ण अलर्ट",
    criticalAlertsDesc:
      "केवल गंभीर स्थिति में सूचित करें",

    saveSettings: "सेटिंग्स सेव करें",
    settingsSaved: "सेटिंग्स सफलतापूर्वक सेव हुई ✅",
  },
},

    },
  });

export default i18n;
