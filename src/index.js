import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import Catagory from './Catagory';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <>
       <BrowserRouter>
       <Routes>
        <Route path='/from' element={<Form/>}></Route>
        <Route path='/catagory' element={<Catagory/>}></Route>
       </Routes>
       </BrowserRouter>
       </>
  );

