import { type ActionContext } from 'vuex'
import { notify } from '@kyvg/vue3-notification'
import { getAllTask, createTask, updateTask, deleteTask } from '@/servises/indedxDB'

import { ActionTypes, MutationTypes } from '@/common/enums'
import { type IState, type ITask } from '../common/interfaces'

type TContext = ActionContext<IState, IState>

const actions = {
  async [ActionTypes.GetAllTasks]({ commit }: TContext) {
    try {
      const tasks = await getAllTask()
      commit(MutationTypes.GetAllTasks, tasks)
    } catch {
      notify({
        type: 'error',
        title: 'An error occurred while getting all tasks.'
      })
    }
  },
  async [ActionTypes.CreateTask]({ commit }: TContext, { payload }: { payload: string }) {
    try {
      const newTask = {
        id: String(Math.floor(Date.now())),
        done: false,
        task: payload
      }

      await createTask(newTask)

      commit(MutationTypes.CreateTask, newTask)
    } catch {
      notify({
        type: 'error',
        title: 'An error occurred while adding a task.'
      })
    }
  },
  async [ActionTypes.UpdateTask]({ commit }: TContext, { payload }: { payload: ITask }) {
    try {
      await updateTask(payload)
      commit(MutationTypes.UpdateTask, { id: payload.id, task: payload.task })
    } catch {
      notify({
        type: 'error',
        title: 'An error occurred while updating a task.'
      })
    }
  },
  async [ActionTypes.DeleteTask]({ commit }: TContext, { payload }: { payload: string }) {
    try {
      await deleteTask(payload)
      commit(MutationTypes.DeleteTask, payload)
    } catch (err) {
      notify({
        type: 'error',
        title: 'An error occurred while deleting a task.'
      })
    }
  },
  async [ActionTypes.SwitchDoneTask]({ commit }: TContext, { payload }: { payload: ITask }) {
    try {
      await updateTask(payload)
      commit(MutationTypes.SwitchDoneTask, payload.id)
    } catch (err) {
      notify({
        type: 'error',
        title: 'An error occurred while switching done a task.'
      })
    }
  }
}

export { actions }
