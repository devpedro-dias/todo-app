import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
      })
      const task = await response.json()
      setTask(task)
    }
    fetchTasks()
  }, [taskId])

  return (
    <div>
      <h1>{task?.title}</h1>
      <p>{task?.description}</p>
    </div>
  )
}

export default TaskDetailsPage
