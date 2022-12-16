import { Button } from "@mui/material"
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react"
import Pagination from "../component/pagination"
import { FRUIT } from '../constants/data'


const Interview = () => {
  const SIZE = 1
  const [currentPage, setCurrentPage] = useState(0)

  /** 自訂義變數大小:SIZE, 利用此變數讓 FRUIT(Data變數) 擁有分頁的功能, 並盡可能的優化。 e.g: Size = 5 , 一頁五筆資料 */
  
  const totalGroup = Math.ceil(FRUIT.length / SIZE)

  // [TIP]: get pagination data 
  const getBtnArray = (totalCount) => {
    console.log('start')
    let array = []
    for (let i = 1; i <= totalCount; i++) {
      array.push(i)
    }
    return array
  }

  // const btnArray = getBtnArray(totalGroup)  

  // [TIP]: reduce unnecessary function rerender
  const btnArray = useMemo(() => getBtnArray(totalGroup), [totalGroup])

  return (
    <>
      {
        FRUIT.slice(0 + (currentPage * SIZE), (currentPage + 1) * SIZE).map((e, i) =>
          <h2 key={`FRUIT_${i}`}>{e.name} {e.quantity}組</h2>
        )
      }
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} btnArray={btnArray} />
    </>
  )
}

export default Interview