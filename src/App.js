import React, {useState} from "react"
import "./App.scss"
import Table from "./components/tabel/Table"
import {MyContext} from "./Context"

export default function App() {
  const [pros, setPros] = useState(["hello", "by", ""])
  const [cons, setCons] = useState(["honday", "Saab", "Volvo", "BMW", ""])

  return (
    <div>
      <MyContext.Provider value={{pros, setPros, cons, setCons}}>
        <div className="row-flex">
          <Table />
        </div>
      </MyContext.Provider>
    </div>
  )
}
