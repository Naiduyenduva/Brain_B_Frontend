import { DeletIcon } from "../icons/DeleteIcon";
import { FileIcon } from "../icons/FileIcon";
import { ShareIcon } from "../icons/ShareIcon";

export function Card () {
    return (
        <div className="bg-white border-slate-900 p-2 border max-w-96 rounded-md px-2">
            <div className="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                    <FileIcon />
                    <h2 className="text-gray-800 font-semibold">Project Idea</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <ShareIcon />
                    <DeletIcon />
                </div>
            </div>
            {/* <div className="text-gray-400">
                <iframe width="170" height="" src="https://www.youtube.com/embed/uURH6dY8WAM?si=DmE6uF01Ezk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
            <div className="w-auto h-auto">
            <blockquote className="twitter-tweet"> <a href="https://t.co/YpHy54z71m">https://t.co/YpHy54z71m</a> <a href="https://t.co/zeg4cwhEYS">pic.twitter.com/zeg4cwhEYS</a><a href="https://twitter.com/Lucky49871195/status/1857827696593760522">December 29, 2024</a></blockquote> 
            </div>
        </div>
    )
}