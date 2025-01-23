import { Button } from "@/components/Button"
import {Input} from "../../@/components/ui/input"
import { Link } from "react-router-dom"
export function Signup () {
  return (
    <div className="grid justify-center p-10 mt-16">
      <div className="w-80 h-80 p-5 bg-slate-50 border shadow-lg border-slate-200 grid gap-2">
        <h1 className='font-semibold text-2xl text-center'>Signup</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <h6>Already have an account ? <Link to="/login"><span className="text-blue-600">Login</span></Link> </h6>
        <Button text="Signup" variant="primary" />
      </div>
    </div>
  )
}