import { Button } from "@/components/Button"
import {Input} from "../../@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export function Signup () {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const navigate = useNavigate();

    function handleUsername(e:any) {
      setUsername(e.target.value)
    }
    function handlePassword(e:any) {
      setPassword(e.target.value)
    }

  async function handleSignup () {
    try {
      const response = await axios.post("https://brain-b-one.vercel.app/api/v1/signup",{
        username,
        password
      })
      console.log("hfscshdg")
      console.log(response)
      navigate("/login")
      alert("You have signed up!")
    } catch (err:any) {
      setError(err.message)
      console.log(error)
    }
  } 
  return (
    <div className="grid justify-center p-10 mt-16">
      <div className="w-80 h-80 p-5 bg-slate-50 border shadow-lg border-slate-200 grid gap-2">
        <h1 className='font-semibold text-2xl text-center'>Signup</h1>
        <Input placeholder="Username" onChange={handleUsername} />
        <Input placeholder="Password" onChange={handlePassword} />
        <h6>Already have an account ? <Link to="/login"><span className="text-blue-600">Login</span></Link> </h6>
        <Button text="Signup" variant="primary" onClick={handleSignup} />
      </div>
    </div>
  )
}