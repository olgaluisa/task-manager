import InputLabel from './InputLabel'

const Input = ({ labelName, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{labelName}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-[#9a9c9f]"
        {...rest}
      />
    </div>
  )
}

export default Input
