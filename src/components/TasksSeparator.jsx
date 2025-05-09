import PropTypes from "prop-types"

const TasksSeparator = ({ content, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-brand-border pb-1">
      {icon}
      <p className="text-sm text-brand-text-gray">{content}</p>
    </div>
  )
}

TasksSeparator.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default TasksSeparator