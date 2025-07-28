import Button from './Button'
import { Plus, Trash2, Sunrise, Sun, Moon } from 'react-feather'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import data from '../constants/tasks'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [task] = useState(data)

  const morningTasks = task.filter((t) => t.period === 'morning')
  const afternoonTasks = task.filter((t) => t.period === 'afternoon')
  const eveningTasks = task.filter((t) => t.period === 'evening')
  return (
    <section className="w-full space-y-2 px-8 py-16">
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
            <TaskItem key={task.id} task={task} />
          ))}
        </article>

        <article className="my-6 space-y-3">
          <TasksSeparator icon={<Sun size={18} />} text={'Tarde'} />
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </article>

        <article className="space-y-3">
          <TasksSeparator icon={<Moon size={18} />} text={'Noite'} />
          {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </article>
      </section>
    </section>
  )
}

export default Tasks
