export const taskMutationKeys = {
  create: () => ['add-ask'],
  delete: (taskId) => ['delete-task', taskId],
  update: (taskId) => ['update-task', taskId],
}
