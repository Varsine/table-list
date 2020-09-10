import React from "react"

import "./DraggableInputField.scss"

const DraggableInputField = ({
  inputVal,
  onDragEnd,
  onDragStart,
  onChange,
  onBlur,
  onKeyPress,
  name
}) => {
  return (
    <input
      type="text"
      id={name}
      onKeyPress={onKeyPress}
      defaultValue={inputVal}
      onBlur={onBlur}
      onChange={onChange}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable={true}
    />
  )
}

export default DraggableInputField
