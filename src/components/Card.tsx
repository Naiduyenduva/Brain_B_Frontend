import { useEffect, useState } from "react";
import { DeletIcon } from "../icons/DeleteIcon";
import { FileIcon } from "../icons/FileIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { VideoIcon } from "../icons/VideoIcon";
import axios from "axios";

interface userprops {
    title: string,
    link: string,
    type: string
}
export function Card () {
    const [content, setContent] = useState<userprops[]>([]);

    useEffect (()=> {
        async function handleContent (){
            try {
                const jwt = localStorage.getItem("token");
               const response = await axios.get("https://brain-b-one.vercel.app/api/v1/content",
                {
                    headers: {
                        "Authorization": jwt
                    }
                });
               const Content = response.data.userContent
               setContent(Content)
            } 
            catch (error) {
                throw new Error("sjgdvghcv");
            }
        }
        handleContent();
    },[])

   
    return (
        <>
            {
                content?.map((item:userprops, index:number)=> (
                    <div className="bg-white border-slate-200 p-2 border w-fit h-fit max-w-96 rounded-md px-2" key={index}>
            <div className="flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                    {
                        item.type=="twitter" && <TwitterIcon />
                    }
                    {
                        item.type == "youtube" && <VideoIcon />
                    }
                    {
                        item.type == "document" && <FileIcon />
                    }
                    {
                        item.type == "link" && <FileIcon />
                    }
                    <h2 className="text-gray-800 font-semibold">{item.title}</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <ShareIcon />
                    <DeletIcon />
                </div>
            </div>
            {   item.type === "youtube" && <iframe className="w-full" src={item.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {   item.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={item.link.replace("x.com", "twitter.com")}></a> 
                </blockquote>
            }
            {
                item.type == "document" &&  <div className="w-auto h-auto">
                <p>wrong article link pasted </p> 
                </div>  
            }
            {
                item.type == "link" &&  <div className="w-auto h-auto">
                <p>wrong article link pasted </p> 
                </div>  
            }
        </div>
                ))
            }
        </>
        
    )
}