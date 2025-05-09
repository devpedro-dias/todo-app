import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const SideBarButton = ({ children, color }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3",
    variants: {
      color: {
        selected: "bg-brand-primary bg-opacity-15 text-brand-primary",
        unselected: "text-brand-dark-blue",
      },
    },
  })
  
  const getVariantClasses = () => {
    if (color === 'ghost') {
      return 'text-brand-dark-blue'
    }

    if (color === 'selected') {
      return 'bg-brand-primary bg-opacity-15 text-brand-primary'
    }
  }

  return (
    <a href="#" className={sidebar({ color })}>
      {children}
    </a>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]),
}

export default SideBarButton
