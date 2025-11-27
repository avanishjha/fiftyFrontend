import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

const MagneticButton = ({ children, className, variant = 'primary' }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
    };

    const item = {
        hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
        show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <ParallaxSection
            videoSrc="/hero-video.mp4"
            overlayOpacity={0.6}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto text-center text-white"
            >
                <motion.h2 variants={item} className="text-emerald-400 font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base font-sans">
                    Service Organization
                </motion.h2>

                <motion.h1
                    variants={item}
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tighter mb-8 font-sans"
                >
                    Empowering<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                        Communities
                    </span>
                </motion.h1>

                <motion.p variants={item} className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light font-body">
                    Building futures through free education and holistic development.
                    <br />
                    <span className="text-sm opacity-80 mt-2 block">Dedicated to Dr. APJ Abdul Kalam’s Vision 2020.</span>
                </motion.p>

                <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 justify-center">
                    <MagneticButton className="px-10 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-full transition-all shadow-2xl text-lg font-sans">
                        Donate Now
                    </MagneticButton>
                    <MagneticButton className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-black font-bold rounded-full transition-all text-lg font-sans">
                        Our Story
                    </MagneticButton>
                </motion.div>
            </motion.div>
        </ParallaxSection>
    );
};

export default Hero;
