/**
 * @param {Object} reducers 一个具有多个 reducer函数 作为值的对象
 * @returns {Function} 返回 combination函数
 */
export function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}

  // 判断传入的 reducers对象 的值是否为函数，是则赋给 finalReducers
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }

  const finalReducerKeys = Object.keys(finalReducers)

  /**
   * 执行 combineReducers(reducers) 返回 combination 函数，
   * 该函数内部会根据筛选后的 finalReducerKeys 生成对应的 reducer ，
   * 并将通过调用 reducer 后返回的 newState 与先前的 previousState 对比，
   * 如果两者不同则返回 newState
   */
  return function combination (state = {}, action) {
    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
      hasChanged = hasChanged || previousStateForKey !== nextStateForKey
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length

    return hasChanged ? nextState : state
  }
}
