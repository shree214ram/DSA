import React from 'react'
import DisplaySummary from './DisplaySummary'

const DisplayList = ({ displays }) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 display-summary">
        <div className="card-content grey-text text-darken-3">
          Display
        </div>
      </div>
      {displays && displays?.data?.data?.map((display, index) => {
        return (
          <DisplaySummary display={display} key={index} />
        )
      })}
    </div>
  )
}

export default DisplayList