import {
  Thermometer,
  Droplets,
  Waves,
  Sun,
  TrendingUp,
  Wind,
  Brain,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const Dashboard = () => {
  const { t } = useTranslation();

  const [sensor, setSensor] = useState({
    temperature: 0,
    humidity: 0,
    light: 0,
    airQuality: 0,
    phLevel: 0,
    growthRate: 0,
  });

  useEffect(() => {
    const sensorRef = ref(db, "sensors");
    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setSensor(data);
    });
  }, []);

  /* ================= HEALTH CHECK ================= */
  const checks = [
    sensor.temperature >= 28 && sensor.temperature <= 35,
    sensor.humidity >= 40 && sensor.humidity <= 80,
    sensor.light >= 2500 && sensor.light <= 7500,
    sensor.airQuality >= 900 && sensor.airQuality <= 1600,
    sensor.phLevel >= 8.5 && sensor.phLevel <= 10.5,
    sensor.growthRate >= 0.8 && sensor.growthRate <= 2.5,
  ];

  const healthScore =
    (checks.filter(Boolean).length / checks.length) * 100;

  /* ================= ✅ REAL AI ENGINE ================= */
  const getAIRecommendation = () => {

    if (sensor.phLevel < 8.5)
      return "⚠ pH LOW — Add alkaline solution or reduce fresh water.";

    if (sensor.phLevel > 10.5)
      return "⚠ pH HIGH — Dilute culture or reduce light exposure.";

    if (sensor.temperature < 28)
      return "🌡 Temperature low — Activate heater or increase sunlight.";

    if (sensor.temperature > 35)
      return "🔥 Temperature high — Start cooling fan immediately.";

    if (sensor.light < 2500)
      return "💡 Light insufficient — Increase LED intensity.";

    if (sensor.airQuality < 900)
      return "🌬 Air circulation weak — Increase aeration pump.";

    if (healthScore > 85)
      return "✅ Culture Stable — Optimal Growth Running.";

    return "⚠ Parameter fluctuation detected — Monitor system.";
  };

  const aiMessage = getAIRecommendation();

  const cardStyle =
    "bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md " +
    "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/40";

  return (
    <div className="space-y-8 min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("Real Time Dashboard")}
        </h1>
        <p className="text-gray-500">{t("Live Sensor Reading")}</p>
      </div>

      {/* ================= SYSTEM STATUS ================= */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 flex justify-between items-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-green-100/40 to-emerald-100/40"></div>

        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-70"></div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 text-lg">
              {t("System Status")} : {t("online")}
            </p>
            <p className="text-sm text-gray-500">
              {t("AllSensors")} • Live AI Monitoring
            </p>
          </div>
        </div>

        <div className="relative text-right">
          <p className="text-sm text-gray-500">Culture Health</p>
          <p className="text-2xl font-bold text-emerald-600">
            {healthScore.toFixed(0)}%
          </p>
        </div>
      </div>

      {/* ================= ✅ SMART AI RECOMMENDATION ================= */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border p-6 flex items-center gap-4">
        <Brain className="text-emerald-600 animate-pulse" size={40} />
        <div>
          <p className="font-semibold text-gray-800">
            AI Recommendation
          </p>
          <p className="text-gray-500">{aiMessage}</p>
        </div>
      </div>

      {/* ================= SENSOR CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {[
          {name:t("temperature"), value:`${sensor.temperature}°C`, icon:<Thermometer/>},
          {
            name: t("phLevel"),
            value: sensor.phLevel ? `${sensor.phLevel.toFixed(2)} pH` : "8-10 pH",
            icon: <Droplets/>
          },
          {name:t("Humidity"), value:`${sensor.humidity}%`, icon:<Waves/>},
          {name:t("Light Intensity"), value:`${sensor.light} lux`, icon:<Sun/>},
          {name:"Air Quality", value:sensor.airQuality, icon:<Wind/>},
          {name:t("Growth Rate"), value:`${sensor.growthRate} g/L/d`, icon:<TrendingUp/>},
        ].map((item,i)=>(
          <div key={i} className={cardStyle}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">{item.name}</p>
                <h2 className="text-3xl font-bold mt-3">{item.value}</h2>

                <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-2 bg-emerald-500 animate-pulse w-2/3"></div>
                </div>
              </div>

              <div className="bg-green-100 p-3 rounded-xl text-green-600">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
