import SidebarButton from './SidebarButton'
import HomeIcon from '../assets/icons/home.svg?react'
import TasksIcon from '../assets/icons/tasks.svg?react'

const Sidebar = () => {
  return (
    <section className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00adb5]">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">
          <HomeIcon />
          Inicio
        </SidebarButton>
        <SidebarButton variant="selected">
          <TasksIcon />
          Minhas tarefas
        </SidebarButton>
      </div>
    </section>
  )
}

export default Sidebar
