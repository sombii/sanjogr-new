import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";


export default function Works() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".doing-me", {
            scrollTrigger: {
                trigger: ".work",
                start: "100 bottom",
                end: "300 center",
                // markers: true,
                scrub: 1
            },
            duration: 3,
            text: `Here's some things I've been doing.`,
            // repeat: -1,
            // repeatDelay: 0,
            // yoyo: true
        })

    }, [])

    return (
        <>
            <div
                className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 px-10 sm:px-20 relative work mt-16 md:mt-32 gap-8 font-bold">
                <div className="mr-10 self-center md:self-auto">
                    <h2 className="mb-10 text-lg text-red-400">WORKS</h2>
                    <p className="text-5xl sm:text-6xl max-w-xl block text-left doing-me"/>
                </div>
                <div className="flex flex-col mb-32">
                    <article className="relative">
                        <div className="text-lg max-w-xs">
                            <h3 className="text-4xl">MeroIPO</h3>
                            <p className="my-6 italic">NextJs, Material UI</p>
                            <p>personal project, closed source, updates about new IPOs in Nepal.</p>
                        </div>
                        <a className="rounded-full bg-black border border-white w-20 h-20 mt-12 flex justify-center items-center block text-8xl relative visit-btn"
                           href="https://meroipo.com" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex justify-center items-center text-black visit-btn-overlay">
                                <p className="text-xs visit-btn-overlay-txt">visit site</p>
                            </div>
                        </a>
                        <p className="number font-bold absolute right-0 top-20">1</p>
                    </article>
                </div>
                <div className="flex flex-col mb-32">
                    <article className="relative">
                        <div className="text-lg max-w-xs">
                            <h3 className="text-4xl">Mero Share Clone </h3>
                            <p className="my-6 italic">React, Material UI</p>
                            <p>opensource, clone of CDSC's Meroshare web app.</p>
                        </div>
                        <a className="rounded-full bg-black border border-white w-20 h-20 mt-12 flex justify-center items-center block text-8xl relative visit-btn"
                           href="https://mero-share-clone.sanjogr.com.np" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex justify-center items-center text-black visit-btn-overlay">
                                <p className="text-xs visit-btn-overlay-txt text-center">demo source</p>
                            </div>
                        </a>
                        <p className="number font-bold absolute right-0 top-20">2</p>
                    </article>
                </div>
                <div className="flex flex-col mb-32">
                    <article className="relative">
                        <div className="text-lg max-w-xs">
                            <h3 className="text-4xl">IPO Tracker</h3>
                            <p className="my-6 italic">ExpressJs, MongoDB</p>
                            <p>opensource, REST API, backend only, in progress.</p>
                        </div>
                        <a className="rounded-full bg-black border border-white w-20 h-20 mt-12 flex justify-center items-center block text-8xl relative visit-btn"
                           href="https://github.com/sombii/ipo-tracker" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex justify-center items-center text-black visit-btn-overlay">
                                <p className="text-xs visit-btn-overlay-txt">source</p>
                            </div>
                        </a>
                        <p className="number font-bold absolute right-0 top-20">3</p>
                    </article>
                </div>
            </div>
        </>
    )
}