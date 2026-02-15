import {
  Thermometer,
  Droplets,
  Waves,
  Sun,
  TrendingUp,
  Wind,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const Dashboard = () => {
  const { t } = useTranslation();

  /* LIVE SENSOR STATE */
  const [sensor, setSensor] = useState({
    temperature: 0,
    humidity: 0,
    light: 0,
    airQuality: 0,
    phLevel:0,
    growthRate:0,
  });

  /* FIREBASE REALTIME LISTENER */
  useEffect(() => {
    const sensorRef = ref(db, "sensors");

    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensor(data);
      }
    });
  }, []);
  /* ===== STATUS LOGIC ===== */

const getTempStatus = (temp:number) =>
  temp >= 28 && temp <= 35
    ? { label: t("normal"), color: "bg-green-100 text-green-600" }
    : { label: t("warning"), color: "bg-yellow-100 text-yellow-600" };

const getHumidityStatus = (h:number) =>
  h >= 40 && h <= 80
    ? { label: t("normal"), color: "bg-green-100 text-green-600" }
    : { label: t("warning"), color: "bg-yellow-100 text-yellow-600" };

const getLightStatus = (l:number) =>
  l >= 2500 && l <= 7500
    ? { label: t("normal"), color: "bg-green-100 text-green-600" }
    : { label: t("warning"), color: "bg-yellow-100 text-yellow-600" };

const getAirStatus = (a:number) =>
  a >= 900 && a <= 1600
    ? { label: "Normal", color: "bg-green-100 text-green-600" }
    : { label: "Warning", color: "bg-yellow-100 text-yellow-600" };

const getPhStatus = (a:number) =>
  a >= 8.5 && a <= 10.5
    ? { label: "Normal", color: "bg-green-100 text-green-600" }
    : { label: "Warning", color: "bg-yellow-100 text-yellow-600" };

const getGrowthStatus = (a:number) =>
  a >= 0.8 && a <= 2.5
    ? { label: "Normal", color: "bg-green-100 text-green-600" }
    : { label: "Warning", color: "bg-yellow-100 text-yellow-600" };

const tempStatus = getTempStatus(sensor.temperature);
const phStatus = getPhStatus(sensor.phLevel);
const growthStatus = getGrowthStatus(sensor.growthRate);
const humidityStatus = getHumidityStatus(sensor.humidity);
const lightStatus = getLightStatus(sensor.light);
const airStatus = getAirStatus(sensor.airQuality);

  /* reusable card style */
  const cardStyle =
    "bg-white/80 backdrop-blur-lg p-6 rounded-2xl " +
    "shadow-md hover:shadow-xl hover:-translate-y-1 " +
    "transition-all duration-300 border border-white/40 hover:border-green-200";

  return (
    <div className="space-y-8 min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("realTimeDashboard")}
        </h1>
        <p className="text-gray-500 mt-1">
          {t("liveSensorReading")}
        </p>
      </div>

      {/* System Status */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border p-6 flex items-center gap-4">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-70"></div>
        </div>

        <div>
          <p className="font-semibold text-gray-800">
            {t("systemStatus")} : {t("online")}
          </p>
          <p className="text-sm text-gray-500">
            {t("allSensors")} • Live Monitoring
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Temperature */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">{t("temperature")}</p>
              <h2 className="text-3xl font-bold mt-4 tracking-tight transition-all duration-500">
                {sensor.temperature}°C
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 28–35°C
              </p>
            </div>
            <div className="mt-6">
              <span className={`${tempStatus.color} text-sm px-4 py-1 rounded-full`}>
                {tempStatus.label}
              </span>
            </div>
            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <Thermometer className="text-green-600" size={40}/>
            </div>
          </div>
        </div>

        {/* pH Level */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">{t("phLevel")}</p>
              <h2 className="text-3xl font-bold mt-4">9.6</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 8.5–10.5
              </p>
            </div>
            <div className="mt-6">
              <span className={`${phStatus.color} text-sm px-4 py-1 rounded-full`}>
                {phStatus.label}
              </span>
            </div>

            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <Droplets className="text-green-600" size={40}/>
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">{t("humidity")}</p>
              <h2 className="text-3xl font-bold mt-4">
                {sensor.humidity}%
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 40–80%
              </p>
            </div>
            <div className="mt-6">
              <span className={`${humidityStatus.color} text-sm px-4 py-1 rounded-full`}>
                {humidityStatus.label}
              </span>
            </div>
            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <Waves className="text-green-600" size={40}/>
            </div>
          </div>
        </div>

        {/* Light */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">{t("lightIntensity")}</p>
              <h2 className="text-3xl font-bold mt-4">
                {sensor.light} lux
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 2500–7500 lux
              </p>
            </div>
            <div className="mt-6">
              <span className={`${lightStatus.color} text-sm px-4 py-1 rounded-full`}>
                {lightStatus.label}
              </span>
            </div>
            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <Sun className="text-green-600" size={40}/>
            </div>
          </div>
        </div>

        {/* Air Quality */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Air Quality</p>
              <h2 className="text-3xl font-bold mt-4">
                {sensor.airQuality}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")}: 900-1600
              </p>
            </div>
            <div className="mt-6">
              <span className={`${airStatus.color} text-sm px-4 py-1 rounded-full`}>
                {airStatus.label}
              </span>
            </div>

            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <Wind className="text-green-600" size={40}/>
            </div>
          </div>
        </div>

        {/* Growth Rate */}
        <div className={cardStyle}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">{t("growthRate")}</p>
              <h2 className="text-3xl font-bold mt-4">1.7 g/L/d</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 0.8–2.5 g/L/d
              </p>
            </div>
            <div className="mt-6">
              <span className={`${growthStatus.color} text-sm px-4 py-1 rounded-full`}>
                {growthStatus.label}
              </span>
            </div>

            <div className="bg-green-100 p-3 rounded-xl shadow-inner shadow-green-200">
              <TrendingUp className="text-green-600" size={40}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
