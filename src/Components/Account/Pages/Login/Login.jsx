import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Giả lập đăng nhập thành công
    alert("Đăng nhập thành công!");
    navigate('/profile');
  };

  return (
    <div className="auth-layout">
      <Link to="/" className="back"><i className="fa-solid fa-chevron-left"></i> Trang chủ</Link>
      <div className="wrap">
        <div className="card">
          <div className="brand">
            <div className="logo"><i className="fa-solid fa-user-shield"></i></div>
          </div>
          <h1 className="title">Đăng nhập</h1>
          <div className="sub">Chào mừng quay lại Nobility 1800s</div>
          
          <form className="form" onSubmit={handleLogin}>
            <label className="field">
              <i className="fa-regular fa-user"></i>
              <input type="email" className="input" placeholder="Email" required />
            </label>

            <label className="field">
              <i className="fa-solid fa-key"></i>
              <input 
                type={showPassword ? "text" : "password"} 
                className="input" 
                placeholder="Mật khẩu" 
                required 
              />
              <button type="button" className="toggle" onClick={() => setShowPassword(!showPassword)}>
                <i className={showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
              </button>
            </label>

            <div className="aux">
              <Link to="#" className="link" onClick={() => alert('Tính năng quên mật khẩu đang phát triển')}>Quên mật khẩu?</Link>
            </div>

            <button className="btn btn-primary" type="submit">Đăng nhập</button>

            <div className="divider">hoặc</div>
            <Link to="/" className="btn btn-ghost">Về trang chủ</Link>

            <div className="bottom">
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}