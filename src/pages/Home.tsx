import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">

      {/* ================= HERO WITH VIDEO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/main cover video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">

          <span className="inline-block bg-green-600/80 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-md">
            {t("heroBadge")}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("heroTitle")}{" "}
            <span className="text-green-400">
              {t("spirulina")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {t("heroDescription")}
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-green-500 px-8 py-3 rounded-xl text-white font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300"
          >
            {t("goToDashboard")}
          </button>

        </div>
      </section>


      {/* ================= WHY SPIRULINA SECTION ================= */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
          {t("whySpirulina")}
        </h2>

        <div className="space-y-20">

          {[
            {
              title: t("whatIsSpirulina"),
              desc: t("whatIsSpirulinaDesc"),
              img: "/what.png",
            },
            {
              title: t("healthBenefits"),
              desc: t("healthBenefitsDesc"),
              img: "/health.png",
            },
            {
              title: t("environmentalImpact"),
              desc: t("environmentalImpactDesc"),
              img: "/environment.png",
            },
            {
              title: t("futureOfFood"),
              desc: t("futureOfFoodDesc"),
              img: "/future.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="h-72 md:h-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-10">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Home;
