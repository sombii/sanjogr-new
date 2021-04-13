import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Contact() {

    useEffect(() => {

        gsap.to(".namaste", {
            duration: 2,
            text: "hi-hello",
            repeatDelay:1.5,
            repeat:-1,
            yoyo: true
        })

        // ScrollTrigger.matchMedia({
        //     "(min-width: 768px)": function () {
        //         const tl2 = gsap.timeline({defaults:{scrollTrigger:{
        //                     trigger: ".contact",
        //                     start: "top bottom",
        //                     end: "bottom bottom",
        //                     scrub: 0.1,
        //                     toggleActions: "restart pause reverse pause",
        //                 }}})
        //         tl2.from(".contact-txt", {
        //             x: -300,
        //         });
        //         tl2.from(".contact-meta", {
        //             x: 300,
        //         });
        //     }
        // })
    }, [])


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max content-center items-center px-10 sm:px-20 relative work mb-48 mt-0 lg:mt-32 contact">
                <h2 className="mb-10 text-lg text-red-400 lg:col-span-2 font-bold">CONTACT</h2>
                <div className="text-left lg:text-right text-xl font-bold relative self-start my-4 contact-meta mr-10">
                    <div className="flex flex-col items-start lg:items-end space-y-2">
                        <span>09807123304</span>
                        <span className="border-b-4 border-white"><a href="mailto:SANJOG@SOMBEX.COM">SANJOG@SOMBEX.COM</a></span>
                        <span>Hetauda, MAKAWANPUR, NEPAL</span>
                    </div>
                </div>
                <div className="mr-10 contact-txt">
                    <p className="text-5xl md:text-7xl block font-bold works flex flex-col text-left ">
                        <span>SAY <b className="outliner namaste">namaste</b>.</span>
                        <span>LET'S GET IN</span>
                        <span>TOUCH</span>
                    </p>
                </div>
                <div className="absolute -bottom-1/3 lg:-bottom-14 left-10 rounded-full bg-white w-20 h-20 text-black flex justify-center items-center italic"><span>ENDE</span></div>
            </div>
        </>
    )
}