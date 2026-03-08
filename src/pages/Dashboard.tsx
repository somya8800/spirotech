import {
  Thermometer,
  Droplets,
  Waves,
  Sun,
  TrendingUp,
  Wind,
  Brain,
  Camera,
} from "lucide-react";

import FloatingAIChat from "../components/FloatingAIChat";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const Dashboard = () => {

  const { t } = useTranslation();

  const CAMERA_STREAM_URL = "http://10.206.183.200:81/stream"; // <-- CHANGE THIS

  const [sensor, setSensor] = useState({
    temperature: 0,
    humidity: 0,
    light: 0,
    airQuality: 0,
    phLevel: 0,
    growthRate: 0,
  });

  const [alertBanner, setAlertBanner] = useState<{ type: string; msg: string } | null>(null);
  const [cameraUrl, setCameraUrl] = useState<string>("");
  const [cameraOnline, setCameraOnline] = useState(true);
  const [aiHealth, setAiHealth] = useState(0);
  const [aiStatus, setAiStatus] = useState("");

  useEffect(() => {

    const sensorRef = ref(db, "sensors");
    const cameraRef = ref(db, "camera/stream");
    const aiRef = ref(db, "ai");
    onValue(aiRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAiHealth(data.health);
        setAiStatus(data.status);
      }
    });

    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setSensor(data);
    });
    onValue(cameraRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      setCameraUrl(data);
      setCameraOnline(true);
    }
  });
  }, []);

  /* ================= HEALTH SCORE ================= */

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

  /* ================= AI RECOMMENDATION ================= */

  const getAIRecommendation = () => {

    if (sensor.phLevel < 8.5)
      return "⚠ pH LOW — Add alkaline solution.";

    if (sensor.phLevel > 10.5)
      return "⚠ pH HIGH — Dilute culture.";

    if (sensor.temperature < 28)
      return "🌡 Temperature low — Increase sunlight.";

    if (sensor.temperature > 35)
      return "🔥 Temperature high — Activate cooling.";

    if (sensor.light < 2500)
      return "💡 Light insufficient — Increase LED intensity.";

    if (sensor.airQuality < 900)
      return "🌬 Air circulation weak — Increase aeration.";

    if (healthScore > 85)
      return "✅ Culture Stable — Optimal Growth.";

    return "⚠ Parameter fluctuation detected.";
  };

  const aiMessage = getAIRecommendation();

  /* ================= SMART ALERT ================= */

  useEffect(() => {

    let newAlert = null;

    if (sensor.temperature > 35)
      newAlert = { type: "alert", msg: "Temperature too high!" };

    else if (sensor.temperature < 28)
      newAlert = { type: "warning", msg: "Temperature too low." };

    else if (sensor.phLevel < 8.5)
      newAlert = { type: "warning", msg: "pH level low." };

    else if (sensor.phLevel > 10.5)
      newAlert = { type: "alert", msg: "pH level too high!" };

    else if (sensor.light < 2500)
      newAlert = { type: "warning", msg: "Light intensity low." };

    else if (sensor.airQuality < 900)
      newAlert = { type: "warning", msg: "Air circulation weak." };

    if (newAlert) {

      setAlertBanner(newAlert);

      setTimeout(() => {
        setAlertBanner(null);
      }, 5000);

    }

  }, [sensor]);

  /* ================= CARD STYLE ================= */

  const cardStyle =
    "bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/40";

  const alertCard =
    "ring-2 ring-red-500 animate-pulse";

  return (
    <div className="space-y-8 min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6">

      {/* ================= ALERT BANNER ================= */}

      {alertBanner && (
        <div
          className={`fixed left-0 top-1/2 -translate-y-1/2 w-full py-4 text-center text-lg font-semibold shadow-2xl z-50 backdrop-blur-xl border border-white/30 alert-slide
          ${
            alertBanner.type === "alert"
              ? "bg-red-500/90 text-white"
              : "bg-yellow-400/90 text-black"
          }`}
        >
          {alertBanner.type === "alert" ? "⚠ ALERT: " : "⚠ WARNING: "}
          {alertBanner.msg}
        </div>
      )}

      {/* ================= HEADER ================= */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("Real Time Dashboard")}
        </h1>

        <p className="text-gray-500">
          {t("Live Sensor Reading")}
        </p>
      </div>

      {/* ================= SYSTEM STATUS ================= */}

      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">

  <div className="flex items-center gap-4">

    <div className="relative">
      <div className="w-4 h-4 bg-white rounded-full"></div>
      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-70"></div>
    </div>

    <div>
      <h3 className="text-lg font-semibold">System Status</h3>
      <p className="text-sm opacity-80">
        All sensors active • AI monitoring running
      </p>
    </div>

  </div>

  <div className="text-right">
    <p className="text-sm opacity-80">Culture Health</p>
    <p className="text-3xl font-bold">{healthScore.toFixed(0)}%</p>
  </div>

</div>

      {/* ================= AI RECOMMENDATION ================= */}

      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">

  <Brain className="animate-pulse" size={40} />

  <div>
    <h3 className="font-semibold text-lg">AI Recommendation</h3>
    <p className="text-sm opacity-90">
      {aiMessage}
    </p>
  </div>

</div>
      {/* ================= AI CULTURE ANALYSIS ================= */}

<div className="shadow-[0_10px_40px_rgba(16,185,129,0.15)] bg-gradient-to-br from-emerald-50 via-white to-teal-50 
rounded-2xl shadow-xl border border-white/40 backdrop-blur-lg p-6">

  {/* Header */}

  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-3">

      <Brain className="text-emerald-600 animate-pulse" size={28} />

      <h2 className="text-lg font-semibold text-gray-800">
        AI Culture Analysis
      </h2>

    </div>

    <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-medium">
      LIVE AI
    </span>

  </div>

  {/* Health Meter */}

  <div className="flex flex-col items-center">

    <div className="relative w-40 h-40">

      <svg className="w-full h-full transform -rotate-90">

        {/* background ring */}

        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="#e5e7eb"
          strokeWidth="12"
          fill="none"
        />

        {/* progress ring */}

        <circle
          cx="80"
          cy="80"
          r="70"
          stroke={
            aiHealth > 70
              ? "#10b981"
              : aiHealth > 40
              ? "#f59e0b"
              : "#ef4444"
          }
          strokeWidth="12"
          fill="none"
          strokeDasharray="440"
          strokeDashoffset={440 - (440 * aiHealth) / 100}
          strokeLinecap="round"
          className="transition-all duration-700"
        />

      </svg>

      {/* percentage */}

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <span className="text-3xl font-bold text-gray-800">
          {aiHealth}%
        </span>

        <span className="text-xs text-gray-500">
          Health
        </span>

      </div>

    </div>

    {/* Status */}

    <div className="mt-5 text-center">

      <p className="text-gray-500 text-sm">
        Culture Condition
      </p>

      <p className="font-semibold text-gray-800 mt-1">
        {aiStatus}
      </p>

    </div>

  </div>

</div>


      {/* ================= SENSOR CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {[
          { name: t("Temperature"), value: `${sensor.temperature}°C`, icon: <Thermometer />, alert: sensor.temperature > 35 },
          { name: t("pH Level"), value: sensor.phLevel ? `${sensor.phLevel.toFixed(2)} pH` : "N/A", icon: <Droplets />, alert: sensor.phLevel > 10.5 },
          { name: t("Humidity"), value: `${sensor.humidity}%`, icon: <Waves />, alert: false },
          { name: t("Light Intensity"), value: `${sensor.light} lux`, icon: <Sun />, alert: sensor.light < 2500 },
          { name: "Air Quality", value: sensor.airQuality, icon: <Wind />, alert: sensor.airQuality < 900 },
          { name: t("Growth Rate"), value: sensor.growthRate ? `${sensor.growthRate} g/L/d` : "N/A", icon: <TrendingUp />, alert: false },
        ].map((item, i) => (

          <div key={i} className={`${cardStyle} ${item.alert ? alertCard : ""}`}>

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-600">
                  {item.name}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {item.value}
                </h2>

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
      {/* ================= CAMERA FEED ================= */}

      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 p-[2px] rounded-2xl shadow-2xl">

  {/* Outer tech glow */}
  <div className="rounded-2xl bg-black p-5 relative overflow-hidden">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">

      <div className="flex items-center gap-3">
        <Camera className="text-emerald-400" size={24} />
        <h2 className="text-white text-lg font-semibold tracking-wide">
          AI Vision Monitor
        </h2>
      </div>

      {/* LIVE indicator */}
      <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">

        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        LIVE

      </div>

    </div>

    {/* Camera Frame */}
    <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.3)]">

      {cameraOnline && cameraUrl ? (

        <img
          src={cameraUrl}
          alt="ESP32 Camera"
          className="w-full h-[360px] md:h-[420px] object-cover"
          onError={() => setCameraOnline(false)}
        />

      ) : (

        <div className="h-[360px] md:h-[420px] flex items-center justify-center text-gray-400">
          Camera Offline
        </div>

      )}

      {/* scanning line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-[2px] bg-emerald-400 opacity-70 animate-[scan_3s_linear_infinite]"></div>
      </div>

      {/* top overlay */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-emerald-300 px-4 py-2 rounded-lg text-sm border border-emerald-500/30">
        {aiStatus}
      </div>

      {/* bottom overlay */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm border border-emerald-500/30">
        AI Health:
        <span className="text-emerald-400 font-semibold ml-1">
          {aiHealth}%
        </span>
      </div>

      {/* corner targeting frame */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-emerald-400"></div>

        <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-emerald-400"></div>

        <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-emerald-400"></div>

        <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-emerald-400"></div>

      </div>

    </div>

  </div>

</div>

      <FloatingAIChat sensor={sensor} />

    </div>
  );
};

export default Dashboard;