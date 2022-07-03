import {useEffect} from "react";
import {gsap} from "gsap";

export default function Skills() {

    const skills = [
        {name: "React", image: "/react.svg"},
        {name: "Next.Js", image: "/next.svg"},
        {name: "Javascript", image: "/js.svg"},
        {name: "MaterialUi", image: "/mui.svg"},
        {name: "Github", image: "/github.svg"},
        {name: "TailwindCSS", image: "/tailwind.svg"},
        {name: "Firebase", image: "/firebase.svg"},
        {name: "NPM", image: "/npm.svg"},
        {name: "Netlify", image: "/netlify.svg"},
        {name: "HTML5", image: "/html.svg"},
        {name: "CSS3", image: "/css.svg"},
    ]

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".works", {
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
        <div className="px-10 sm:px-20 mb-48 mt-32 ">
            <div className="flex justify-center gap-8 flex-wrap mx-auto text-xs max-w-5xl skills">
                {skills.map(item => {
                    return (
                        <div className="flex items-center justify-between flex-col gap-4 w-[1/8] p-6" key={item.name}
                             title={item.name}>
                            <img src={`${item.image}`} alt="" className="filter invert w-9"/>
                            <span>{item.name}</span>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}