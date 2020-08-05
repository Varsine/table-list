import React, {useContext} from "react"
import {MyContext} from "../../Context"
import TableBox from "../../containers/table/TableBox"
import "./Table.scss"

export default function Table() {
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
