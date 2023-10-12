import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Catagory from './Catagory';
import Form from './Form';
import Header from './Header';

export const ecommerceContext = createContext(null)

function Home() {
    const [filterByCategory, setFilterByCategory] = useState(false)
    const [products, setproducts] = useState([])
    return (
        <>
            <ecommerceContext.Provider value={{ filterByCategory, setFilterByCategory,products, setproducts }}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/form' element={<Form />}></Route>
                        <Route path='/catagory' element={<Catagory />}></Route>
                        <Route path='/' element={<Admin />}></Route>
                    </Routes>
                </BrowserRouter>
            </ecommerceContext.Provider>
        </>
    )
}

export default Home
