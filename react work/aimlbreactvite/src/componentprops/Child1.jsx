import React from 'react'
import Child2 from './Child2'
import Child3 from './child3'
function Child1({child1Data}) {
  return (
    <div>Child1
        {/* Name:{child1Data.name} */}
        <Child2 child2Data={child1Data} />
        <Child3 child3Data={child1Data} />
    </div>
  )
}

export default Child1