import React, { useRef } from 'react'
 
const ValueDisplay = ({ value }) => {
  const prevValueRef = useRef(null);

  const prevValue = prevValueRef.current;
    prevValueRef.current = value;
    
  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue}</p>
    </div>
  )
}

export default ValueDisplay