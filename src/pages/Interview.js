import { Button } from "@mui/material"
import { useState, useMemo } from "react"
import { FRUIT } from '../constants/data'

const Interview = () => {
  const SIZE = 1
  const pages = []
  const [currentPage, setCurrentPage] = useState(0)

  const p = useMemo(() => {
    for (let i = 1; i <= Math.ceil(FRUIT.length / SIZE); i++) {
      pages.push(i)
    }
    return pages
  }, [Math.ceil(FRUIT.length / SIZE)])

  const btnOnClick = (page) => {
    setCurrentPage(page - 1)
  }

  return <>
    {
      FRUIT.slice(currentPage * SIZE, (currentPage + 1) * SIZE).map((e, i) =>
        <h2 key={`FRUIT_${i}`}>{e.name} {e.quantity}組</h2>
      )
    }
    {
      p.map((e, i) =>
        <Button key={i} onClick={() => btnOnClick(e)}>{e}</Button>
      )
    }
  </>
}

export default Interview