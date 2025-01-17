import React, { useEffect, useRef } from 'react'

const ProjectItem = ({name, onClick, isActive, index}) => {

  return (
    <div>
      <div className={`flex w-[100px] h-[50px]   mb-3 items-center justify-center mr-3 rounded-lg project-type cursor-pointer bg-red-400 ${isActive ? "bg-red-400 text-white border" : "bg-white text-red-400 border-2 border-red-400"}`}
            onClick={onClick}
  
        >{name}</div>
    </div>
  )
}

export default ProjectItem
