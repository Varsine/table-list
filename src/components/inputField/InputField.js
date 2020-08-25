import React from "react"

import "./InputField.scss"

const InputField = ({
  inputVal,
  onDragEnd,
  onDragStart,
  onChange,
  onBlur,
}) => {
  return (
    <input
      type="text"
      defaultValue={inputVal}
      onBlur={onBlur}
      onChange={onChange}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable="true"
    />
  )
}

export default InputField
