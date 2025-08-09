const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 space-y-1 text-left">
      <label className="text-sm font-semibold text-[#35383e]" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="rounded-lg border border-solid border-[#ececec] px-4 py-3 outline-[#00adb5] placeholder:text-sm placeholder:text-[#9a9c9f]"
        {...rest}
      />
    </div>
  )
}

export default Input
