const TasksSeparator = ({ text, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-[#f4f4f5] pb-1 **:text-sm **:text-[#9a9c9f]">
      {icon}
      <p>{text}</p>
    </div>
  )
}

export default TasksSeparator
