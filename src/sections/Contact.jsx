/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_6rj51i9",
        "template_vtzjdaa",
        {
          from_name: formData.name,
          to_name: "Jeel",
          from_email: formData.email,
          to_email: "jeelrajpara18@gmail.com",
          message: formData.message,
        },
        "IPoP18pFv3efjnQYt"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" , subject : ""});
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto relative z-20 px-4 py-20"
    >
        {showAlert && <Alert type={alertType} text={alertMessage} />}
      <motion.div
        className="text-heading font-mono"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get in touch
      </motion.div>
      <div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-5">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-slate-800/50 border border-blue-900/50 rounded-lg p-6 shadow-lg shadow-blue-500/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-400">jeelrajpara18@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-800/50 border border-blue-900/50 rounded-lg p-6 shadow-lg shadow-blue-500/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-400">+91 7016282785</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-800/50 border border-blue-900/50 rounded-lg p-6 shadow-lg shadow-blue-500/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-blue-900/50 rounded-xl p-8 shadow-lg shadow-blue-500/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Your name"
                    className=" h-12 border bg-pink placeholder:text-neutral-400 border-transparent focus:border-blue-500/20 focus:outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="h-12 border bg-pink placeholder:text-neutral-400 border-transparent focus:border-blue-500/20 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="h-12 border bg-pink placeholder:text-neutral-400 border-transparent focus:border-blue-500/20 focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="h-12 border bg-pink placeholder:text-neutral-400 border-transparent focus:border-blue-500/20 focus:outline-none transition"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-500 text-gray-900 font-semibold h-12 text-lg transition-colors"
              >
                {!isLoading ? "Send" : "Sending..."}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
