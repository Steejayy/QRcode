export default function mutationsCreator(moduleName, data) {
  moduleName = moduleName.toUpperCase()
  const requestAction = `${moduleName}_REQUEST`
  const successAction = `${moduleName}_SUCCESS`
  const failedAction = `${moduleName}_FAILED`
  const notFoundAction = `${moduleName}_NOT_FOUND`

  return {
    [requestAction] (state) {
      state.success = false
      state.loading = true
      state.message = ''
      state.error = null
    },
    [successAction] (state, mutation) {
      state.success = true
      state.loading = false
      state.message = mutation.payload.message
      state.data = mutation.payload.data
    },
    [failedAction] (state, mutation) {
      state.success = false
      state.loading = false
      state.error = mutation.payload.error
      state.message = mutation.payload.message
      console.error(`Error in ${moduleName}: ${mutation.payload.error}`)
    },
    [notFoundAction] (state, mutation) {
      console.log(mutation)
      state.success = false
      state.loading = false
      state.error = mutation.payload.error
      console.error(`Error in ${moduleName}: ${mutation.payload.error}`)
    }
  }
}
