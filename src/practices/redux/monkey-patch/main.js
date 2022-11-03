import { legacy_createStore as legacyCreateStore } from 'redux'
import { addAction } from '../store/counter/actionsCreators.js'
import { reducer } from '../store/reducer.js'

const store = legacyCreateStore(reducer)

// 0
// console.log("------", addAction(5));
// store.dispatch(addAction(5));
// console.log("======", store.getState().counter);

// 1
// function dispatchNLogging(action) {
//   console.log("------", addAction(5));
//   store.dispatch(action);
//   console.log("======", store.getState().counter);
// }

// dispatchNLogging(addAction(5));

// 2
// const next = store.dispatch;

// function dispatchNLogging(action) {
//   console.log("------", addAction(5));
//   next(action);
//   console.log("======", store.getState().counter);
// }

// store.dispatch = dispatchNLogging;

// store.dispatch(addAction(5));

// 3
function patchLogging (store) {
  const next = store.dispatch

  function dispatchAndLogging (action) {
    console.log('------', addAction(5))
    next(action)
    console.log('======', store.getState().counter)
  }

  // store.dispatch = dispatchAndLogging;

  return dispatchAndLogging
}

function patchThunk (store) {
  const next = store.dispatch

  function dispatchAndThunk (action) {
    if (typeof action === 'function') {
      action(store.getState, store.dispatch)
    } else {
      next(action)
    }
  }

  // store.dispatch = dispatchAndThunk;

  return dispatchAndThunk
}

patchLogging(store)
patchThunk(store)

// store.dispatch(addAction(5));
// store.dispatch(addAction(5));

function foo (dispatch, store) {
  console.log(dispatch, store)
}

// 4 封装 applyMiddleware
function applyMiddleware (...middlewares) {
  const newMiddlewares = [...middlewares]

  newMiddlewares.forEach((middleware) => {
    store.dispatch = middleware(store)
  })
}

applyMiddleware(patchLogging, patchThunk)

store.dispatch(foo)
