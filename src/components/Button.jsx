const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00adb5] text-white'
    }
    if (variant === 'secondary') {
      return 'bg-[#eeeeee] text-[#35383e]'
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]'
    }
  }
  const getSizeClasses = () => {
    if (size === 'small') {
      return 'py-1 text-xs'
    }
    if (size === 'large') {
      return 'py-2 text-sm'
    }
  }
  return (
    <button
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
