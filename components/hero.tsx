export function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-24 md:px-16 md:pt-24 md:pb-32 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 bg-[#1a1a1a] rounded-[10px] flex items-center justify-center text-white font-bold text-xl select-none transition-opacity hover:opacity-80">
          U
        </div>
      </div>
      <h1 className="text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.2] max-w-[600px] text-[#1a1a1a]">
        We build software for local service businesses.
      </h1>
      <p className="mt-6 text-lg text-[#777] max-w-[480px] leading-[1.7]">
        Local service businesses run the world but run on clipboards, group
        texts, and spreadsheets. We build the tools they actually need.
      </p>
    </section>
  );
}
