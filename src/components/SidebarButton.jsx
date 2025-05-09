const SideBarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'ghost') {
      return 'text-brand-dark-blue'
    }

    if (variant === 'selected') {
      return 'bg-brand-primary bg-opacity-15 text-brand-primary'
    }
  }

  return (
    <a
      href="/home"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  )
}

export default SideBarButton
