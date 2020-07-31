import React, {useState} from "react"
import "./App.css"
import Table from "./components/tabel/Table"
import {MyContext} from "./Context"

export default function App() {
  const [list, setList] = useState(["hello", "by"])
  const [list1, setList1] = useState(["jeep", "honday", "Saab", "Volvo", "BMW"])
  return (
    <div>
      <MyContext.Provider value={{list, setList, list1, setList1}}>
        <div className="row-flex">
          <Table />
        </div>
      </MyContext.Provider>
    </div>
  )
}
