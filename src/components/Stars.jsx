import { useMemo } from "react";

const random = (max) => Math.random() * max;

const StarLayer = ({ count, size, speed }) => {
  const stars = useMemo(() =>
    Array.from({ length: count }).map(() => ({
      left: `${random(100)}%`,
      top: `${random(100)}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${speed}s`,
      // random drift vector
      x: random(30) - 15,  // ±15 px horizontal
      y: random(30) - 15,  // ±15 px vertical
    })),
    [count, size, speed]
  );

  return (
    <>
      <style>{`
        @keyframes drift {
          0%   { transform: translate(0, 0)   rotate(0deg);   }
          50%  { transform: translate(var(--dx), var(--dy)) rotate(180deg); }
          100% { transform: translate(0, 0)   rotate(360deg); }
        }
      `}</style>
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full "
          style={{
            left: s.left,
            top: s.top,
            width: s.width,
            height: s.height,
            animation: `drift ${s.animationDuration}s linear infinite`,
            // CSS vars for random drift
            "--dx": `${s.x}px`,
            "--dy": `${s.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default function Stars() {
  return (
    <div className="fixed inset-0 -z-1 pointer-events-none overflow-hidden ">
      <StarLayer count={700} size={1} speed={50} />
      <StarLayer count={200} size={2} speed={100} />
      <StarLayer count={100} size={3} speed={150} />
    </div>
  );
}