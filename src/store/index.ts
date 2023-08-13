import { type InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { type IState } from '@/common/interfaces'

const key: InjectionKey<Store<IState>> = Symbol()

const store = createStore<IState>({
  state,
  actions,
  mutations,
  getters
})

const useStore = () => baseUseStore(key)

export { store, key, useStore }
