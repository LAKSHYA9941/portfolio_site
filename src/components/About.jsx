import React from 'react';
import { motion } from 'framer-motion';
import Certis from './Certis';
import Education from './Education';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full w-full space-y-6 text-left text-base leading-relaxed mx-auto p-8 overflow-y-auto scrollbar-hide"
        >
            <h1 className="text-3xl font-bold border-b border-white/20 pb-2">About Me</h1>
            <p>
                I am a Full Stack Developer with a passion for building dynamic and responsive web applications.
                My expertise lies in JavaScript, React.js, Node.js, and MongoDB, allowing me to create robust and scalable solutions.
            </p>
            <p>
                I enjoy working on challenging projects that require innovative problem-solving and collaboration.
                My goal is to continuously learn and grow in the field of web development.
            </p>
            <Certis/>
            <Education/>
        </motion.div>
    );
}