import { Button } from "@mui/material"

const Pagination = ({ btnArray = [], currentPage = 0, setCurrentPage = () => { } }) => {
  return (
    <>
      {
        btnArray.map(e =>
          <Button style={{ color: (currentPage + 1) === e && 'red' }} onClick={() => setCurrentPage(e - 1)}>{e}</Button>
        )
      }
    </>
  )
}

export default Pagination