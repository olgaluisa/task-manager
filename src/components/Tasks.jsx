import Button from './Button'
import { Plus, Trash2, Sunrise, Sun, Moon } from 'react-feather'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import data from '../constants/tasks'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [tasks, setTasks] = useState(data)

  const morningTasks = tasks.filter((t) => t.period === 'morning')
  const afternoonTasks = tasks.filter((t) => t.period === 'afternoon')
  const eveningTasks = tasks.filter((t) => t.period === 'evening')

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }
      if (task.status === 'not_started') {
        return { ...task, status: 'in_progress' }
      }
      if (task.status === 'in_progress') {
        return { ...task, status: 'done' }
      }
      if (task.status === 'done') {
        return { ...task, status: 'not_started' }
      }

      return task
    })
    setTasks(newTasks)
  }
  return (
    <section className="w-full space-y-6 px-8 py-16">
      <section className="flex w-full items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00adb5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <Trash2 size={20} />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <Plus size={20} />
          </Button>
        </div>
      </section>

      <section className="w-full rounded-xl bg-white p-6">
        <article className="space-y-3">
          <TasksSeparator icon={<Sunrise size={18} />} text={'Manhã'} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </article>

        <article className="my-6 space-y-3">
          <TasksSeparator icon={<Sun size={18} />} text={'Tarde'} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </article>

        <article className="space-y-3">
          <TasksSeparator icon={<Moon size={18} />} text={'Noite'} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </article>
      </section>
    </section>
  )
}

export default Tasks
