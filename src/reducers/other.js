/*
* @Author: yuri
* @Date:   2016-12-22 13:44:01
* @Last Modified by:   yuri
* @Last Modified time: 2016-12-23 11:19:01
*/
import * as ACTIONS from '../action/action';
const SHOW_ALL = ACTIONS.VisibilityFilters
const other = (state = [], action) => {
  switch (action.type) {
    case 'AAA':
      return {
        ...state,
        num: state.num + 11,
      }
    case 'ZZZ':
      return {
        ...state,
        num: state.num - 11,
      }
    case 'XXX':
      return {
        ...state,
        num: state.num * 21,
      }
    case 'SSS':
      return {
        ...state,
        num: 10,
      }
    default:
      return state
  }
}
export default other