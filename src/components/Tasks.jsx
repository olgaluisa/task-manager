import Button from './Button'
import { Plus, Trash2 } from 'react-feather'

const Tasks = () => {
  return (
    <section className="w-full px-8 py-16">
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
      <section></section>
    </section>
  )
}

export default Tasks
