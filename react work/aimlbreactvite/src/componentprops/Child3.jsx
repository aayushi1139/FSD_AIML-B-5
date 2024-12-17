import React from 'react'

function Child3({child3Data}) {
  return (
    <div>Child3<br></br>
        Name:{child3Data.name}<br></br>
        Branch:{child3Data.branch}<br></br>
        Section:{child3Data.section}<br></br>
        Coolege:{child3Data.coolege}<br></br>
    </div>
  )
}

export default Child3