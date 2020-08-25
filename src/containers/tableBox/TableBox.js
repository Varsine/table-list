import React from "react"

import InputField from "../../components/inputField/InputField"

import "./TableBox.scss"

const TableBox = ({header, inputArr, setInputArr}) => {
  const copyInputArr = [...inputArr]
  const handleInputChange = (index) => {
    if (index === copyInputArr.length - 1 && index + 1 !== "") {
      setInputArr([...copyInputArr, ""])
    }
  }
  const inputBlur = (event, index) => {
    const value = event.target.value
    copyInputArr[index] = value
    setInputArr([...copyInputArr])
  }
  const drop = (ev) => {
    ev.preventDefault()
    let value = ev.dataTransfer.getData("text")
    setInputArr([...copyInputArr, value])
  }
  const allowDrop = (event) => {
    event.preventDefault()
  }
  const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.value)
  }

  const dragEnd = (ev) => {
    const filterInputArr = copyInputArr.filter((val) => val !== ev.target.value)
    setInputArr(filterInputArr)
  }
  return (
    <div className="table-box-column">
      <div className="row-flex">
        <p>{header}</p>
      </div>
      <div onDrop={drop} onDragOver={allowDrop}>
        <ol>
          {copyInputArr.map((val, index) => {
            return (
              <li key={`${header}-${val}-${index}`}>
                <InputField
                  inputVal={val}
                  onChange={() => handleInputChange(index)}
                  inputArr={inputArr}
                  onDragEnd={dragEnd}
                  onDragStart={dragStart}
                  onBlur={(event) => inputBlur(event, index)}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default TableBox
