import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter, Route, Routes } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from './components/custom/navbar-custom.tsx';
import BiodataPage from './pages/Biodata.tsx';
import ProductPage from './pages/Product.tsx';

createRoot(document.getElementById('root')!).render(
<StrictMode>  
    <Provider>
      <NavbarCustom />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/biodata" element={<BiodataPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter> 
    </Provider>
  </StrictMode>,
)


