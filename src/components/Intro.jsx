import { motion } from "framer-motion";

export default function Intro({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-xl font-bold tracking-wide cursor-pointer font-sans"
      onClick={onClick}
    >
      Visit
    </motion.div>
  );
}
