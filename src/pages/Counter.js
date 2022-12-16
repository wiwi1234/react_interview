import { Button } from "@mui/material"
import { useEffect, useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(1)
  const [bigCounter, setBigCounter] = useState(1)
  const [largeCounter, setLargeCounter] = useState(1)

  // [TIP]: handle side effect 
  useEffect(() => {
    setBigCounter(counter * 2)
    setLargeCounter(counter * 3)
  }, [counter])

  return (
    <>
      <h3>{counter}</h3>
      <h2>{bigCounter}</h2>
      <h1>{largeCounter}</h1>
      <Button onClick={() => setCounter(counter - 1) }>前一步</Button>
      <Button onClick={() => setCounter(counter + 1) }>後一步</Button>
    </>
  )
}

export default Counter