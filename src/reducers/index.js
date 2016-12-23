/*
 * @Author: yuri
 * @Date:   2016-11-21 10:21:05
 * @Last Modified by:   yuri
 * @Last Modified time: 2016-12-23 11:21:00
 */
import {combineReducers} from 'redux';
// import other from './other';
import another from './another';


const chatReducer = combineReducers({
  // ...other,
  another
})

export default chatReducer;
// const aaa = {
//   num: 0,
// };
// export default (state = aaa, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         num: state.num + 1,
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         num: state.num - 1,
//       }
//     case 'DB':
//       return {
//         ...state,
//         num: state.num * 2,
//       }
//     case 'ReM':
//       return {
//         ...state,
//         num: 0,
//       }
//     default:
//       return state
//   }
// }