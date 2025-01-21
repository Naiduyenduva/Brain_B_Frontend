import {Input} from "../../@/components/ui/input"
import { Button } from "@/components/Button"
import { Link } from "react-router-dom"
export function Signin () {
  return (
    <div className="grid justify-center p-10 mt-16">
          <div className="w-80 h-72 p-5 bg-slate-50 border shadow-lg border-slate-200 grid gap-2">
            <h1 className='font-semibold text-2xl text-center'>Signin</h1>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <h6>Dont't have an account?<Link to="/signup"><span className="text-blue-600">Signup</span></Link> </h6>
            <Button text="Signin" variant="primary" />
          </div>
        </div>
  )
}
