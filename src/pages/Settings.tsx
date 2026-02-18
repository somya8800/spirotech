import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ref, set } from "firebase/database";
import { db } from "../firebase";
import {
  Thermometer,
  Droplets,
  Sun,
  Zap,
  Bell,
} from "lucide-react";

export default function Analytics() {
  const { t } = useTranslation();

  const [autoLight, setAutoLight] = useState(false);
  const [autofan, setAutofan] = useState(false);
  const [autoHeater, setAutoHeater] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [criticalOnly, setCriticalOnly] = useState(false);

  const handleSave = () => {
    alert(t("settingsSaved"));
  };

  return (
    <div className="p-8 min-h-screen">

      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-2">
        {t("automationNotifications")}
      </h1>
      <p className="text-gray-500 mb-8">
        {t("manageControls")}
      </p>

      {/* ---------------- Automation Section ---------------- */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {t("automation")}
        </h2>
        <p className="text-gray-500 mb-6">
          {t("toggleControls")}
        </p>

        <div className="space-y-4">

          {/* ✅ LIGHT CONTROL */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Sun size={22} className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">{t("autoLight")}</h3>
                <p className="text-sm text-gray-500">
                  {t("autoLightDesc")}
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={autoLight}
              onChange={() => {
                const newValue = !autoLight;
                setAutoLight(newValue);

                // Firebase write
                set(ref(db, "controls/light"), newValue ? 1 : 0);
              }}
            />
          </div>

          {/* ✅ FAN CONTROL */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Droplets size={22} className="text-blue-500" />
              <div>
                <h3 className="font-semibold">{t("autofan")}</h3>
                <p className="text-sm text-gray-500">
                  {t("autofanDesc")}
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={autofan}
              onChange={() => {
                const newValue = !autofan;
                setAutofan(newValue);

                // Firebase write
                set(ref(db, "controls/fans"), newValue ? 1 : 0);
              }}
            />
          </div>

          {/* ✅ MANUAL MODE SWITCH */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Thermometer size={22} className="text-red-500" />
              <div>
                <h3 className="font-semibold">{t("autoHeater")}</h3>
                <p className="text-sm text-gray-500">
                  {t("autoHeaterDesc")}
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={autoHeater}
              onChange={() => {
                const newValue = !autoHeater;
                setAutoHeater(newValue);

                // Firebase write
                set(ref(db, "controls/manualMode"), newValue ? 1 : 0);
              }}
            />
          </div>

        </div>
      </div>

      {/* ---------------- Notifications Section ---------------- */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {t("notifications")}
        </h2>
        <p className="text-gray-500 mb-6">
          {t("configureAlerts")}
        </p>

        <div className="space-y-4">

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Bell size={22} className="text-green-600" />
              <div>
                <h3 className="font-semibold">{t("emailAlerts")}</h3>
                <p className="text-sm text-gray-500">
                  {t("emailAlertsDesc")}
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Zap size={22} className="text-purple-500" />
              <div>
                <h3 className="font-semibold">{t("criticalAlerts")}</h3>
                <p className="text-sm text-gray-500">
                  {t("criticalAlertsDesc")}
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={criticalOnly}
              onChange={() => setCriticalOnly(!criticalOnly)}
            />
          </div>

        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {t("saveSettings")}
        </button>
      </div>

    </div>
  );
}
