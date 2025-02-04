import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-screen lg:px-[60px] xl:px-[150px] px-[25px]">
      {/* background grid */}
      <div className="absolute px-[25px] lg:px-[60px] xl:px-[150px] h-[600vh] -mt-2 w-full top-0 left-0 grid grid-flow-row lg:grid-cols-4 grid-cols-1 gap-4 overflow-y-hidden">
        <div className="custom-dashed-border h-full "></div>
        <div className="custom-dashed-border h-full "></div>
        <div className="custom-dashed-border h-full "></div>
        <div className="custom-dashed-border h-full "></div>
      </div>
      {/* Content */}
      <div className="relative">
        <Hero/>
      </div>
    </main>
  );
}
