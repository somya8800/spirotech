import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import jsPDF from "jspdf";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Education = () => {
  const { t } = useTranslation();

  /* ================= ARTICLES ================= */
  const articles = [
    {
      title: t("edu.articles.what", "What is Spirulina?"),
      img: "/what.png",
      short: t(
        "edu.articles.whatDesc",
        "Protein rich blue-green algae used as a future superfood."
      ),
      link: "https://www.medicalnewstoday.com/articles/324681",
    },
    {
      title: t("edu.articles.health", "Health Benefits"),
      img: "/health.png",
      short: t(
        "edu.articles.healthDesc",
        "Boosts immunity, improves energy and supports heart health."
      ),
      link: "https://www.healthline.com/nutrition/10-proven-benefits-of-spirulina",
    },
    {
      title: t("edu.articles.env", "Environmental Impact"),
      img: "/environment.png",
      short: t(
        "edu.articles.envDesc",
        "Eco-friendly cultivation using very little water."
      ),
      link: "https://www.fao.org/fao-stories/article/en/c/1630331/",
    },
  ];

  /* ================= PIE DATA ================= */
  const usageData = [
    { name: t("edu.usage.india", "India"), value: 30 },
    { name: t("edu.usage.usa", "USA"), value: 20 },
    { name: t("edu.usage.japan", "Japan"), value: 18 },
    { name: t("edu.usage.europe", "Europe"), value: 17 },
    { name: t("edu.usage.others", "Others"), value: 15 },
  ];

  const COLORS = ["#059669", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0"];

  /* ================= QUIZ ================= */
  const questionBank = [
    {
      q: t("edu.quiz.q1", "Ideal pH range?"),
      options: [
        t("edu.quiz.o1a", "5-6"),
        t("edu.quiz.o1b", "8.5-10.5"),
        t("edu.quiz.o1c", "3-4"),
        t("edu.quiz.o1d", "12+"),
      ],
      answer: 1,
    },
    {
      q: t("edu.quiz.q2", "Spirulina is?"),
      options: [
        t("edu.quiz.o2a", "Algae"),
        t("edu.quiz.o2b", "Fungus"),
        t("edu.quiz.o2c", "Plant"),
        t("edu.quiz.o2d", "Mineral"),
      ],
      answer: 0,
    },
    {
      q: t("edu.quiz.q3", "Best temperature?"),
      options: [
        t("edu.quiz.o3a", "10°C"),
        t("edu.quiz.o3b", "30-35°C"),
        t("edu.quiz.o3c", "50°C"),
        t("edu.quiz.o3d", "5°C"),
      ],
      answer: 1,
    },
    {
      q: t("edu.quiz.q4", "Main benefit?"),
      options: [
        t("edu.quiz.o4a", "Protein"),
        t("edu.quiz.o4b", "Sugar"),
        t("edu.quiz.o4c", "Fat"),
        t("edu.quiz.o4d", "Salt"),
      ],
      answer: 0,
    },
  ];

  const [questions, setQuestions] = useState<any[]>([]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("");
  const [progress, setProgress] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [verifyID, setVerifyID] = useState("");

  useEffect(() => {
    const shuffled = [...questionBank]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setQuestions(shuffled);
  }, []);

  if (!questions.length) return null;

  /* ================= NEXT ================= */
  const handleNext = () => {
    let newScore = score;
    if (selected === questions[step].answer) newScore++;

    setScore(newScore);
    setSelected(null);
    setProgress(((step + 1) / questions.length) * 100);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      let lvl = t("edu.level.beginner", "Beginner 🌱");
      if (newScore === 2)
        lvl = t("edu.level.advanced", "Advanced Grower 🌿");
      if (newScore === 3)
        lvl = t("edu.level.expert", "Spirulina Expert 🧪");

      setLevel(lvl);
      setVerifyID("SPIRO-" + Math.floor(Math.random() * 999999));
      setShowCertificate(true);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">

      {/* ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
          📚 {t("edu.articles.title", "Spirulina Articles")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <img src={a.img} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-600">{a.short}</p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-emerald-600 mt-3 font-semibold hover:underline"
                >
                  {t("edu.readMore", "Read More")} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PIE */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">
          🌍 {t("edu.usage.title", "Global Spirulina Usage")}
        </h2>

        <div className="h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={usageData} dataKey="value" outerRadius={110}>
                {usageData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* QUIZ */}
      <section className="text-center pb-24 px-6">
        <h2 className="text-4xl font-bold text-emerald-800 mb-6">
          🧠 {t("edu.quiz.title", "Spirulina Quiz")}
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold mb-6">
            {questions[step].q}
          </h3>

          {questions[step].options.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`block w-full mb-3 p-3 rounded-lg border
              ${
                selected === i
                  ? "bg-emerald-500 text-white"
                  : "hover:bg-emerald-50"
              }`}
            >
              {opt}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={selected === null}
            className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded-xl"
          >
            {t("edu.next", "Next")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Education;
