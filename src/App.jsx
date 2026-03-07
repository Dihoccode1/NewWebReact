import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// IMPORT ACCOUNT PAGES
import Login from "./Components/Account/Pages/Login/Login";
import Register from "./Components/Account/Pages/Register/Register";
import Profile from "./Components/Account/Pages/Profile/Profile";       // <--- Mới
import UserOrders from "./Components/Account/Pages/Orders/UserOrders"; // <--- Mới

// Import Admin... (Giữ nguyên)
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import Dashboard from "./Components/Admin/Pages/Dashboard/Dashboard";
// ...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---- ROUTER KHÁCH HÀNG ---- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />             {/* <--- Mới */}
        <Route path="/user-orders" element={<UserOrders />} />     {/* <--- Mới */}
        
        {/* Tạm thời trang chủ trỏ về profile */}
        <Route path="/" element={<Navigate to="/profile" replace />} />

        {/* ---- ROUTER ADMIN ---- */}
        <Route path="/admin" element={<Dashboard />} />
        {/* ... */}
        
        <Route path="*" element={<h1 style={{padding: '20px'}}>404 - Không tìm thấy trang</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;