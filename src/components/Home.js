import {gsap} from "gsap/all";
import {useEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {TextPlugin} from "gsap/TextPlugin"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


export default function Home() {

    useEffect(() => {
        const blinkTl = gsap.timeline();
        const tl = gsap.timeline({defaults: {}})
        tl.to(".home", {
            duration: 0.1,
            opacity: 1
        })
        tl.from(".heading", {
            y: 200,
            stagger: 0.4,
        }).to(".heading", {
            y: 0,
            stagger: 0.4,
            duration: 1.3
        }, 1)

        blinkTl.to(".blink-eye", {
            y: "-10%",
            // paused: true,
            repeat: 1,
            yoyo: true,
            // repeatDelay: (Math.random() * 3 + 0.5),
            onCompleteParams: ["{self}"],
            onComplete: function () {
                gsap.delayedCall((Math.random() * 5 + 0.5), blinkTl.restart, [], blinkTl)
            }

        },3)
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function () {
                const tl2 = gsap.timeline({
                    defaults: {
                        scrollTrigger: {
                            trigger: ".work",
                            start: "-100px bottom",
                            end: "center center",
                            // end: () => "+=" + document.querySelector(".heading").offsetHeight,
                            scrub: 0.2,
                            // markers: true,
                            toggleActions: "restart pause reverse pause",
                        }
                    }
                })
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
        <div
            className="flex flex-col justify-evenly items-center md:min-h-screen px-10 sm:px-20 mx-auto opacity-0 home relative">
            <div className="relative text-[10rem] self-start leading-none mt-10 mb-4">
                <div className="absolute rounded-full border gray-border target">
                    <div className="relative h-full">
                        <div className="absolute line0 border-t gray-border">
                            <div className="relative">
                                <div
                                    className="absolute transform -translate-y-1/2 left-36 border border-gray-500 rounded-full p-1 bg-black"
                                    title="Github"
                                >
                                    <a href="https://github.com/sombii/sanjogr-new" target="_blank"
                                       rel="noreferrer">
                                        <svg
                                            className="h-7 w-7 relative"
                                            fill="#fff"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div
                                    title="LinkedIn"
                                    className="absolute transform -translate-y-1/2 left-20 border border-gray-500 rounded-full p-1 bg-black">
                                    <a href="https://linkedin.com/in/sombii" target="_blank" rel="noreferrer">
                                        <svg
                                            className="h-8 w-8"
                                            fill="#fff"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute line1 border-l gray-border"/>
                    </div>
                </div>
                <div className="absolute rounded-full target0 bg-white"/>
                <div className="absolute rounded-full target1 bg-black">
                    {/*<div className="relative h-full">*/}
                    {/*    <div className="absolute w-4 h-4 bg-white rounded-full top-1/3 right-6 blink-eye"/>*/}
                    {/*    <div className="absolute w-4 h-4 bg-white rounded-full top-1/3 left-6 blink-eye"/>*/}
                    {/*</div>*/}
                </div>
                <div className="absolute w-4 h-4 bg-white rounded-full top-16 left-6">
                    <div className="relative">
                        <div
                            className="absolute w-4 h-4 bg-black rounded-md transform -translate-y-full blink-eye"/>
                    </div>
                </div>
                <div className="absolute w-4 h-4 bg-white rounded-full top-16 right-6">
                    <div className="relative">
                        <div
                            className="absolute w-4 h-4 bg-black rounded-md transform -translate-y-full blink-eye"/>
                    </div>
                </div>
                {/*<div className="absolute w-4 h-4 bg-white rounded-full top-16 right-6"/>*/}
                <span className="invisible">a</span>
            </div>
            <div className="mt-20 sm:mt-0 mb-10 text-white text-[9vw] leading-none font-bold text-right uppercase">
                <div className="overflow-hidden"><p className="heading head-ani-1">
                    <span className="outliner">Sanjog</span>Rai</p>
                </div>
                <div className="overflow-hidden"><p className="heading head-ani-2">
                    <span className="outliner">React</span>Developer</p>
                </div>
                <div className="overflow-hidden"><p className="heading head-ani-1">
                    From<span className="outliner">Hetauda</span></p>
                </div>
            </div>
        </div>
    )
}