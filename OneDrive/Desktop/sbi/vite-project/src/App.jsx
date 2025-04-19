import React from "react";
import { motion } from "framer-motion";
import { Download, ShieldCheck, Award } from "lucide-react";
import brochureCover from "./assets/brochureCover.jpeg";
import happyClient from "./assets/happyClient.jpeg";
import "./App.css";

const features = [
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Guaranteed Payouts",
    description:
      "Receive guaranteed education fund payouts 4 years before your child turns 18.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    title: "Life Protection",
    description:
      "Secure cover for the parent/legal guardian so your child is protected even if the unexpected happens.",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: "Flexible Premiums",
    description:
      "Choose a premium payment term that fits your budget—annual, semi‑annual, or monthly.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    title: "Tax Savings",
    description:
      "Enjoy tax benefits under Section 80C and 10(10D) of the Income Tax Act.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-yellow-100">
      {/* Hero Section */}
      <motion.header
        className="relative bg-gradient-to-r from-yellow-600 to-pink-500 text-white py-32 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 via-pink-600 to-red-500 bg-opacity-60"></div>
        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <motion.h1
            className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            SBI Life – Smart Champ Child Plan
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Invest in their dreams today. Secure their tomorrow forever.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-yellow-500 hover:to-pink-600 transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <motion.section
          className="space-y-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Why Choose Smart Champ Child Plan?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            A smart, flexible, and secure way to build an education fund for your child’s future.
          </p>
        </motion.section>

        <section>
          <h2 className="text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Key Benefits
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="bg-gradient-to-r from-pink-200 to-yellow-200 p-3 rounded-full shadow-lg">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-xl text-yellow-700">{f.title}</h3>
                  <p className="text-gray-700 mt-1">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brochure Section */}
        <motion.section
          className="bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={brochureCover}
            alt="Brochure Cover"
            className="w-48 h-auto rounded-lg shadow-xl"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-yellow-700">
              Download Our Brochure
            </h2>
            <p className="text-gray-700 mt-2">
              Everything you need to know about coverage, premiums & tax benefits.
            </p>
            <a
              href="/brochures/child-plan.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-yellow-600 shadow-xl transition-all"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="bg-gradient-to-r from-yellow-50 via-pink-50 to-orange-50 border border-yellow-200 p-8 rounded-2xl shadow-xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-yellow-700">What Our Clients Say</h2>
          <img
            src={happyClient}
            alt="Happy client"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 italic">
            “Mythili madam helped us understand the plan with so much care. We feel secure now.”
          </p>
          <p className="mt-2 text-sm text-gray-500">– Ramesh & Family, Coimbatore</p>
        </motion.section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Ready to Start?</h2>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-yellow-600 transition-all"
          >
            Talk to Our Advisor
          </a>
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6 text-yellow-700">Get in Touch</h2>
          <div className="inline-block bg-white p-8 rounded-2xl shadow-lg text-left space-y-3 max-w-md w-full">
            <p><strong>Name:</strong> Mythili C</p>
            <p><strong>Phone:</strong> +91-8884695310</p>
            <p><strong>Email:</strong> cmythilisree@gmail.com</p>
            <p><strong>Location:</strong> Erode, Tamil Nadu</p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-600 to-pink-500 text-white text-center py-6">
        &copy; 2025 SBI Life Advisor | Mythili C
      </footer>
    </div>
  );
}

