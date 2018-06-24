import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import initialState from '../_helpers/initialState'

export default {
  state: {
    ...initialState
  },
  actions,
  getters,
  mutations
}
