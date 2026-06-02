'use client'
import { title } from "process"
import { useEffect, useState } from "react"

const rawFeedback = [
    "this onboarding is so confusing i had no idea what to do after signing up",
    "search is broken when you have more than 500 items, returns random stuff",
    "i've been looking for the export button for 20 minutes wtf",
    "i keep losing the track of my work, not holy reliable at all for daily use",
    "integrations page just spins forever, never loads",
    "getting 15 emails a day tried turning off notifs but they keep coming",
]

const card = {
    type: 'Fix',
    title: 'Broken search for large datasets',
    priority: 'HIGH',
    problem: 'Search returns incorrect results when users have more than 500 times.',
    evidence: 'search is broken when you have more than 500 times. Returns random stuff.',
    confidence: 'HIGH',
    n: 4
}

export default function HeroAnimation() {
    const [visibleLines, setVisibleLines] = useState<number[]>([])
    const [showCard, setShowCard] = useState(false)
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        const cycle = () => {
            setVisibleLines([])
            setShowCard(false)
            setProcessing(false)

            rawFeedback.forEach((_, i) => {
                setTimeout(() => {
                    setVisibleLines(prev => [...prev, i])
                }, i*500)
            })
            
            setTimeout(() => setProcessing(true), rawFeedback.length * 500 + 300)
            setTimeout(() => {
                setProcessing(false)
                setShowCard(true)
            }, rawFeedback.length * 500 + 2000)

            setTimeout(() => cycle(), rawFeedback.length * 500 + 5000)
        }

        cycle()
    }, [])

    return(
        <div className="w-full h-full flex items-center justify-center px-12">
            <div className="w-full max-w-sm">
                {!showCard && (
                    <div className="transition-all duration-500">
                        <span className="specialFont text-[9px] tracking-[3px] text-white/30 mb-4 block">
                            RAW INPUT // UNSTRUCTURED 
                        </span>
                        <div className="flex flex-col gap-3">
                            {rawFeedback.map((line, i) => (
                                <p key={i}
                                style={{
                                    opacity:visibleLines.includes(i) ? 1 : 0,
                                    transform: visibleLines.includes(i) ? 'translateY(0)' : 'translateY(6px)',
                                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                                    textDecoration: processing ? 'line-through': 'none',
                                    color: processing ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
                                }}
                                className="paraFont text-[12px] leading-[18px]">
                                    "{line}"
                                </p>
                            ))}
                        </div>

                        {processing && (
                            <div className="mt-6 flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[0,1,2].map(i => (
                                        <span key={i} style={{ animationDelay: `${i * 0.2}s` }}
                                        className="w-1 h-1 bg-[#C45C2A] rounded-ful animate-bounce inline-block"/>
                                    ))}
                                </div>
                                <span className="specialFont text-[9px] tracking-[3px] text-white/40">
                                    SYNTHESIZING...
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {showCard && (
                    <div style={{
                        opacity: showCard ? 1 : 0,
                        transform: showCard ? 'translateY(0)' : 'translateY(12px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease',}} className="bg-[#F5F0E8] p-7">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="specialFont text-[8px] tracking-[3px] text-[#C8430A]">CORE DECISION</span>
                                <h3 style={{fontFamily: "'Newsreader', serif"}} className="text-[18px] text-[#0E1828] mt-1 leading-[24px]">
                                    {card.type} : {card.title}
                                </h3>
                            </div>
                            <span className="specialFont text-[8px] tracking-[2px] border-1 border-[#0E1828] text-[#0E1828] px-2 py-1 ml-3 whitespace-nowrap">
                                {card.priority}
                            </span>
                        </div>
                        <div className="border-t-1 border-[#D4CCB8] pt-4 mb-4">
                            <span className="specialFont text-[8px] tracking-[2px] text-[#94979E]">PROBLEM</span>
                            <p className="paraFont text-[12px] text-[#0E1828] mt-1 leading-[18px]">{card.problem}</p>
                        </div>

                        <div className="border-t-1 border-[#D4CCB8] pt-4">
                            <span className="specialFont text-[8px] tracking-[2px] text-[#94979E]">EVIDENCE</span>
                            <blockquote className="border-l-2 border-[#C45C2A] pl-3 mt-2">
                                <p className="paraFont text-[12px] text-[#0E1828] mt-1 leading-[18px]">{card.evidence}</p>
                            </blockquote>
                        </div>
                        <div className="border-t-1 border-[#D4CCB8] pt-3 mt-4">
                            <span className="specialFont text-[8px] tracking-[2px] text-[#94979E]">CONFIDENCE: {card.confidence} (N={card.n})</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}