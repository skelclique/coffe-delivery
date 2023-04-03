import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Sucess } from './pages/Sucess'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout/cart" element={<Checkout />} />
        <Route path="/checkout/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
