import React, {useEffect, useRef} from 'react'

const ProgressBar = ({width, duration=2}) => {
  const barRef = useRef(null);
  useEffect(() => {
    if (barRef.current) {
        barRef.current.style.transition = `width ${duration}s ease-in-out`;
        barRef.current.style.width = width;
      }
  }, [width, duration]);
  return (
    <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
        <div className="w-full bg-gray-200 rounded-full h-4 relative">
            <div
            ref={barRef}
            className="bg-red-500 h-4 rounded-full animate-progress"
            style={{'--custom-width': `${width} %` }} 
            ></div>
       </div>
    </div>
  )
}

export default ProgressBar
