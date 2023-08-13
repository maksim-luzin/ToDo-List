/* eslint-disable @typescript-eslint/no-unused-vars */
import { MutationTypes } from '../common/enums'
import { type IState, type ITask, type IUpdateTask } from '../common/interfaces'

const mutations = {
  [MutationTypes.CreateTask](state: IState, task: ITask) {
    state.tasks.push(task)
    state.editTask = undefined
  },
  [MutationTypes.EditTask](state: IState, id: string | undefined) {
    state.editTask = id
  },
  [MutationTypes.UpdateTask](state: IState, { id, task }: IUpdateTask) {
    state.tasks = state.tasks.map((taskObject) =>
      taskObject.id !== id ? taskObject : { ...taskObject, task }
    )
    state.editTask = undefined
  },
  [MutationTypes.DeleteTask](state: IState, id: string) {
    state.tasks = state.tasks.filter(({ id: taskId }) => id !== taskId)
    state.editTask = undefined
  },
  [MutationTypes.SwitchDoneTask](state: IState, id: string) {
    state.tasks = state.tasks.map((taskObject) =>
      taskObject.id !== id ? taskObject : { ...taskObject, done: !taskObject.done }
    )
  },
  [MutationTypes.GetAllTasks](state: IState, tasks: ITask[]) {
    state.tasks = tasks
  }
}

export { mutations }
