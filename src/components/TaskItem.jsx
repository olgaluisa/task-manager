const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00adb5]/10 text-[#00adb5]'
    }
    if (task.status === 'in_progress') {
      return 'bg-[#ffaa84]/10  text-[#ffaa84]'
    }
    if (task.status === 'not_started') {
      return 'bg-[#35383e]/10  text-[#35383e]'
    }
  }
  return (
    <div
      className={`flex items-center rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      {task.title}
    </div>
  )
}

export default TaskItem
