/*
 * @Author: yuri
 * @Date:   2016-11-21 10:20:57
 * @Last Modified by:   yuri
 * @Last Modified time: 2016-12-22 14:33:28
 */
import React, { Component, PropTypes } from 'react'
import Asd from './a'
import Del from './d'

class Counter extends Component {
  static propTypes={
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onDB: PropTypes.func.isRequired,
    onReM: PropTypes.func.isRequired,
  }
  renderVlue=(value)=>{
    return value > 0 ? ( < div > < span > 当前{ value } < /span></div > ) : ( <Asd/> );
  }

  render=()=> {
    const { value, onIncrement, onDecrement, onDB ,onReM }=this.props
    const data = { value }
    return ( < div >
     { value }
      <button onClick={ onIncrement } >+< /button> 
      <button onClick={ onDecrement } >-< /button> 
      <button onClick={ onDB } >* 2 < /button>  
      <button onClick={ onReM } >ReM< /button> 
      { this.renderVlue(value) } 
      <Asd/>
      <div>
      <Del data1={data}/>
      </div>
      < /div>
    )
  }
}

export default Counter
