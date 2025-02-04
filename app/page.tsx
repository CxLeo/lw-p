import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-screen lg:px-[60px] xl:px-[150px] px-[25px]">
      {/* background grid */}
      <div className="absolute px-[25px] lg:px-[60px] xl:px-[150px] h-[600vh] -mt-2 w-full top-0 left-0 grid grid-row lg:grid-cols-4 grid-cols-1 gap-[20px] overflow-y-hidden">
        <div className="custom-dashed-border h-full abg-red-400"></div>
        <div className="custom-dashed-border h-full abg-blue-400"></div>
        <div className="custom-dashed-border h-full abg-yellow-400"></div>
        <div className="custom-dashed-border h-full abg-green-400"></div>
      </div>
      {/* Content */}
      <div className="relative lg:max-w-[1320px] xl:max-w-[1620px] max-w-[350px] mx-auto">
        <Hero/>
      </div>
    </main>
  );
}
