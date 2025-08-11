import InputLabel from './InputLabel'

const TimeSelect = (props) => {
  return (
    <div className="flex flex-col gap-1 space-y-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="time"
        className="rounded-lg border border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-red-600"
        {...props}
      >
        <option selected value="selecione" disabled>
          Selecione um horario
        </option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  )
}

export default TimeSelect
