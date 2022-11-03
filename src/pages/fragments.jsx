import React, { Fragment } from 'react'

function Table () {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  )
}

function Columns () {
  return (
    <Fragment>
      <td>Hello</td>
      <td>World</td>
    </Fragment>
  )
}

export default Table
