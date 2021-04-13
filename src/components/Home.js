import {gsap} from "gsap";
import {useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {TextPlugin} from "gsap/TextPlugin"
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


export default function Home() {

    useEffect(() => {
        const tl = gsap.timeline({defaults: {duration: 1.3}})
        tl.to(".home",{
            duration: 0.5,
            opacity: 1
        })
        tl.from(".heading", {
            y: 200,
            stagger: 0.4
        })
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                const tl2 = gsap.timeline({defaults:{scrollTrigger:{
                            trigger: ".work",
                            start: "-100px bottom",
                            end: "center center",
                            // end: () => "+=" + document.querySelector(".heading").offsetHeight,
                            scrub: 0.2,
                            // markers: true,
                            toggleActions: "restart pause reverse pause",
                        }}})
                tl2.to(".head-ani-1", {
                    x: 300,
                });
                tl2.to(".head-ani-2", {
                    x: -300,
                });
            }
        })
    }, [])

    return (
        <>
            <div
                className="flex flex-col items-center md:min-h-screen px-10 sm:px-20 mx-auto opacity-0 home">
                <div className="relative circle self-start leading-none mt-10 mb-4">
                    <div className="absolute rounded-full border gray-border target">
                        <div className="relative h-full">
                            <div className="absolute line0 border-t gray-border"/>
                            <div className="absolute line1 border-l gray-border"/>
                        </div>
                    </div>
                    <div className="absolute rounded-full target0 bg-white"/>
                    <div className="absolute rounded-full target1 bg-black"/>
                    <div className="absolute w-4 h-4 bg-white rounded-full top-16 left-6"/>
                    <div className="absolute w-4 h-4 bg-white rounded-full top-16 right-6"/>
                    {/*<div className="absolute line1 border-l gray-border"/>*/}
                    <span className="invisible">a</span>
                </div>
                <div className="mt-20 sm:mt-0 mb-10 text-white h1 font-bold text-right uppercase">
                    <div className="overflow-hidden"><p className="heading head-ani-1"><span className="outliner">Sanjog</span>Rai</p></div>
                    <div className="overflow-hidden"><p className="heading head-ani-2"><span className="outliner">React</span>Developer</p></div>
                    <div className="overflow-hidden"><p className="heading head-ani-1">From<span className="outliner">Hetauda</span></p></div>
                </div>
            </div>
        </>
    )
}