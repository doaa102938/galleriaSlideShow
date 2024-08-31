import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Slide from "./Pages/Slide/Slide";
import Layout from "./Pages/Layout/Layout";
import Galleria from "./Pages/Galleria/Galleria";

function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="Galleria" element={<Galleria />}></Route>
              <Route path="#" element={<Slide />}></Route>
              <Route path="/item/:id" element={<Slide />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </main>
    </>
  )
}

export default App
