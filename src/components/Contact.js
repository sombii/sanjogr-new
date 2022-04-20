import {useEffect} from "react";
import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Contact() {

    useEffect(() => {

        gsap.to(".namaste", {
            duration: 3,
            text: "NAMASTE",
            repeatDelay: 3,
            repeat: -1,
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
        <div className="px-10 sm:px-20 relative  my-16 lg:my-32  flex justify-center flex-col">
            <h2 className="mb-10 text-lg text-red-400 lg:col-span-2 font-bold">CONTACT</h2>
            <div className="space-y-28">
                <div className="leading-relaxed flex flex-col text-left mb-16">
                    <span className="font-bold text-6xl md:text-9xl">SAY <b className="outliner namaste">HELLO</b></span>
                    <span className="text-4xl md:text-5xl">LET'S GET IN TOUCH.</span>
                </div>
                <div className=" text-5xl font-medium relative my-4 mr-10">
                    <div className="flex flex-col items-start space-y-4">
                        <span className="border-b-4 border-white"><a href="tel:9807123304">9807123304</a></span>
                        <span className="border-b-4 border-white"><a
                            href="mailto:SANJOG@SOMBEX.COM">SANJOG@SOMBEX.COM</a></span>
                        <span>HETAUDA, BAGMATI, NEPAL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}