import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ecommerceContext } from './Home'

function Admin() {
  // const [products, setproducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])

  const { filterByCategory, products, setproducts} = useContext(ecommerceContext)

  const [img, setimg] = useState('')
  useEffect(() => {
    axios.get('http://localhost:8081/showproducts')
      .then((res) => {
        setproducts(res.data)
      })
  }, [])

  useEffect(() => {
    const productsCopy = products
    setfilteredProducts(productsCopy.filter((product) => {
      return product.option === filterByCategory
    }))
  }, [filterByCategory])

  return (
    <>
      <h1>this is products page</h1>
      {
        (filterByCategory) ?
          filteredProducts.map((res) => {
            return (
              <>
                <h3>{res.name}</h3>
                <h5>{'price:' + res.price}</h5>
              </>
            )
          })
          :
          products.map((res) => {
            return (
              <>
                <h3>{res.name}</h3>
                <h5>{'price:' + res.price}</h5>
              </>
            )
          })
      }
    </>
  )
}
export default Admin
