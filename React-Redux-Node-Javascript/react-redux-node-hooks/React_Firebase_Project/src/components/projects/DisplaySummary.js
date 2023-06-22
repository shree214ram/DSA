import React from 'react'

const ProjectSummary = ({display}) => {
  return (
    <div className="card z-depth-0 display-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{display.title}</span>
        <span className="card-title ">{display.displayName}</span>
        <img style={{ width: "100px" }} src={display.fileLocation} />
        <span className="card-title ">{display.content}</span>
        <p>Posted by Sathish Krishnasamy</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary