import React, {useContext} from "react"

import {MyContext} from "../../Context"
import TableBox from "../../containers/tableBox/TableBox"

import "./Table.scss"

const Table = () => {
  const {pros, setPros, cons, setCons} = useContext(MyContext)

  return (
    <div className="table">
      <div>Should i eat at McDonalds?</div>
      <div>
        <TableBox header="pros" inputArr={pros} setInputArr={setPros} />

        <TableBox header="cons" inputArr={cons} setInputArr={setCons} />
      </div>
    </div>
  )
}
export default Table
