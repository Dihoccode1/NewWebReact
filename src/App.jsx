import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ACCOUNT PAGES
import Login from "./Components/Account/Pages/Login/Login";
import Register from "./Components/Account/Pages/Register/Register";
import Profile from "./Components/Account/Pages/Profile/Profile";
import UserOrders from "./Components/Account/Pages/Orders/UserOrders";

// PRODUCTS PAGES (FRONTEND)
import ProductList from "./Components/Products/Pages/ProductList/ProductList";
import ProductDetail from "./Components/Products/Pages/ProductDetail/ProductDetail";

// ADMIN PAGES
import Dashboard from "./Components/Admin/Pages/Dashboard/Dashboard";
// ... (giữ nguyên các import Admin khác của bạn)

function App() {
  return (
    <BrowserRouter>
      {/* Trong một app thực tế, bạn sẽ bọc phần Frontend bằng một <FrontendLayout> chứa Header/Footer ở đây */}
      <Routes>
        {/* ======================= FRONTEND ROUTES ======================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-orders" element={<UserOrders />} />
        
        {/* ĐƯỜNG DẪN MỚI CHO SẢN PHẨM */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="/" element={<Navigate to="/products" replace />} />

        {/* ======================= ADMIN ROUTES ======================= */}
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/admin/users" element={<Users />} /> ... */}

        <Route path="*" element={<h1 style={{padding: '20px', textAlign: 'center'}}>404 - Không tìm thấy trang</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;