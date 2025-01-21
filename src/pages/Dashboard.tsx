import { Sidebar } from '../components/Sidebar'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Modal } from '@/components/Modal'

const Dashboard = () => {
  return (
    <>
    <div>
      <Modal />
      <div className="bg-slate-100 flex">
        <div className="min-w-60 h-screen border border-slate-900 fixed top-0 left-0">
          <Sidebar />
        </div>
        <div className="w-full ml-60">
          <div className="p-2 flex gap-2 justify-between items-center pt-5 pl-8">
            <div className="text-xl font-bold">
              All Notes
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
              <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
            </div>
          </div>
          <div className="p-8 grid grid-cols-3 gap-5">
            <Card link="https://twitter.com/Lucky49871195/status/1857827696593760522" type="twitter" />
            <Card link="https://twitter.com/Lucky49871195/status/1857827696593760522" type="twitter" />
            <Card link="https://twitter.com/Lucky49871195/status/1857827696593760522" type="twitter" />
            <Card link="https://twitter.com/Lucky49871195/status/1857827696593760522" type="twitter" />
          </div>
        </div>
      </div>
    </div>
      </>
    )
}

export default Dashboard