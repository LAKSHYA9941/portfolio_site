import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Techstack from "./Techstack";
import Education from "./Education";
import Certis from "./Certis";



export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="min-h-screen min-w-screen flex flex-col text-white overflow-hidden backdrop-blur-md">
            {/* Navbar with frosted glass */}
            <nav className="w-full h-16 flex items-center justify-center z-10">
                <ul className="flex gap-6 text-sm md:text-base font-semibold tracking-wide text-white">
                    {tabs.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                color: item === selectedTab ? "#fff" : "#aaa",
                                scale: item === selectedTab ? 1.1 : 1,
                            }}
                            className="relative cursor-pointer transition hover:text-white"
                            onClick={() => setSelectedTab(item)}
                        >
                            {item.label}
                            {item === selectedTab && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Main content with frosted glass */}
            <main className="flex-1 flex items-center justify-center p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full h-full overflow-y-auto flex flex-col justify-center items-center text-center  p-6 md:p-10 "
                    >
                        {selectedTab.component}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

/**
 * ==============   Tab Data   ================
 */
const tabs = [
    { label: "About", component: <About /> },
    { label: "Projects", component: <Projects /> },
    { label: "Techstack", component: <Techstack /> },
    { label: "Education", component: <Education /> },
    { label: "Certifications", component: <Certis /> },
];