import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Form() {
  let navigate = useNavigate()
  const [cat, setcat] = useState([])
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [path, setpath] = useState('')
  const [option, setoption] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8081/showcategory')
      .then((res) => {
        setcat(res.data)
      })

  }, [])

  function Addtodatabase(e) {
    e.preventDefault()
    axios.post('http://localhost:8081/addtoDatabase', {
      name, price, option, path
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => { console.log(res) })
    navigate('/')
  }
  return (
    <>
      <form action="" onSubmit={Addtodatabase} encType='multipart/form-data'>
        <input required type="text" placeholder=' product name' value={name} onChange={(e) => { setname(e.target.value) }} />

        <input type="file" onChange={(e) => { setpath(e.target.files[0]) }} />

        <input required type="text" placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} />

        <select required name="" id="" value={option} onChange={(e) => { setoption(e.target.value) }}>
          <option value="" disabled selected>category</option>
          {
            cat.map((res, index) => {
              return (
                <>
                  <option value={res.save.val} key={index}>{res.save.val}</option>
                </>
              )
            })
          }
        </select>
        <input type="submit" />
      </form>
    </>
  )
}

export default Form
