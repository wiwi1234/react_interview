import { Button } from "@mui/material"
import { useEffect, useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(1)
  const [bigCounter, setBigCounter] = useState(1)
  const [giantCounter, setGiantCounter] = useState(1)


  setCounter(3)

  useEffect(() => {
    setBigCounter(counter * 2)
  }, [bigCounter])

  return (
    <>
      <h3>{counter}</h3>
      <h2>{bigCounter}</h2>
      <h1>{giantCounter}</h1>
      <Button onClick={() => {setCounter(counter - 1); setBigCounter((counter -1) * 2)}}>前一步</Button>
      <Button onClick={() => {setCounter(counter + 1); setBigCounter((counter + 1) * 2)}}>後一步</Button>
    </>
  )
}

export default Counter