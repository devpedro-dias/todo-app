const TasksSeparator = ({ icon, content }) => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex gap-2 border-b border-[#F4F4F5] pb-1">
          {icon}
          <p className="text-sm text-[#9A9C9F]">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default TasksSeparator
