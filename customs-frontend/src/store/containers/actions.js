import {containersService} from './services'
import promiseActionCreator from '../_helpers/promiseActionCreator'
import {GET_CONTAINERS} from './constants'

const actions = {
  getContainers(store, query = '') {
    return promiseActionCreator(store, containersService.getContainers(query), GET_CONTAINERS)
  }
}

export default actions
