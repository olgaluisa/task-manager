import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <section className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00adb5]">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">Inicio</SidebarButton>
        <SidebarButton variant="selected">Minhas tarefas</SidebarButton>
      </div>
    </section>
  )
}

export default Sidebar
