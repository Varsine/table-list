import React, {useContext} from "react"
import {MyContext} from "../../Context"

export default function Table() {
  const {list, setList, list1, setList1} = useContext(MyContext)

  const todoListclick = (index) => {
    if (index + 1 === list.length) {
      setList([...list, ""])
    }
  }
  const todoListOneclick = (index) => {
    if (index + 1 === list1.length) {
      setList1([...list1, ""])
    }
  }
  return (
    <div className="table">
      <div className="row-flex">Should i eat at McDonalds?</div>
      <div>
        <div className="left-column">
          <div className="row-flex">
            <p>pros</p>
          </div>
          <div>
            <ol>
              {list.map((val, index) => {
                return (
                  <li key={index}>
                    <input
                      type="text"
                      name={index}
                      defaultValue={val}
                      onClick={() => todoListclick(index)}
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
        <div className="right-column">
          <div className="row-flex">
            <p>cons</p>
          </div>
          <div>
            <ol>
              {list1.map((val, index) => {
                return (
                  <li>
                    <input
                      type="text"
                      key={index}
                      name={index}
                      defaultValue={val}
                      onClick={() => todoListOneclick(index)}
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
