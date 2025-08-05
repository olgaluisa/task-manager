import { createPortal } from 'react-dom'

const AddTaskDialog = ({ isOpen, setIsOpen }) => {
  if (isOpen)
    return createPortal(
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur"
        onClick={() => setIsOpen(false)}
      >
        <div className="h-1/2 w-1/4 rounded-xl bg-white p-5 text-center shadow">
          <h2 className="text-xl font-semibold text-[#35383e]">Nova Tarefa</h2>
          <p className="mt-1 text-[#9a9c9f]">Insira as informações abaixo:</p>
        </div>
      </div>,
      document.body
    )
}

export default AddTaskDialog
