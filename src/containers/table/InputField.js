import React from "react"

function InputField(props) {
  const handleInputClick = (index, inputArr, setInputArr) => {
    if (index + 1 === inputArr.length && inputArr[index] !== "") {
      setInputArr([...inputArr, ""])
    }
  }

  const handleInputChange = (index, inputArr, setInputArr) => {
    if (inputArr[index + 1] !== "") {
      setInputArr([...inputArr, ""])
    }
  }

  const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id)
  }

  return (
    <div>
      <input
        type="text"
        defaultValue={props.value}
        onClick={() =>
          handleInputClick(props.index, props.inputArr, props.setInputArr)
        }
        onChange={() =>
          handleInputChange(props.index, props.inputArr, props.setInputArr)
        }
        onDragStart={dragStart}
        draggable="true"
        id={`${props.value} +${props.index}`}
      />
    </div>
  )
}

export default InputField
