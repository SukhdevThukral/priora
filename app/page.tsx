export default function Page() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-10 py-5"> 
        <div className="flex items-center gap-8">
          <span style={{ fontFamily:"'Newsreader', serif", fontWeight: 700 }} className="font-bold text-[#0E1828] tracking-widest text-[24px]" >
            PRIORA
          </span>
          <span className="text-[9px] tracking-widest border-2 border-[#C45C2A] text-[#C45C2A] px-2 py-0.5 specialFont">
            BETA
          </span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-[10px] tracking-[0.2em] text-[#0E1828]/60 hover:text-[#0E1828] transition-colors specialFont">
            PROCESS
          </a>
          <a href="#" className="text-[10px] tracking-[0.2em] text-[#0E1828]/60 hover:text-[#0E1828] transition-colors specialFont">
            MANIFESTO
          </a>
        </div>
      </nav>  
      <main className="">
        <section className=" grid grid-cols-2 h-screen">
          <div className="flex flex-col justify-center gap-6 md:gap-8 px-8 md:px-12 lg:px-16 bg-[#F5F0E8]">
              <h1 style={{ fontFamily:"'Newsreader', serif" }}className="text-4xl font-light md:text-5xl lg:text-[70px] leading-[64.8px]">Messy<br/> feedback. <br/><span className="italic">Clear<br/>decisions.</span></h1>
          </div>
          <div className="bg-[#0F1F3D]">

          </div>
        </section>
      </main>
    </>
  );
}