import { createPortal } from 'react-dom'
import Input from './Input'
import Button from './Button'

const AddTaskDialog = ({ isOpen, hadleClose }) => {
  if (isOpen)
    return createPortal(
      <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center backdrop-blur">
        <div className="w-[336px] rounded-xl bg-white p-5 text-center shadow">
          <h2 className="text-xl font-semibold text-[#35383e]">Nova Tarefa</h2>
          <p className="mt-1 mb-4 text-[#9a9c9f]">
            Insira as informações abaixo:
          </p>
          <div className="flex flex-col space-y-4">
            <Input
              id="Titulo"
              label="Titulo"
              placeholder="Insira o titulo da tarefa"
            />
            <Input id="time" label="Horário" placeholder="Horário" />
            <Input
              id="description"
              label="Descrição"
              placeholder="Descreva a tarefa"
            />
            <div className="flex items-center gap-3">
              <Button
                variant="secudary"
                size="large"
                className="w-full"
                onClick={hadleClose}
              >
                Cancelar
              </Button>
              <Button size="large" className="w-full">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
}

export default AddTaskDialog
