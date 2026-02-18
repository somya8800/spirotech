import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  /* ===== SCROLL ANIMATION ===== */
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="overflow-hidden bg-gradient-to-b from-emerald-50 via-teal-50 to-emerald-100">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/main cover video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <span className="inline-block bg-emerald-500/80 px-5 py-2 rounded-full text-sm mb-6 backdrop-blur-md shadow-lg">
            {t("heroBadge")}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("heroTitle")} <span className="text-cyan-300">{t("spirulina")}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            {t("heroDescription")}
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 px-10 py-4 rounded-xl text-white font-semibold shadow-xl hover:scale-105 transition"
          >
            {t("goToDashboard")}
          </button>
        </motion.div>
      </section>

      {/* ================= LIVE IMPACT ================= */}
      <section className="py-16 px-6 md:px-20 overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {[
            { title: "98%", desc: "Culture Health Accuracy" },
            { title: "AI", desc: "Smart Monitoring System" },
            { title: "24/7", desc: "Real-time Tracking" },
            { title: "Eco+", desc: "Sustainable Production" },
            { title: "98%", desc: "Culture Health Accuracy" },
            { title: "AI", desc: "Smart Monitoring System" },
            { title: "24/7", desc: "Real-time Tracking" },
            { title: "Eco+", desc: "Sustainable Production" },
            { title: "20x", desc: "More Protein Than Soybeans" },
            { title: "AI+", desc: "Smart Culture Optimization" },
            { title: "CO₂ ↓", desc: "Carbon Absorption System" },
            { title: "O₂ ↑", desc: "Natural Oxygen Production" },
            { title: "Nano", desc: "Microalgae Intelligence" },
            { title: "EcoGrow", desc: "Low Water Consumption" },
            { title: "Real-Time", desc: "Sensor Based Analysis" },
            { title: "BioTech", desc: "Next-Gen Food Research" },
            { title: "Space-Ready", desc: "NASA Studied Superfood" },
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-center"
            >
              <h3 className="text-3xl font-bold text-emerald-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= INFO SECTIONS ================= */}
      {[
        {
          img: "/what.png",
          title: t("what Is Spirulina?"),
          desc:
            "Spirulina is a blue-green microalgae rich in protein, vitamins, and antioxidants. It is consumed worldwide as a natural superfood.",
        },
        {
          img: "/health.png",
          title: t("health Benefits"),
          desc:
            "Spirulina boosts immunity, increases energy, and supports heart health. Its high nutrition makes it ideal for daily use.",
        },
        {
          img: "/environment.png",
          title: t("Environmental Impact"),
          desc:
            "Spirulina requires very little water and land. It absorbs carbon dioxide and releases oxygen, making it environmentally sustainable.",
        },
        {
          img: "image.png",
          title: t("Future Of Food"),
          desc:
            "Studied by NASA, Spirulina is considered a future food solution due to its high nutrition and low environmental impact.",
        },
      ].map((item, i) => (
        <motion.section
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative py-24 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-20 relative">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[520px] object-cover rounded-2xl shadow-xl"
            />

            <div className="md:absolute md:top-16 md:left-10 bg-white/85 backdrop-blur-lg p-10 rounded-2xl shadow-lg max-w-xl mt-10 md:mt-0 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition">
              <span className="bg-amber-300 text-gray-800 text-xs font-semibold px-4 py-2 rounded">
                INFO
              </span>

              <h2 className="text-4xl font-bold text-green-800 mt-6">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        </motion.section>
      ))}

      {/* ================= AI INSIGHTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white py-20 px-6 md:px-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          AI Powered Culture Insights
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-emerald-100 mb-10">
          Spirotech continuously analyzes water quality and growth patterns.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "pH level optimal for growth",
            "Harvest expected in 48 hours",
            "Light intensity perfectly balanced",
          ].map((text, i) => (
            <motion.div
              key={i}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      {/* YOUR ORIGINAL FOOTER — UNCHANGED */}
      <footer className="bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 text-gray-100 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-12">

          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="WhatsApp Image 2026-02-15 at 2.03.50 PM.jpeg"
                alt="Spirotech Logo"
                className="w-14 h-14 rounded-full shadow-lg"
              />
              <h3 className="text-2xl font-bold">Spirotech</h3>
            </div>

            <p className="text-emerald-100 text-sm">
              AI powered Spirulina monitoring platform focused on sustainable cultivation.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <a href="https://www.instagram.com/spirotech_?igsh=MWNxZHY4aXExb2prYw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                📸 Instagram
              </a>
              <a href="https://x.com/spirotech_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                🐦 Twitter / X
              </a>
              <a href="https://chat.whatsapp.com/Dyy9nB4hECh9depLaefgZs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-5">Contact</h4>
            <p>📞 Rimjhim Verma — +91 95405 91587</p>
            <p>📞 Somya Prabhakar — +91 88006 73104</p>
            <p>📞 Harsh Bhatia — +91 93114 34725</p>
            <p className="mt-4">✉ info@spirotech.com</p>
          </div>

        </div>

        <div className="text-center text-emerald-200 text-sm mt-12 border-t border-white/20 pt-6">
          © {new Date().getFullYear()} Spirotech. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Home;
