import {
  ADD_NUM,
  SUB_NUM,
  INC_NUM,
  DEC_NUM
} from './constants.js'

const addAction = (num) => {
  return {
    type: ADD_NUM,
    payload: {
      num
    }
  }
}

const subAction = (num) => {
  return {
    type: SUB_NUM,
    payload: {
      num
    }
  }
}

const incAction = () => {
  return {
    type: INC_NUM
  }
}

const decAction = () => {
  return {
    type: DEC_NUM
  }
}

export {
  addAction,
  subAction,
  incAction,
  decAction
}
