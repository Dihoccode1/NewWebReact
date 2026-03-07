import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Đăng ký tài khoản thành công!");
    navigate('/login');
  };

  return (
    <div className="auth-layout">
      <Link to="/" className="back"><i className="fa-solid fa-chevron-left"></i> Quay lại</Link>
      
      <div className="wrap reg-wrap">
        <div className="card">
          <div className="brand">
            {/* Sử dụng lại icon shield cho đồng bộ thay vì link ảnh có thể bị lỗi */}
            <div className="logo"><i className="fa-solid fa-user-plus"></i></div>
          </div>
          <h1 className="title">Tạo tài khoản</h1>
          <div className="sub">Đăng ký để mua hàng nhanh hơn và nhận ưu đãi thành viên</div>

          <form className="form" onSubmit={handleRegister}>
            <label className="field">
              <i className="fa-regular fa-id-card"></i>
              <input className="input" type="text" placeholder="Họ tên của bạn" required />
            </label>

            <div className="grid-2">
              <label className="field">
                <i className="fa-regular fa-envelope"></i>
                <input className="input" type="email" placeholder="Email của bạn" required />
              </label>

              <label className="field">
                <i className="fa-solid fa-phone"></i>
                <input className="input" type="tel" placeholder="Số điện thoại" required />
              </label>
            </div>

            <label className="field">
              <i className="fa-solid fa-location-dot"></i>
              <input className="input" type="text" placeholder="Địa chỉ nhận hàng" required />
            </label>

            <label className="field">
              <i className="fa-solid fa-key"></i>
              <input className="input" type="password" placeholder="Mật khẩu" required />
            </label>

            <label className="check">
              <input 
                type="checkbox" 
                checked={agree} 
                onChange={(e) => setAgree(e.target.checked)} 
              />
              <span>Tôi đã đọc, đồng ý với <Link to="#">Chính sách bảo mật</Link> &amp; <Link to="#">Quy định sử dụng</Link>.</span>
            </label>

            <button type="submit" className="btn btn-primary" disabled={!agree}>Đăng ký</button>

            <div className="bottom">
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}