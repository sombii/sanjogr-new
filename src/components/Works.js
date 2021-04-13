import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
// import {useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {

    // useEffect(() => {
    //     const tl = gsap.timeline();
    //     gsap.to(".work", {
    //         scrollTrigger: {
    //             trigger: ".hero",
    //             start: "center center",
    //             // end: "bottom center",
    //             end: () => "+=" + document.querySelector(".work").offsetHeight,
    //             pin: true,
    //             pinSpacing: false,
    //             scrub: 1.3,
    //             // markers: true,
    //         },
    //     });
    //     tl.from(".heading", {
    //         x: 300,
    //         opacity: 0
    //     })
    // }, [])

    return (
        <>
            <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 px-10 sm:px-20 relative work mt-16 md:mt-32 gap-8 font-bold">
                <div className="mr-10 self-center md:self-auto">
                    <h2 className="mb-10 text-lg text-red-400">WORKS</h2>
                    <p className="text-5xl sm:text-6xl max-w-xl block text-left works">Here's some things I've
                        been doing.</p>
                </div>
                <div className="flex flex-col mb-32">
                    <article className="relative">
                        <div className="text-lg max-w-xs">
                            <h3 className="text-4xl">MeroIPO</h3>
                            <p className="my-6 italic">NextJs, Material UI</p>
                            <p>personal project, closed source, updates about new IPOs in Nepal.</p>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="rounded-full bg-white w-20 h-20 mt-12"><a href="#"> </a></div>
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="rounded-full bg-black border border-white w-20 h-20 mt-12 flex justify-center items-center">
                            <a className="block text-8xl" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
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
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="rounded-full bg-white w-20 h-20 mt-12"><a href="#"> </a></div>
                        <p className="number font-bold absolute right-0 top-20">3</p>
                    </article>
                </div>
            </div>
        </>
    )
}