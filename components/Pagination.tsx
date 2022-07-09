import {useState} from 'react'

interface Props {
    current: number
    onChange(page:number):void
    hasNext: boolean
}

const Pagination:React.FC<Props> = ({
    current,
    onChange,
    hasNext
}) => {

const previousPage = () => {
    onChange(current-1)
}

const nextPage = () => {
    onChange(current+1)
}
  return (
  <div className="btn-group w-full flex justify-center mb-10 mt-10">
    <button className={`btn btn-lg ${current === 1 ? "btn-disabled" : ""}`} onClick={previousPage}>«</button>
    <button className="btn btn-lg bg-primary">{current}</button>
    <button className={`btn btn-lg ${hasNext ? "" : "btn-disabled"}`}onClick={nextPage}>»</button>
  </div>)
}

export default Pagination