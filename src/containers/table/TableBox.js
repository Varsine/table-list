import React from "react"
import InputField from "./InputField"

function TableBox(props) {
  const drop = (ev, cat) => {
    ev.preventDefault()
    let id = ev.dataTransfer.getData("text")
    props.inputArr.filter((val, index, arr) => {
      if (arr[index] === id) {
        cat = arr[index]
      }
      return cat
    })
    console.log(props.inputArr)
    props.setInputArr([...props.inputArr, cat])
  }
  const allowDrop = (event) => {
    event.preventDefault()
  }

  return (
    <div className="table-box-column">
      <div className="row-flex">
        <p>{props.header}</p>
      </div>
      <div>
        <ol>
          {props.inputArr.map((val, index) => {
            return (
              <li
                onDrop={(e) => drop(e, val)}
                onDragOver={allowDrop}
                key={`${props.header} + ${index}`}
              >
                <InputField
                  value={val}
                  index={index}
                  inputArr={props.inputArr}
                  setInputArr={props.setInputArr}
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
