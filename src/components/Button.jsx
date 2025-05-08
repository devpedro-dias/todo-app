const Button = ({ children, variant = 'default', ...props }) => {
  const getVariantClasses = () => {
    if (variant === 'default') {
      return 'bg-[#00ADB5] text-white'
    }

    if (variant === 'ghost') {
      return 'bg-transaparent text-[#818181]'
    }
  }

  return (
    <button
      className={`flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-opacity hover:bg-opacity-90 ${getVariantClasses()}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
