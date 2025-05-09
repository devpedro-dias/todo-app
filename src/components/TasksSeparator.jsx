const TasksSeparator = ({ icon, content }) => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex gap-2 border-b border-brand-border pb-1">
          {icon}
          <p className="text-sm text-brand-text-gray">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default TasksSeparator
