/*
* @Author: yuri
* @Date:   2016-12-22 15:05:26
* @Last Modified by:   yuri
* @Last Modified time: 2016-12-23 10:43:54
*/

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const DB = 'DB'
export const ReM = 'ReM'

export const VisibilityFilters = {
  num: 0,
};

export const increment = (num) => ({
  type: INCREMENT,
  num,
});