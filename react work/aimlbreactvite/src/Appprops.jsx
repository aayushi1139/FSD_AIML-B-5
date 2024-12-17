import React from 'react'
import Child1 from './componentprops/child1'
function Appprops() {
    const studentData={
        name:"Aayushi Kumari",
        branch:"CSE AIML",
        section:"B",
        coolege:"ABES EC"
    }
  return (
    <div>appprops
        <Child1 child1Data={studentData} />
    </div>
  )
}

export default Appprops