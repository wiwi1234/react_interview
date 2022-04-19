import { Button } from "@mui/material"
import { FRUIT } from '../constants/data'

const Interview = () => {
  const SIZE = 0

  /** 自訂義變數大小:SIZE, 利用此變數讓 FRUIT(Data變數) 擁有分頁的功能 , 並盡可能的優化。 */

  return (
    <>
      {
        FRUIT.map((e, i) =>
          <h2 key={`FRUIT_${i}`}>{e.name} {e.quantity}組</h2>
        )
      }
      <Button>{'分頁按鈕樣式'}</Button>
    </>
  )
}

export default Interview