import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
      <h1>Jhe</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
