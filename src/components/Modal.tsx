import { CrossIcon } from "@/icons/CrossIcon";
import {Input} from "../../@/components/ui/input"
import { Button } from "./Button";
import axios from "axios";
import { useState } from "react";

export function Modal({ open, onClose, setModalOpen }:any) {

    const [ title, setTitle] = useState("");
    const [ type, setType ] = useState("twitter");
    const [ link, setLink ] = useState("");
    const [ error, setError ] = useState(null);

    function handleTitle (e:any) {
      setTitle(e.target.value);
    }
    function handleType (e:any) {
      setType(e.target.value);
    }
    function handleLink (e:any) {
      setLink(e.target.value);
    }
    console.log(error)
    
  async function handlemodalcontent () {
    try {
      const jwt = localStorage.getItem("token");
      console.log(jwt);
      await axios.post("https://brain-b-one.vercel.app/api/v1/content",{
        title,
        type,
        link
      },
      {
        headers: {
            "Authorization": jwt
        }
      });
      alert("Content added successfully")
      setModalOpen(false);
      console.log("yeah content added")
    } catch (err:any) {
      setError(err)
      
    }
  }
    return (
      open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center w-72">
            <div className="flex justify-between gap-2">
                <h2 className="text-2xl font-bold mb-4">Add Content</h2>
                <button
                onClick={onClose}
                className="mb-3"
                > <CrossIcon />
                </button>
            </div>
            <div className="grid gap-2">
            <Input placeholder="title" className="bg-gray-200 outline-none pl-2 h-10 border rounded-lg border-blue-800" onChange={handleTitle} />
            <select className="text-gray-700 h-10 outline-none border rounded-lg border-blue-800" onChange={handleType}>
              <option value={"twitter"}>Twitter</option>
              <option value={"youtube"}>Youtube</option>
              <option value={"document"}>Document</option>
              <option value={"link"}>Link</option>
            </select>
            <Input placeholder="link" className="bg-gray-200 outline-none pl-2 h-10 border rounded-lg border-blue-800" onChange={handleLink} />
            <Button variant="primary" text="ADD" onClick={handlemodalcontent} />
          </div>
          </div>
        </div>
      )
    );
  }
  