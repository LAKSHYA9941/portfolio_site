import React from 'react';
import { motion } from 'framer-motion';

const skillSet = {
    Languages: [
        { name: 'JavaScript', glow: '#f7df1e' },
        { name: 'TypeScript', glow: '#007acc' },
        { name: 'Python', glow: '#FFCC00' },
        { name: 'HTML', glow: '#e34f26' },
        { name: 'CSS', glow: '#1572b6' },
        { name: 'SQL', glow: '#336791' },
    ],
    Frontend: [
        { name: 'React.js', glow: '#61dafb' },
        { name: 'Tailwind', glow: '#06b6d4' },
        { name: 'Vite', glow: '#a855f7' },
        { name: 'Responsive Design', glow: '#ec4899' },
    ],
    Backend: [
        { name: 'Node.js', glow: '#339933' },
        { name: 'Express.js', glow: '#7F8CAA' },
        { name: 'MongoDB', glow: '#47a248' },
        { name: 'Firebase', glow: '#ffca28' },
        { name: 'REST APIs', glow: '#6366f1' },
    ],
    Tools: [
        { name: 'Git', glow: '#f05032' },
        { name: 'GitHub', glow: '#ffffff' },
        { name: 'Axios', glow: '#5a29e4' },
        { name: 'Postman', glow: '#ff6c37' },
        { name: 'JWT', glow: '#00bfff' },
        { name: 'DBMS & OOP', glow: '#00b894' },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 180 } },
};

export default function Techstack() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}

            className=" mx-auto max-w-fit p-8 overflow-y-auto scrollbar-hide"
        >
            <div className="space-y-8">
                {/* <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
                    Technical Skills
                </h2> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skillSet).map(([category, skills]) => (
                        <section key={category} className="space-y-4">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {skills.map(({ name, glow }) => (
                                    <motion.div
                                        key={name}
                                        variants={badgeVariants}
                                        whileHover={{
                                            scale: 1.15,
                                            filter: `drop-shadow(0 0 14px ${glow}) drop-shadow(0 0 14px ${glow}66)`,
                                            transition: { duration: 0.25 },
                                        }}
                                        className="px-4 py-2 rounded-full bg-slate-800/30 border-2 border-slate-700/50 text-slate-100 cursor-default group hover:bg-slate-800/50 transition-colors duration-300"
                                        style={{ borderColor: glow }}
                                    >
                                        {name}
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}