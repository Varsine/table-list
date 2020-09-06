import React, {useState, useRef, useEffect} from "react"

import DraggableInputField from "../../components/draggableInputField/DraggableInputField"

import "./TableBox.scss"

const TableBox = ({header, inputArr, setInputArr}) => {
  const [dragStatus, setDragStatus] = useState(true)
  const listRef = useRef()
  const inpRef = useRef()

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
    if (event.target.value === "") {
      setDragStatus(false)
    } else {
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
    console.log(listRef.current.childNodes)
    const nodelist = listRef.current.childNodes
    if (e.key === "Enter") {
      e.preventDefault()
      for (let i of nodelist)
        if (i.current.focus()) {
          return i.nextSibling.focus()
        }
    }
  }

  return (
    <div className="table-box-column">
      <div className="row-flex">
        <p>{header}</p>
      </div>
      <div onDrop={drop} onDragOver={allowDrop}>
        <ol ref={listRef}>
          {inputArr.map((val, index) => {
            return (
              <li key={`${header}-${val}-${index}`}>
                <DraggableInputField
                  draggable={dragStatus}
                  inputVal={val}
                  inpRef={inpRef}
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
