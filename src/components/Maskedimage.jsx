import herowithbg from "../assets/herowithbg.png";

export default function MaskedImage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <img
        src={herowithbg}
        alt="Masked"
        className="w-[80vw] h-auto object-cover"
        style={{
          WebkitMaskImage: `
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
          `,
          WebkitMaskComposite: 'destination-in',
          maskImage: `
            linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
          `,
          maskComposite: 'intersect',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </div>
  );
}
