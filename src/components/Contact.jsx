import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [focusedField, setFocusedField] = useState(null);

    const handleFocus = (field) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm">Get in Touch</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
                        Let's Start a Conversation
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                        Whether you have a question about our programs, want to volunteer, or just want to say hello, we're here to listen.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Contact Info Cards */}
                    <div className="w-full lg:w-5/12 space-y-8">
                        {[
                            { icon: MapPin, title: "Visit Us", content: "Behind TVS Showroom, Shastri Nagar, Barmer, Rajasthan", color: "bg-emerald-500" },
                            { icon: Phone, title: "Call Us", content: "+91 94139 42612", color: "bg-green-500" },
                            { icon: Mail, title: "Email Us", content: "fiftyvillagersorg@gmail.com", color: "bg-teal-500" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group cursor-pointer"
                            >
                                <div className={`p-4 rounded-xl ${item.color} text-white mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-8">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-4 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 shadow-md transition-all"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-7/12 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'name' || formState.name ? '-top-3 text-xs bg-white dark:bg-gray-800 px-2 text-emerald-500' : 'top-4 text-gray-500'}`}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'email' || formState.email ? '-top-3 text-xs bg-white dark:bg-gray-800 px-2 text-emerald-500' : 'top-4 text-gray-500'}`}>
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'message' || formState.message ? '-top-3 text-xs bg-white dark:bg-gray-800 px-2 text-emerald-500' : 'top-4 text-gray-500'}`}>
                                    Your Message
                                </label>
                                <textarea
                                    rows="6"
                                    onFocus={() => handleFocus('message')}
                                    onBlur={handleBlur}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
