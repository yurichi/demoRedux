/*
 * @Author: yuri
 * @Date:   2016-11-21 10:21:05
 * @Last Modified by:   yuri
 * @Last Modified time: 2016-12-21 15:35:25
 */

const aaa = {
  num: 0,
};
export default (state = aaa, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: state.num + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        num: state.num - 1,
      }
    case 'DB':
      return {
        ...state,
        num: state.num * 2,
      }
    case 'ReM':
      return {
        ...state,
        num: 0,
      }
    default:
      return state
  }
}
