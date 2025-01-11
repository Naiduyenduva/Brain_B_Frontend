import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Sidebar } from "./components/Sidebar"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
    <div className="bg-gray-300 flex">
      <div className="w-72 h-screen border border-slate-900">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="p-2 flex gap-2 justify-between items-center pt-5 pl-8">
          <div className="text-xl font-bold">
            All Notes
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
            <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
          </div>
        </div>
        <div className="p-8 grid grid-cols-5 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
