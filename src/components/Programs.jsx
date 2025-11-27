import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';

const Programs = () => {
    return (
        <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm">Our Offerings</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Holistic Development Ecosystem
                    </h3>
                </div>

                {/* Feature 1: NEET Prep */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">NEET Preparation</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            We provide comprehensive biology coaching for NEET aspirants. Our experienced faculty ensures
                            that every student gets the attention they need to crack one of the toughest exams in India.
                        </p>
                        <ul className="space-y-4">
                            {['Expert Faculty', 'Regular Mock Tests', 'Doubt Solving Sessions'].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
                            altText="NEET Prep"
                            captionText="Education"
                            containerHeight="400px"
                            containerWidth="100%"
                            imageHeight="400px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="bg-black/60 p-4 rounded-lg backdrop-blur-sm w-full">
                                    <h3 className="text-lg font-bold text-white">Academic Excellence</h3>
                                </div>
                            }
                        />
                    </div>
                </div>

                {/* Feature 2: Hostel */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600"
                            altText="Hostel Life"
                            captionText="Community"
                            containerHeight="400px"
                            containerWidth="100%"
                            imageHeight="400px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="bg-black/60 p-4 rounded-lg backdrop-blur-sm w-full">
                                    <h3 className="text-lg font-bold text-white">Home Away From Home</h3>
                                </div>
                            }
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hostel & Library</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Our hostel is more than just a place to stay. It's a community where students learn self-reliance.
                            They manage daily tasks, cooking, and cleaning themselves, fostering a spirit of cooperation.
                        </p>
                        <ul className="space-y-4">
                            {['Free Accommodation', '24/7 Library Access', 'Self-Managed Mess'].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Programs;
