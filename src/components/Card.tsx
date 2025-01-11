import { DeletIcon } from "../icons/DeleteIcon";
import { FileIcon } from "../icons/FileIcon";
import { ShareIcon } from "../icons/ShareIcon";

export function Card () {
    return (
        <div className="bg-white border-slate-900 p-2 border max-w-48 rounded-md px-2">
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
            The service has experimented with changing how tweets work over the years to attract more users and to keep them on the site. The character limit was originally 140 characters when the service started, had media attachments no longer count in the mid-2010s.
            </div>
        </div>
    )
}