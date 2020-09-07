import React from "react"

import "./DraggableInputField.scss"

const DraggableInputField = ({
  inputVal,
  onDragEnd,
  onDragStart,
  onChange,
  onBlur,
  onKeyPress,
  draggable,
}) => {
  return (
    <input
      type="text"
      onKeyPress={onKeyPress}
      defaultValue={inputVal}
      onBlur={onBlur}
      onChange={onChange}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable={draggable}
    />
  )
}

export default DraggableInputField
