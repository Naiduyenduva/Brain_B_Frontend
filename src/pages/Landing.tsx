import { Button } from "@/components/Button";
import { BrainIcon } from "@/icons/BrainIcon";
import Brain from "../assets/brainb.png"
import { Link } from "react-router-dom";

export function Landing () {
    return (
        <section>
            {/* navbar */}
            <div className="flex justify-between px-10 pt-5 mb-2">
                <div className="flex gap-1">
                    <BrainIcon />
                    <h1 className="font-semibold text-xl">BrainB</h1>
                </div>
                <div className="flex gap-5">
                    <Link to="/signup"><Button variant="primary" text="Signup"/></Link>
                    <Link to="/login"><Button variant="primary" text="Login"/></Link>
                </div>
            </div>
            {/* HomePage */}
            <div className="pt-20">
                <h1 className="text-5xl font-bold tracking-tighter text-center bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">Second brain for your second works</h1>
                <h1 className="text-center text-2xl font-semibold pt-5 text-gray-700">Your digital memory, organized and always accessible.</h1>
                <div className="ml-[500px] pt-5 flex gap-10">
                    <Link to="/signup"><Button variant="secondary" text="Get Started Now"/></Link>
                    <Button variant="primary" text="Explore Services"/>
                </div>
                <div className="w-[1100px] ml-24 mt-10 mb-5 border-2 border-blue-900 rounded-xl">
                    <img src={Brain} alt="Image" className="rounded-xl" />
                </div>
            </div>
        </section>
    )
}