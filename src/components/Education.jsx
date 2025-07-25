import React from 'react';
import { motion } from 'framer-motion';

function Education() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}

            className="w-full max-w-2xl mx-auto p-8"
        >
            <section>
                {/* <h2 className="text-2xl font-bold mb-4 text-center">Education</h2> */}
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">BCA – Maharaja Surajmal Institute</h3>
                        <p className="text-gray-500">(2021–2024)</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">Senior Secondary – Bal Bhavan Public School</h3>
                        <p className="text-gray-500">(Completed: 2021)</p>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4 text-center">Languages Known</h2>
                <p className="text-center">Hindi, English</p>
            </section>
        </motion.div>
    );
}

export default Education;