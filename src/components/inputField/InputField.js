import React from "react"

import "./InputField.scss"

const InputField = ({
  inputVal,
  inputName,
  onDragEnd,
  onDragStart,
  onChange,
}) => {
  return (
    <input
      type="text"
      defaultValue={inputVal}
      name={inputName}
      onChange={onChange}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable="true"
    />
  )
}

export default InputField
