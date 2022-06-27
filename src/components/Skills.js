export default function Skills() {
    return (
        <div className="px-10 sm:px-20 my-32 ">
            <div className="mx-auto w-full max-w-5xl border-t border-t-1 border-white pb-16 rounded-full"/>
            <div
                className="flex justify-center gap-8 flex-wrap mx-auto text-xs max-w-5xl pointer-events-none skills">
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/react.svg" alt="" className="filter invert w-9"/>
                    <span>React</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/next.svg" alt="" className="filter invert w-9"/>
                    <span>Next.Js</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/html.svg" alt="" className="filter invert w-9"/>
                    <span>HTML5</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/css.svg" alt="" className="filter invert w-9"/>
                    <span>CSS3</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/mui.svg" alt="" className="filter invert w-9"/>
                    <span>MaterialUI</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/github.svg" alt="" className="filter invert w-9"/>
                    <span>Github</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/tailwind.svg" alt="" className="filter invert w-12 h-9"/>
                    <span>TailwindCSS</span>
                </div>

                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/npm.svg" alt="" className="filter invert w-9"/>
                    <span>NPM</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/netlify.svg" alt="" className="filter invert w-9"/>
                    <span>Netlify</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-4 w-[1/8] p-6">
                    <img src="/js.svg" alt="" className="filter invert w-9"/>
                    <span>Javascript</span>
                </div>
            </div>
        </div>
    );
}