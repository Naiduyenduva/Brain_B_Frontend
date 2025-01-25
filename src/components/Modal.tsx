import { CrossIcon } from "@/icons/CrossIcon";
import {Input} from "../../@/components/ui/input"
import { Button } from "./Button";
import axios from "axios";

export function Modal({ open, onClose }:any) {

  async function handlemodalcontent () {
    try {
      await axios.post("http://localhost:3000/api/v1/")
    } catch (error) {
      
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
            <Input placeholder="title" className="bg-gray-200 outline-none pl-2 h-10 border rounded-lg border-blue-800" />
            <select className="text-gray-700 h-10 outline-none border rounded-lg border-blue-800">
              <option>Twitter</option>
              <option>Youtube</option>
              <option>Document</option>
              <option>Link</option>
            </select>
            <Input placeholder="link" className="bg-gray-200 outline-none pl-2 h-10 border rounded-lg border-blue-800" />
            <Button variant="primary" text="ADD" />
          </div>
          </div>
        </div>
      )
    );
  }
  