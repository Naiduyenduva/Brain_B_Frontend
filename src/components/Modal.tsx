import { CrossIcon } from "@/icons/CrossIcon";
import {Input} from "../../@/components/ui/input"
import { Button } from "./Button";

export function Modal({ open, onClose }:any) {
    return (
      open && ( // Render modal only when `open` is true
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
            <Input placeholder="title" />
            <Input placeholder="type" />
            <Input placeholder="link" />
            <Button variant="primary" text="ADD" />
          </div>
          </div>
        </div>
      )
    );
  }
  