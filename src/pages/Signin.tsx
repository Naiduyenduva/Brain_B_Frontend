import {Input} from "../../@/components/ui/input"
import { Button } from "@/components/Button"
import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export function Signin () {
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

  async function handlleSignin () {
    try {
      const response = await axios.post("https://brain-b-one.vercel.app/api/v1/signin",{
        username,
        password
      })
      const jwt = response.data.token;
      localStorage.setItem('token',jwt)
      alert("logged in successfull")
      navigate("/dashboard")
    } catch (err:any) {
      setError(err)
      console.log(error)
    }
  }
  return (
    <div className="grid justify-center p-10 mt-16">
          <div className="w-80 h-80 p-5 bg-slate-50 border shadow-lg border-slate-200 grid gap-2">
            <h1 className='font-semibold text-2xl text-center'>Login</h1>
            <Input placeholder="Username" className="pl-2" onChange={handleUsername} />
            <Input placeholder="Password" className="pl-2" onChange={handlePassword} />
            <h6>Dont't have an account ? <Link to="/signup"><span className="text-blue-600">Signup</span></Link> </h6>
            <Button text="Login" variant="primary" onClick={handlleSignin} />
          </div>
        </div>
  )
}
