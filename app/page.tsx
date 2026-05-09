  export default function Page() {
    return (
      <>
        <nav className="flex flex-row items-center justify-between px-10 py-5"> 
          <div className="flex items-center gap-8">
            <span style={{ fontFamily:"'Newsreader', serif"}} className="font-bold text-[#0E1828] tracking-widest text-[24px]" >
              PRIORA
            </span>
            <span className="text-[9px] tracking-widest border-1 border-[#C45C2A] text-[#C45C2A] px-1.5 py-0.5 specialFont">
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
        <main className="grid grid-rows">
          <section className=" grid grid-cols-2 h-screen">
            <div className="flex flex-col justify-start pt-[65px] md:pt-[125px] lg:pt-[190px] bg-[#F5F0E8] gap-6 md:gap-8 px-8 md:px-12 lg:px-24 ">
              <h2 className="specialFont tracking-[4px] leading-[15px] text-[#C8430A] text-[10px] mb-5">SYSTEMIC SYNTHESIS ENGINE</h2>
              <h1 style={{ fontFamily: "'Newsreader', serif" }} className="text-4xl sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[64.8px]">
                <span className="">Messy feedback.</span>
                <br/>
                <span style={{ fontWeight: 200 }} className="italic">Clear decisions.</span>
              </h1>
              <p className="text-[16.5px] text-[#0F1F3D]/70 paraFont mt-7 leading-[26px]">
                Transforming qualitative noise into quantitative strategic <br/>alignment through architectural data synthesis
              </p>
              <button className="specialFont flex flex-row gap-6 uppercase tracking-[3.3px] leading-[16.5px] px-13 py-[22px] bg-[#0F1F3D] w-fit text-white text-[11px] mt-5">
                Begin Analysis
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[3px]" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
            <div className="bg-[#0F1F3D]">
            </div>
          </section>
          <section className="">
            <div className="specialFont text-center text-[#94979E] border-[#D4CCB8] bg-[#E7E4DC] py-5 border-1 tracking-[5px] leading-[15px] text-[9px]">
              <span className="">
                // INGESTION_PIPELINE_ACTIVE
              </span>
            </div>
            <div className="flex flex-col py-20 px-[140px] md:px-[200px] lg:px-[448px]">
              <span className="text-left mb-5 specialFont tracking-[0.9px] leading-[13.5px] text-[9px] text-[#94979E]">
                INGESTION_LAYER // INPUT
              </span>
              <textarea placeholder="Paste customer interviews, Slack feedback, or app store reviews here..." 
                        className="border-1 border-[#D4CCB8] bg-[#ffffff] px-[43px] py-[47px] text-[#69696b] w-full resize-none h-[279px] w-[1025px] text-left focus:outline-none focus:border-[#2563E7]">
              </textarea>
              <button className="specialFont self-end flex flex-row gap-6 uppercase tracking-[3.3px] leading-[16.5px] px-13 py-[22px] bg-[#0F1F3D] w-fit text-white text-[11px] mt-5">
                Process Engine
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[3px]" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
          </section>
          <section>
          </section>
        </main>
      </>
    );
  }