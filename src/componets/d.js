/*
* @Author: yuri
* @Date:   2016-12-21 14:21:06
* @Last Modified by:   yuri
* @Last Modified time: 2016-12-22 14:22:23
*/

import React from 'react'

const renderUsers=(a)=>{
    if (!a) {
        return (<div>啦啦啦</div>);
    }
};
const Del=(obs)=> {
    const {value} = (obs.data1);
    return (< div >{value} {renderUsers(value)}</div >);
};


export default Del