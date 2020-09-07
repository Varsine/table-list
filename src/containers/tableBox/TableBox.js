import React, {useState, useRef} from "react"

import DraggableInputField from "../../components/draggableInputField/DraggableInputField"

import "./TableBox.scss"

const TableBox = ({header, inputArr, setInputArr}) => {
  const [dragStatus, setDragStatus] = useState(true)
  const olElementRef = useRef()

  const handleInputChange = (index) => {
    if (index === inputArr.length - 1 && index + 1 !== "") {
      setInputArr([...inputArr, ""])
    }
  }
  const inputBlur = (event, index) => {
    const copyInputArr = [...inputArr]
    const value = event.target.value
    copyInputArr[index] = value
    setInputArr([...copyInputArr])
    if (event.target.value === "") {
      const newInputArr = copyInputArr.filter(
        (val) => val !== event.target.value
      )
      setInputArr([...newInputArr, ""])
    }
  }
  const drop = (ev) => {
    ev.preventDefault()
    const value = ev.dataTransfer.getData("text")
    if (value === "") {
      setDragStatus(false)
    } else {
      const copyInputArr = [...inputArr]
      const newInputArr = copyInputArr.filter((val) => val !== "")
      setInputArr([...newInputArr, value, ""])
    }
  }
  const allowDrop = (event) => {
    event.preventDefault()
  }
  const dragStart = (event) => {
    event.target.classList.add("input-drop")

    if (event.target.value === "") {
      setDragStatus(false)
    } else {
      setDragStatus(true)
      event.dataTransfer.setData("text", event.target.value)
    }
  }

  const dragEnd = (ev) => {
    if (ev.target.value !== "") {
      const filterInputArr = inputArr.filter((val) => val !== ev.target.value)
      setInputArr(filterInputArr)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      olElementRef.current.lastChild.firstChild.focus()
    }
  }

  return (
    <div className="table-box-column">
      <div className="row-flex">
        <p>{header}</p>
      </div>
      <div onDrop={drop} onDragOver={allowDrop}>
        <ol ref={olElementRef}>
          {inputArr.map((val, index) => {
            return (
              <li key={`${header}-${val}-${index}`}>
                <DraggableInputField
                  draggable={dragStatus}
                  inputVal={val}
                  onChange={() => handleInputChange(index)}
                  inputArr={inputArr}
                  onDragEnd={dragEnd}
                  onDragStart={dragStart}
                  onKeyPress={handleKeyPress}
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
