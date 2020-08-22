import React from "react"
import "./InputField.scss"

function InputField({inputVal, onDragEnd, onDragStart, onChange}) {
  return (
    <div>
      <input
        type="text"
        defaultValue={inputVal}
        onChange={onChange}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        draggable="true"
      />
    </div>
  )
}

export default InputField
