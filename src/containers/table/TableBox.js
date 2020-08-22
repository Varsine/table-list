import React from "react"
import "./TableBox.scss"
import InputField from "../../components/inputField/InputField"

function TableBox({header, inputArr, setInputArr}) {
  const handleInputChange = (index) => {
    console.log(inputArr.length)
    if (index === inputArr.length - 1 && index + 1 !== "") {
      setInputArr([...inputArr, ""])
    }
  }
  const drop = (ev) => {
    ev.preventDefault()
    let value = ev.dataTransfer.getData("text")
    setInputArr([...inputArr, value])
  }
  const allowDrop = (event) => {
    event.preventDefault()
  }
  const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.value)
  }

  const dragEnd = (ev) => {
    const newInputArr = inputArr.filter((val) => val !== ev.target.value)
    console.log(ev.target.value)
    setInputArr(newInputArr)
  }
  return (
    <div className="table-box-column">
      <div className="row-flex">
        <p>{header}</p>
      </div>
      <div onDrop={drop} onDragOver={allowDrop}>
        <ol>
          {inputArr.map((val, index) => {
            return (
              <li key={`${header} + ${index}`}>
                <InputField
                  inputVal={val}
                  onChange={() => handleInputChange(index)}
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
