/*
* @Author: yuri
* @Date:   2016-12-22 13:46:42
* @Last Modified by:   yuri
* @Last Modified time: 2016-12-23 11:22:08
*/
import * as ACTIONS from '../action/action';
const SHOW_ALL  = {num:0}
export default (state = SHOW_ALL, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        num: state.num + 1,
      }
    case ACTIONS.DECREMENT:
      return {
        ...state,
        num: state.num - 1,
      }
    case ACTIONS.DB:
      return {
        ...state,
        num: state.num * 2,
      }
    case ACTIONS.ReM:
      return {
        ...state,
        num: 0,
      }
    default:
      return state
  }
}
