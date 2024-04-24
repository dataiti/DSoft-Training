export function taskExists(tasks, taskName) {
  return tasks.some((task) => task.taskName === taskName);
}

export function findIndexTask(tasks, taskId) {
  return tasks.findIndex((task) => task.id === taskId);
}
