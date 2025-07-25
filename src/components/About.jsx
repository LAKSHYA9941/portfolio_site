import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}

            className="max-w-3xl w-full space-y-6 text-left text-base leading-relaxed mx-auto p-8 overflow-y-auto scrollbar-hide"
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

            <h1 className="text-3xl font-bold border-b border-white/20 pb-2">Contact Information</h1>
            <div className="space-y-2">
                <p><strong>Phone:</strong> +91 8826773747</p>
                <p><strong>Email:</strong> lakshyasharma.9.0.1.2.3@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/lakshya-sharma-35817926a/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-600">
                        View Profile
                    </a>
                </p>
            </div>
        </motion.div>
    );
}