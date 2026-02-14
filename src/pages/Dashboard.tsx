import {
  Thermometer,
  Droplets,
  Waves,
  Sun,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">

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
      <div className="bg-white rounded-2xl shadow-sm border p-6 flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div>
          <p className="font-semibold text-gray-800">
            {t("systemStatus")} : {t("online")}
          </p>
          <p className="text-sm text-gray-500">
            {t("allSensors")} • {t("lastUpdate")}
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-6">

        {/* Temperature */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 font-medium">{t("temperature")}</p>
              <h2 className="text-3xl font-bold mt-4">33.7°C</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 28–35°C
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Thermometer className="text-green-600" size={20} />
            </div>
          </div>

          <div className="mt-6">
            <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
              {t("normal")}
            </span>
          </div>
        </div>

        {/* pH Level */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 font-medium">{t("phLevel")}</p>
              <h2 className="text-3xl font-bold mt-4">9.6</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 8.5–10.5
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Droplets className="text-green-600" size={20} />
            </div>
          </div>

          <div className="mt-6">
            <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
              {t("normal")}
            </span>
          </div>
        </div>

        {/* Water Level */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 font-medium">{t("waterLevel")}</p>
              <h2 className="text-3xl font-bold mt-4">95%</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 65–100%
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Waves className="text-green-600" size={20} />
            </div>
          </div>

          <div className="mt-6">
            <span className="bg-yellow-100 text-yellow-600 text-sm px-4 py-1 rounded-full">
              {t("warning")}
            </span>
          </div>
        </div>

        {/* Light Intensity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 font-medium">{t("lightIntensity")}</p>
              <h2 className="text-3xl font-bold mt-4">2583 lux</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 2500–7500 lux
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Sun className="text-green-600" size={20} />
            </div>
          </div>

          <div className="mt-6">
            <span className="bg-yellow-100 text-yellow-600 text-sm px-4 py-1 rounded-full">
              {t("warning")}
            </span>
          </div>
        </div>

        {/* Growth Rate */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 font-medium">{t("growthRate")}</p>
              <h2 className="text-3xl font-bold mt-4">1.7 g/L/d</h2>
              <p className="text-sm text-gray-400 mt-2">
                {t("range")} : 0.8–2.5 g/L/d
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="text-green-600" size={20} />
            </div>
          </div>

          <div className="mt-6">
            <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
              {t("normal")}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
