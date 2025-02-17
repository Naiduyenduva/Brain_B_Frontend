import { BrainIcon } from "../icons/BrainIcon";
import { FileIcon } from "../icons/FileIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";

export function Sidebar () {
    return (
        <div>
            <div className="flex gap-2 m-2 mt-5 font-bold text-xl items-center pl-3">
                <BrainIcon />
                Brain B
            </div>
            <div className="p-2 pl-14 grid gap-7 mt-10 text-gray-500">
                <div className="flex gap-2 items-center">
                    <TwitterIcon />
                    Tweets
                </div>
                <div className="flex gap-2 items-center">
                    <VideoIcon />
                    Videos
                </div>
                <div className="flex gap-2 items-center">
                    <FileIcon />
                    Documents
                </div>
                <div className="flex gap-2 items-center">
                    <LinkIcon />
                    Links
                </div>
                <div className="flex gap-2 items-center">
                    <TagIcon />
                    Tags
                </div>
            </div>
        </div>
    )
}