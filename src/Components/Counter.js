import { useState } from "react"


export default function Counter() {

  const [count, SetCount] = useState(0);

  const HandleIncrement  = () => SetCount(count + 1)
  const HandleDecrement  = () => SetCount(count - 1)
  return (
    <div>
        <p>{count}</p>
        <button onClick={HandleIncrement}> Increment </button>
        <button onClick={HandleDecrement}> Decrement </button>
    </div>
  )
}
