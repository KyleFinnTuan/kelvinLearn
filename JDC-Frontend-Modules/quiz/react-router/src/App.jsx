import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/templates/DefaultLayout";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/Dashboard";
import Error404 from "./components/pages/Error404";
import ProductPost from "./components/pages/ProductPost";
import ProductsMain from "./components/pages/ProductsMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home/>} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="products" element={<ProductsMain/>}/>
          <Route path="products/:productId" element={<ProductPost/>}/>
        </Route>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
