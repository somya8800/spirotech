import { BookOpen, Leaf, FlaskConical, Globe } from "lucide-react";

const Education = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-emerald-800">
          Spirulina Education Hub
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
          Learn how Spirulina is transforming sustainable agriculture,
          nutrition and future food systems through science, biotechnology
          and intelligent monitoring.
        </p>
      </section>

      {/* ================= LEARNING CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              icon: <BookOpen size={40} />,
              title: "What is Spirulina?",
              desc: "Spirulina is a microscopic blue-green algae packed with proteins, vitamins and antioxidants widely used as a superfood."
            },
            {
              icon: <Leaf size={40} />,
              title: "Sustainable Farming",
              desc: "It requires less land and water compared to traditional crops, making it ideal for eco-friendly food production."
            },
            {
              icon: <FlaskConical size={40} />,
              title: "Scientific Cultivation",
              desc: "Controlled temperature, pH level and light conditions help optimize growth using smart monitoring systems."
            },
            {
              icon: <Globe size={40} />,
              title: "Global Impact",
              desc: "Spirulina is considered a future solution for malnutrition and sustainable protein supply worldwide."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="text-emerald-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESEARCH SECTION ================= */}
      <section className="relative py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 md:px-20 relative">

          <img
            src="img2.avif"
            alt="Spirulina Research"
            className="w-full h-[520px] object-cover rounded-2xl shadow-xl"
          />

          <div className="md:absolute md:top-16 md:left-10 bg-white p-10 rounded-2xl shadow-2xl max-w-xl mt-10 md:mt-0 hover:-translate-y-2 transition">

            <span className="bg-amber-300 px-4 py-2 text-xs font-semibold rounded">
              RESEARCH
            </span>

            <h2 className="text-4xl font-bold text-emerald-800 mt-6">
              Smart Spirulina Cultivation
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Modern Spirulina farming integrates IoT sensors, AI analytics
              and automated monitoring to maintain optimal culture
              conditions. Real-time tracking of temperature, pH and light
              improves yield efficiency and reduces human effort.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FUTURE SECTION ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold text-emerald-800">
          The Future of Food
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
          With increasing population and climate challenges, Spirulina
          offers a sustainable protein source that supports environmental
          conservation while ensuring global nutritional security.
        </p>
      </section>

    </div>
  );
};

export default Education;
