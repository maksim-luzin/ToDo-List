import { GetterTypes } from '@/common/enums'
import { type IState } from '@/common/interfaces'

const getters = {
  [GetterTypes.GetTasks]({ tasks }: IState) {
    return tasks
  },
  [GetterTypes.IsEditTask]({ editTask }: IState) {
    return (id: string): boolean => !(!editTask || id !== editTask)
  }
}

type TGetters = typeof getters

interface IGetters {
  getters: TGetters
}

export { getters }
export type { TGetters, IGetters }
