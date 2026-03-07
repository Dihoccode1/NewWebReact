import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Frontend
import About from "./Components/About/About";

// Admin Layout & Pages

// Layout
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import Dashboard from "./Components/Admin/Pages/Dashboard/Dashboard";
import Users from "./Components/Admin/Pages/Users/Users";
import Categories from "./Components/Admin/Pages/Categories/Categories";
// Pages
import Orders from "./Components/Admin/Pages/Orders/Orders";
import Inventory from "./Components/Admin/Pages/Inventory/Inventory";
import Products from "./Components/Admin/Pages/Products/Products";
import Pricing from "./Components/Admin/Pages/Pricing/Pricing";
import Imports from "./Components/Admin/Pages/Imports/Imports";

// Khung chờ cho các trang chưa code tới
const Placeholder = ({ title }) => (
  <AdminLayout>
    <div style={{ padding: '20px' }}>
      <h2>{title}</h2>
      <p style={{ color: '#6b7280' }}>Giao diện trang này đang được hoàn thiện...</p>
    </div>
  </AdminLayout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/about" element={<About />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/categories" element={<Categories />} />
        
        {/* 2. GẮN COMPONENT THẬT VÀO ROUTE (THAY VÌ PLACEHOLDER) */}
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/pricing" element={<Pricing />} />
        
        {/* Các trang đang chờ hoàn thiện */}
       <Route path="/admin/imports" element={<Imports />} />
 <Route path="/admin/orders" element={<Orders />} />
<Route path="/admin/inventory" element={<Inventory />} />

        <Route path="*" element={<h1 style={{padding: '20px'}}>404 - Không tìm thấy trang</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;