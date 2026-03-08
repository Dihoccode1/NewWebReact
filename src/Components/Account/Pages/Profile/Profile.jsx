import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Fake state cho User
  const [user, setUser] = useState({
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901234567",
    address: "12 Nguyễn Huệ, Q.1, TP.HCM"
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Cập nhật thông tin thành công!");
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="card">
        <h3 className="card-title">Thông tin tài khoản</h3>
        
        {/* VIEW MODE */}
        <dl className="info-grid">
          <dt>Họ tên:</dt><dd><strong>{user.fullname}</strong></dd>
          <dt>Email:</dt><dd>{user.email}</dd>
          <dt>Số điện thoại:</dt><dd>{user.phone || "Chưa cập nhật"}</dd>
          <dt>Địa chỉ:</dt><dd>{user.address || "Chưa cập nhật"}</dd>
        </dl>

        <button className="btn btn-outline-dark" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Hủy cập nhật" : "Cập nhật thông tin"}
        </button>

        {/* EDIT MODE */}
        {isEditing && (
          <div className="edit-section">
            <h5 style={{ margin: '0 0 16px', fontSize: 18 }}>Thay đổi thông tin</h5>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Họ tên</label>
                <input type="text" className="form-control" value={user.fullname} onChange={e => setUser({...user, fullname: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="text" className="form-control" value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Địa chỉ</label>
                <input type="text" className="form-control" value={user.address} onChange={e => setUser({...user, address: e.target.value})} />
              </div>
              <button type="submit" className="btn btn-dark">Lưu thay đổi</button>
            </form>
          </div>
        )}

        <hr style={{ margin: '24px 0', borderColor: '#e5e7eb' }} />
        
        <div className="action-links">
          <Link to="/" className="btn btn-primary">Tiếp tục mua sắm</Link>
          <Link to="/user-orders" className="btn btn-outline-dark">Lịch sử mua hàng</Link>
          <Link to="/login" className="btn btn-outline-dark" style={{ color: '#ef4444' }}>Đăng xuất</Link>
        </div>
      </div>
    </div>
  );
}