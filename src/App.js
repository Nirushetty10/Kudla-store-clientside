import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import TopRated from './Pages/TopRated'
import BestSeller from './Pages/BestSeller'
import SingleItem from './Pages/SingleItem'
import Category from './Pages/Category'
import Dashboard from './Pages/Dashboard.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/all-products' element={<AllProducts />}/>
      <Route path='/top-rated' element={<TopRated />}/>
      <Route path='/best-seller' element={<BestSeller/>}/>
      <Route path='/single-product/:id' element={<SingleItem />}/>
      <Route path='/category/:title' element={<Category />}/>
      <Route path='/admin/dashboard' element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App