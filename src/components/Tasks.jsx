import { useState } from 'react'
import { toast } from 'sonner'
import { 
  AddIcon, 
  CloudSunIcon, 
  MoonIcon,
  SunIcon,
  TrashIcon, } from '../assets/icons'

  import { TASKS } from '../constants/tasks'
  import Button from './Button'
  import TaskItem from './TaskItem'
  import TasksSeparator from './TasksSeparator'

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === 'morning')
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon')
  const eveningTasks = tasks.filter((task) => task.time === 'evening')

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }
      if (task.status === 'not_started') {
        toast.success("Tarefa iniciada com sucesso!")
        return {
          ...task,
          status: 'in_progress',
        }
      }
      if (task.status === 'in_progress') {
        toast.success("Tarefa concluída com sucesso!")
        return {
          ...task,
          status: 'done',
        }
      }
      if (task.status === 'done') {
        toast.success("Tarefa reiniciada com sucesso!")
        return {
          ...task,
          status: 'not_started',
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso!")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-end gap-3">
          <Button variant={'ghost'}>
            Limpar tarefas
            <TrashIcon />
          </Button>

          <Button>
            <AddIcon />
            Nova tarefa
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} content="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator icon={<CloudSunIcon />} content="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} content="Noite" />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
