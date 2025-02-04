import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-screen lg:px-[60px] xl:px-[150px]">
      {/* background grid */}
      <div className="absolute lg:px-[60px] xl:px-[150px] h-screen w-full top-0 left-0 grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-4">
        <div className="h-full border-l border-r border-dashed border-[#0000001A]" />
        <div className="h-full border-l border-r border-dashed border-[#0000001A]" />
        <div className="h-full border-l border-r border-dashed border-[#0000001A]" />
        <div className="h-full border-l border-r border-dashed border-[#0000001A]" />
      </div>
      {/* content */}
      <div className="relative">
        <Hero/>
      </div>
    </main>
  );
}
