import React from "react"

import InputField from "../../components/inputField/InputField"

import "./TableBox.scss"

const TableBox = ({header, inputArr, setInputArr}) => {
  const copyInputArr = inputArr
  const handleInputChange = (event, index) => {
    copyInputArr[index][event.target.name] = event.target.value
    setInputArr(copyInputArr)
    if (index === copyInputArr.length - 1 && index + 1 !== "") {
      setInputArr([...copyInputArr, ""])
    }
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
    console.log(filterInputArr)
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
                  inputname={val}
                  inputVal={val}
                  inputRef={inputRef}
                  onChange={(event) => handleInputChange(event, index)}
                  inputArr={inputArr}
                  onDragEnd={dragEnd}
                  onDragStart={dragStart}
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
