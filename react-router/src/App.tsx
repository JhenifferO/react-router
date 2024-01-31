import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Menu from "./components/Menu/Menu"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
