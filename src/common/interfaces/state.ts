import type { ITask } from './task'

export interface IState {
  tasks: ITask[]
  editTask: string | undefined
}
