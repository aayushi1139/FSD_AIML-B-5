import React, { useEffect } from 'react'

function useEffectWorking() {
 const [count, setCount] = useState(10);
 function changes(){
    setCount(count+10);
 }
    useEffect(() => {
        console.log("component.render" + count);
})
  return (
    <div>
      UseEffectWorking
    
    <button onClick={chnages}>do changes</button>
    </div>
  )
}

export default useEffectWorking