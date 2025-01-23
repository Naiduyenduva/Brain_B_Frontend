import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Signin } from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import { Signup } from "./pages/Signup"
import { Landing } from "./pages/Landing"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
