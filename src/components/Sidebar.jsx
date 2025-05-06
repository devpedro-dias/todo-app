import SideBarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className="h-screen max-w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SideBarButton variant={'ghost'}>Início</SideBarButton>
        <SideBarButton variant={'selected'}>Minhas tarefas</SideBarButton>
      </div>
    </div>
  )
}

export default Sidebar
