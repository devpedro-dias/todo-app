import { useState } from 'react'

import { DoubleArrowIcon, HomeIcon, TasksIcon } from '../assets/icons'
import SidebarButton from './SidebarButton'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`z-1 fixed top-4 rounded-r bg-white p-2 text-white shadow-xl transition-all duration-300 ${
          isOpen ? 'left-72' : 'left-0'
        }`}
      >
        {isOpen ? (
          <DoubleArrowIcon className="h-4 w-4 rotate-180" />
        ) : (
          <DoubleArrowIcon className="h-4 w-4" />
        )}
      </button>

      <div
        className={`fixed left-0 top-0 z-40 h-screen w-72 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold">Task Manager</h1>
          <p>
            Um simples{' '}
            <span className="text-brand-primary">organizador de tarefas</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <SidebarButton color="unselected" to="/">
            <HomeIcon />
            Início
          </SidebarButton>
          <SidebarButton color="selected" to="/tasks">
            <TasksIcon />
            Minhas tarefas
          </SidebarButton>
        </div>
      </div>
    </>
  )
}

export default Sidebar
