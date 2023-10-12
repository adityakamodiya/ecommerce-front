import axios from 'axios'
import React, { useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

function Catagory() {
  
  let navigate = useNavigate()

  const [val, setval] = useState('')

  function Addcatagory(e) {
    e.preventDefault()
    axios.post("http://localhost:8081/catagory", {

      val
    })

    navigate('/form')
  }
  return (
    <div>
      <form action="" onSubmit={Addcatagory}>
        <input required type="text" placeholder='category' value={val} onChange={(e) => { setval(e.target.value) }} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Catagory
