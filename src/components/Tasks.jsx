import Button from './Button'
import { Plus, Trash2, Sunrise, Sun, Moon } from 'react-feather'

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
      {/*Lista de tarefas*/}
      <section className="w-full rounded-xl bg-white p-6">
        <article className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1 **:text-[#9a9c9f]">
            <Sunrise size={18} />
            <p className="text-sm">Manhã</p>
          </div>
          <p>Ir para academia</p>
        </article>
        <article className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1 **:text-[#9a9c9f]">
            <Sun size={18} />
            <p className="text-sm">Tarde</p>
          </div>
          <p>Trabalhar focada</p>
        </article>
        <article className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1 **:text-[#9a9c9f]">
            <Moon size={18} />
            <p className="text-sm">Noite</p>
          </div>
          <p>Ler</p>
        </article>
      </section>
    </section>
  )
}

export default Tasks
