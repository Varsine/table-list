import React, {useState} from "react"

import {MyContext} from "./Context"
import {prosData, consData} from "./ProsAndConsData/ProsAndConsData"
import Table from "./components/tabel/Table"

import "./App.scss"

export default function App() {
  const [pros, setPros] = useState(prosData)
  const [cons, setCons] = useState(consData)

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
