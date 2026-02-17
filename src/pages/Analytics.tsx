import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

import { useTranslation } from "react-i18next";

/* ================= DATA SETS ================= */

// 24 Hours Data
const data24 = [
  { time: "08 PM", temp: 32, ph: 8.8, growth: 0.5, light: 7500 },
  { time: "10 PM", temp: 34, ph: 9.4, growth: 2.6, light: 3200 },
  { time: "12 AM", temp: 33, ph: 9.0, growth: 1.5, light: 2100 },
  { time: "02 AM", temp: 30, ph: 9.1, growth: 2.3, light: 3500 },
  { time: "04 AM", temp: 29, ph: 8.9, growth: 0.7, light: 7200 },
  { time: "06 AM", temp: 31, ph: 9.0, growth: 1.1, light: 6600 },
];

// 7 Days Data
const data7 = [
  { time: "Mon", temp: 30, ph: 8.8, growth: 1.2, light: 6500 },
  { time: "Tue", temp: 32, ph: 9.1, growth: 2.0, light: 4200 },
  { time: "Wed", temp: 31, ph: 8.9, growth: 1.5, light: 7100 },
  { time: "Thu", temp: 33, ph: 9.3, growth: 2.3, light: 5300 },
  { time: "Fri", temp: 29, ph: 8.7, growth: 1.1, light: 6000 },
  { time: "Sat", temp: 34, ph: 9.4, growth: 2.8, light: 4800 },
  { time: "Sun", temp: 30, ph: 9.0, growth: 1.6, light: 7200 },
];

// 30 Days Data (Weekly grouped)
const data30 = [
  { time: "W1", temp: 30, ph: 8.9, growth: 1.5, light: 6000 },
  { time: "W2", temp: 32, ph: 9.1, growth: 2.1, light: 6500 },
  { time: "W3", temp: 31, ph: 9.0, growth: 1.8, light: 5800 },
  { time: "W4", temp: 33, ph: 9.3, growth: 2.4, light: 7000 },
];

const Analytics = () => {
  const { t } = useTranslation();
  const [range, setRange] = useState("24");

  const currentData =
    range === "24" ? data24 : range === "7" ? data7 : data30;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {t("analytics")}
          </h1>
          <p className="text-gray-500">
            {t("analyticsDescription")}
          </p>
        </div>

        <div className="flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setRange("24")}
            className={`px-4 py-2 rounded-lg text-sm ${
              range === "24"
                ? "bg-green-600 text-white"
                : "text-gray-600"
            }`}
          >
            {t("day24")}
          </button>

          <button
            onClick={() => setRange("7")}
            className={`px-4 py-2 rounded-lg text-sm ${
              range === "7"
                ? "bg-green-600 text-white"
                : "text-gray-600"
            }`}
          >
            {t("day7")}
          </button>

          <button
            onClick={() => setRange("30")}
            className={`px-4 py-2 rounded-lg text-sm ${
              range === "30"
                ? "bg-green-600 text-white"
                : "text-gray-600"
            }`}
          >
            {t("day30")}
          </button>
        </div>
      </div>

      {/* Temperature & pH */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="font-semibold mb-6">
          {t("tempPhOverTime")}
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" domain={[25, 40]} />
              <YAxis yAxisId="right" orientation="right" domain={[7, 12]} />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#16a34a" strokeWidth={3}/>
              <Line yAxisId="right" type="monotone" dataKey="ph" stroke="#059669" strokeWidth={3}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-6">

        {/* Growth Rate */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold mb-6">
            {t("growthRate")}
          </h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 4]} />
                <Tooltip />
                <Bar dataKey="growth" fill="#15803d" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Light Intensity */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold mb-6">
            {t("lightIntensityPattern")}
          </h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 10000]} />
                <Tooltip />
                <Area type="monotone" dataKey="light" stroke="#0ea5e9" fill="#bae6fd" strokeWidth={2}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
