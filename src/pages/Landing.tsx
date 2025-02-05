import { Button } from "@/components/Button";
import { BrainIcon } from "@/icons/BrainIcon";
import Brain from "../assets/brainb.png"
import { Link } from "react-router-dom";
import { Subscription } from "@/components/Subscription ";
import { Feature } from "@/components/Features";
import { Footer } from "@/components/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Landing () {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%", // Starts when the top of the section is at 80% of the viewport
                end: "top 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
    },[])
    return (
        <section>
            {/* navbar */}
            <div className="flex justify-between px-10 pt-5 mb-2">
                <div className="flex gap-1">
                    <BrainIcon />
                    <h1 className="font-bold text-xl">BrainB</h1>
                </div>
                <div className="flex gap-5">
                    <Link to="/signup"><Button variant="primary" text="Signup"/></Link>
                    <Link to="/login"><Button variant="primary" text="Login"/></Link>
                </div>
            </div>
            {/* HomePage */}
            <div className="pt-20 mt-20">
                <h1 className="text-6xl font-bold tracking-tighter text-center bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">Second brain for your second works</h1>
                <h1 className="text-center text-2xl font-semibold pt-5 text-gray-700">Your digital memory, organized and always accessible.</h1>
                <div className="ml-[500px] pt-5 flex gap-10">
                    <Link to="/signup"><Button variant="secondary" text="Get Started Now"/></Link>
                    <Button variant="primary" text="Explore Services"/>
                </div>
                <div ref={sectionRef} className="w-[1100px] ml-24 mt-20 mb-5 border-2 border-blue-900 rounded-xl">
                    <img src={Brain} alt="Image" className="rounded-xl" />
                </div>
            </div>
            {/* Features */}
            <h1 className="text-center text-4xl py-5 font-bold ">Features</h1>
            <div className="mb-10 flex gap-5 justify-around px-20">
                <Feature title="Twitter" description="Bookmark your saved tweets with embeddings which you bring them by adding the tweet link here."  />
                <Feature title="Youtube" description="Ping/add your youtube videos with embedding to watch later/refer by adding the link here." />
                <Feature title="Articles" description="Bring the articles/documents you have seen in the internet to read later and gain knowledge. Refer them Later" />
            </div>
            {/* Subscription plans */}
            <h1 className="text-center text-4xl py-5 font-bold ">Subscription Plans</h1>
            <div className="flex gap-5 justify-around mb-10 px-20">
                <Subscription title="Free" amount="0" bkno="20" tweets={5} />
                <Subscription title="Exclusive" amount="100" bkno="80" tweets={20} />
                <Subscription title="Premium" amount="200" bkno="160" tweets={40} />
            </div>
            <Footer />
        </section>
    )
}