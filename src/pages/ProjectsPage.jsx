import SharedLayoutAnimation from "../components/Animatednav";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";



export default function ProjectsPage() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const gradient = useTransform(
    [x, y],
    ([a, b]) =>
      `conic-gradient(from 0deg at ${a * 100}% ${b * 100}%, #0d1117, #0cdcf7, #ff0088, #fff312, #0d1117)`
  );

  useEffect(() => {
    const handle = (e) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [x, y]);

  return (
    <div className="relative min-h-screen text-white">
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ background: gradient }}
        pointerEvents="none"
      />
      <SharedLayoutAnimation />
    </div>
  );
}
