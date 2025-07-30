import { Check, Loader, ExternalLink, Trash2 } from 'react-feather'
import Button from './Button'
const TaskItem = ({ task, handleTaskCheckboxClick }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00adb5]/10 text-[#00adb5]'
    }
    if (task.status === 'in_progress') {
      return 'bg-[#ffaa84]/10 text-[#ffaa84]'
    }
    if (task.status === 'not_started') {
      return 'bg-[#35383e]/10  text-[#35383e]'
    }
  }
  const getStatusColor = () => {
    if (task.status === 'done') return 'bg-[#00adb5]'
    if (task.status === 'in_progress') return 'bg-[#ffaa84] '
    if (task.status === 'not_started') return 'bg-[#35383e]/10 '
  }
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusColor()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            onChange={() => handleTaskCheckboxClick(task.id)}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === 'done' && <Check className="text-white" />}
          {task.status === 'in_progress' && (
            <Loader className="animate-spin text-white" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">
          <Trash2 size={20} className="cursor-pointer" />
        </Button>
        <a href="/">
          <ExternalLink
            size={20}
            className="cursor-pointer text-[#818181] transition hover:opacity-75"
          />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
