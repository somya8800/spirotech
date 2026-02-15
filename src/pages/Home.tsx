import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">

      {/* ================= HERO WITH VIDEO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/main cover video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <span className="inline-block bg-green-600/80 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-md">
            {t("heroBadge")}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t("heroTitle")}{" "}
            <span className="text-green-400">{t("spirulina")}</span>
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
              <div className="h-72 md:h-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

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

{/* ================= FOOTER ================= */}
<footer className="bg-green-700 text-gray-100 px-0 py-12 w-full">
  <div className="max-w-full mx-auto grid md:grid-cols-3 gap-12 px-6 md:px-20">

    {/* Services */}
    <div>
      <h4 className="text-xl font-bold mb-4 text-green-100">Services</h4>
      <ul className="space-y-2 text-green-100">
        <li>Spirulina Products</li>
        <li>Health Consultations</li>
        <li>Environmental Awareness</li>
        <li>Future Food Innovations</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-xl font-bold mb-4 text-green-100">Contact Us</h4>
      <ul className="space-y-2 text-green-100">
        <li>Rimjhim Verma: <a href="tel:+919540591587" className="underline hover:text-green-300">+91 95405 91587</a></li>
        <li>Somya Prabhakar: <a href="tel:+918800673104" className="underline hover:text-green-300">+91 88006 73104</a></li>
        <li>Harsh Bhatia: <a href="tel:+919311434725" className="underline hover:text-green-300">+91 93114 34725</a></li>
        <li>Email: <a href="mailto:info@spirulina.com" className="underline hover:text-green-300">info@spirulina.com</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-xl font-bold mb-4 text-green-100">Follow Us</h4>
      <div className="flex space-x-6">

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5C19.65 2 22 4.35 22 7.75v8.5C22 19.65 19.65 22 16.25 22h-8.5C4.35 22 2 19.65 2 16.25v-8.5C2 4.35 4.35 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zm4.25 2.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 2a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm4.75-.5a1 1 0 110 2 1 1 0 010-2z" />
          </svg>
          <span className="text-green-100">Instagram</span>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.3 8.3 0 01-2.71 1.03 4.15 4.15 0 00-7.1 3.78A11.78 11.78 0 013 4.6a4.15 4.15 0 001.28 5.53 4.13 4.13 0 01-1.88-.52v.05a4.16 4.16 0 003.33 4.07 4.2 4.2 0 01-1.87.07 4.16 4.16 0 003.88 2.89 8.33 8.33 0 01-5.16 1.78c-.33 0-.66-.02-.98-.06a11.75 11.75 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.35 8.35 0 0024 4.56a8.3 8.3 0 01-2.39.65 4.15 4.15 0 001.82-2.29z" />
          </svg>
          <span className="text-green-100">Twitter</span>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/919540591587" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 flex items-center space-x-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.918-2.21-.242-.579-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.273-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.991.523 3.842 1.432 5.422L2 22l4.64-1.386A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
          <span className="text-green-100">WhatsApp</span>
        </a>

      </div>
    </div>

  </div>

  <div className="mt-12 text-center text-green-200 text-sm">
    &copy; {new Date().getFullYear()} Spirulina. All rights reserved.
  </div>
</footer>



    </div>
  );
};

export default Home;
