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
            <div className="text-gray-400">
                <iframe width="170" height="" src="https://www.youtube.com/embed/uURH6dY8WAM?si=DmE6uF01Ezk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="text-gray-400">
            <iframe frameBorder="0" height="250" width="350" src="https://twitframe.com/show?url=https://twitter.com/abramarketing/status/1878797108364423352?s=20&t=GrVuuUU1OtpPrszgencMAA"></iframe>
            </div>
        </div>
    )
}