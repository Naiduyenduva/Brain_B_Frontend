import { DeletIcon } from "../icons/DeleteIcon";
// import { FileIcon } from "../icons/FileIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";

interface userprops {
    title: string,
    link: string,
    type: string
}
export function Card ({link,type,title}:userprops) {
    return (
        <div className="bg-white border-slate-200 p-2 border w-fit h-fit max-w-96 rounded-md px-2">
            <div className="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                    {
                        type=="twitter" && <TwitterIcon />
                    }
                    {
                        type == "youtube" && <VideoIcon />
                    }
                    <h2 className="text-gray-800 font-semibold">{title}</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <ShareIcon />
                    <DeletIcon />
                </div>
            </div>
            {
                type=="youtube" &&  <div className="text-gray-400">
                <iframe width="180" height="" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            }
            {
                type == "twitter" &&  <div className="w-auto h-auto">
                <blockquote className="twitter-tweet"><a href={link}></a></blockquote> 
                </div>  
            }
        </div>
    )
}