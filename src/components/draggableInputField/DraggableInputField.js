import React from "react"

import "./InputField.scss"

const DraggableInputField = ({
  inputVal,
  onDragEnd,
  onDragStart,
  onChange,
  onBlur,
  inpRef,
  onKeyPress,
  draggable,
}) => {
  return (
    <input
      type="text"
      ref={inpRef}
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
