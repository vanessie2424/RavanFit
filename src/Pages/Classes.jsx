
import React, { useEffect} from 'react'

const Classes = () => {

  useEffect(()=>{
    fetch("/api/classes")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  return (
    <h1>Classes Page</h1>
  )
}

export default Classes