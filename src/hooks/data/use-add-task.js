import { useMutation, useQueryClient } from '@tanstack/react-query'

import { taskMutationKeys } from '../../keys/index'
import { api } from '../../lib/axios'

export const useAddTask = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: taskMutationKeys.create(),
    mutationFn: async (task) => {
      const { data: createdTask } = await api.post('/tasks', task)
      return createdTask
    },
    onSuccess: (createdTask) => {
      queryClient.setQueryData(['tasks'], (oldTasks) => [
        ...oldTasks,
        createdTask,
      ])
    },
  })
}
