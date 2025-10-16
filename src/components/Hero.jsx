import React, { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero" className="flex flex-col items-center justify-center">
            <div className="pt-10">
                <h1 className="text-white text-xl md:text-4xl flex justify-center " >MackBook Pro</h1>
                <img className="mx-auto w-[900px]" src="/title.png" alt="MacBook Title" />
            </div>
            
            <video className="w-[1400px]" ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            <button className="btn bg-blue-400 font-bold text-white rounded-full py-2 px-5">Buy</button>
            <p className="font-bold text-white pt-3" >From $1599 or $133/mo for 12 months</p>
        </section>
    )
}

export default Hero;