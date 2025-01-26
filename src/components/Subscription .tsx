import { Button } from "./Button";

interface subProps {
    title: string,
    amount: string,
    bkno: string,
    tweets: number
}

export function Subscription ({title,amount,bkno,tweets}:subProps) {
    return (
        <div className="bg-gray-50 h-96 w-80 rounded-lg shadow-md p-5 border border-slate-200 hover:shadow-xl">
            <h1 className="font-bold text-2xl text-left bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</h1>
            <h1 className="font-bold text-4xl text-left mt-3 ">₹{amount}<span className="text-gray-400 text-lg font-normal">/month</span></h1>
            <h1 className="text-gray-400 text-lg mt-4 ">{bkno} bookmarks per month</h1>
            <div>
                <h1 className="text-md mt-4 font-semibold">&#10003; {tweets} tweet from twitter</h1>
                <h1 className="text-md mt-4 font-semibold">&#10003; {tweets} youtube videos</h1>
                <h1 className="text-md mt-4 font-semibold">&#10003; {tweets} links per month</h1>
                <h1 className="text-md mt-4 font-semibold">&#10003; {tweets} articles per month</h1>
            </div>
            <div className="ml-20 mt-6">
                <Button text="Access Here" variant="primary" />
            </div>
        </div>
    )
}