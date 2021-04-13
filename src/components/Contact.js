export default function Contact() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max content-center items-center lg:min-h-screen px-10 sm:px-20 relative work overflow-hidden mb-20 lg:mb-0">
                <h2 className="mb-10 text-lg text-red-400 lg:col-span-2 font-bold">CONTACT</h2>
                <div className="mr-10">
                    <p className="text-5xl sm:text-6xl block font-bold works flex flex-col text-left lg:text-right">
                        <span>LETS</span>
                        <span>GET IN TOUCH,</span>
                        <span>SAY <b className="outliner">HELLO</b>.</span>
                    </p>
                </div>
                <div className="text-left text-xl font-bold relative self-start mt-2">
                    <div>
                        <p>09807123304</p>
                        <p>SANJOG@SOMBEX.COM</p>
                        <p>Hetauda, MAKAWANPUR, NEPAL</p>
                    </div>
                    <div className="absolute -bottom-52 right-0 rounded-full bg-white w-20 h-20 text-black flex justify-center items-center italic"><span>ENDE</span></div>

                </div>
            </div>
        </>
    )
}