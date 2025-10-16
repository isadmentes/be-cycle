import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { CompaniesPage } from "./pages/Companies";
import { TecnologyPage } from "./pages/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto" element={<ProductsPage />} />
        <Route path="/empresas" element={<CompaniesPage />} />
        <Route path="/tecnologia" element={<TecnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App