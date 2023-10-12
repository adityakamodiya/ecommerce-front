import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { ecommerceContext } from './Home'

function Header() {
  const [categories, setCategories] = useState([])

  const { filterByCategory, setFilterByCategory ,products} = useContext(ecommerceContext)

  useEffect(() => {
    async function fetchData() {
      const categories = await axios.get("http://localhost:8081/showcategory")
      setCategories(categories.data);
    }
    fetchData()
  }, [])

  function showProductByCategory(e, name) {
    e.preventDefault()
    setFilterByCategory(name)
  }
  function showAllproducts(e){
    e.preventDefault()
      setFilterByCategory(false)
       
  }

  return (
    <>
      <div className="head">
        <ul>
          {
            (categories.length > 0)
              ?
              categories.map((category, index) => {
                return (<>
                  <li key={index}><a href="" onClick={(e) => showProductByCategory(e, category.save.val)}>{category.save.val}</a></li>
                  </> )
              })
              
              : ""
            }
            <li><a href="" onClick={(e)=>showAllproducts(e)}>all products</a></li>
        </ul>
      </div>
    </>
  )
}

export default Header
