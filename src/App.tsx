import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Signin } from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import { Signup } from "./pages/Signup"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
