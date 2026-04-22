'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS public key is missing!");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Check environment variables
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      setStatus("❌ EmailJS credentials are missing. Check your .env.local file.");
      console.error("Missing EmailJS credentials in environment variables");
      return;
    }

    // ✅ Validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.email);

    if (!isEmail && !/^\d{10,}$/.test(form.phone)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        contact_info: form.phone,
        user_email: form.email,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });
    })
    .catch((error: any) => {
      console.error("EmailJS Error:", error);
      const errorMessage = error?.text || error?.message || "Unknown error occurred";
      setStatus(`❌ Failed: ${errorMessage}`);
    });
  };

  return (
    <main className="bg-white pt-20">
      
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-base-100 py-20 bg-center bg-cover mt-20"
        style={{ backgroundImage: "url('/contactBG.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-center text-center min-h-[100px]">
          <div className="text-white">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-yellow-400">
              GoBangla Group
            </h1>
            <p className="mb-5 text-lg">Get in touch</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-black">
              Contact Us
            </h2>

            <p className="leading-relaxed mb-6 text-black">
              For inquiries, support, or partnership opportunities:
              <br />
              <span className="font-semibold">Email:</span> info@gobanglagroup.com <br />
              <span className="font-semibold">Phone:</span> +880 1841779908-10 <br />
              <span className="font-semibold">Address:</span> 2/1 block: A, Lalmatia, Dhaka-1207, Bangladesh
            </p>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="bg-[#bebbc4] p-8 rounded-lg shadow-lg"
          >

            {/* Name */}
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full py-3 px-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="w-full py-3 px-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full py-3 px-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full py-3 px-4 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Status */}
            {status && <p className="mb-4 text-center font-semibold">{status}</p>}

            {/* Button */}
            <div className="mt-6 flex justify-center">
              <div className="bg-blue-400 p-2 rounded-xl shadow-md">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </div>

          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}