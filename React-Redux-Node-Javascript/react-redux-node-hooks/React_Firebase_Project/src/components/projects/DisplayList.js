import React from 'react'
import DisplaySummary from './DisplaySummary'

const DisplayList = ({displays}) => {
    return (
        <div className="project-list section">  
        { displays && displays.map(display => {
        return (
          <DisplaySummary display={display.data} key={display.id} />
        )
      })}  
    </div>
    )
  }
  
  export default DisplayList