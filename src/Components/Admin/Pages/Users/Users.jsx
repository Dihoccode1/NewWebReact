import React, { useState } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Users.css';

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { id: 1, name: "John Doe", email: "john.doe@email.com", phone: "0901234567", role: "member", status: "active", date: "2024-10-28" },
    { id: 2, name: "David", email: "david.ita@email.com", phone: "0907654321", role: "admin", status: "locked", date: "2024-10-29" },
    { id: 3, name: "Emily", email: "emily.fr@email.com", phone: "0988888888", role: "member", status: "active", date: "2024-11-01" },
  ];

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <div>
            <h1>Quản lý người dùng</h1>
            <div className="muted">Đổi mật khẩu & khóa tài khoản sẽ ép người dùng đăng nhập lại.</div>
          </div>
          <div className="actions">
            <button className="btn primary" onClick={() => setIsModalOpen(true)}>
              <i className="fa-solid fa-user-plus"></i><span>Thêm tài khoản</span>
            </button>
          </div>
        </div>

        <div className="toolbar">
          <input className="input" placeholder="Tìm theo tên, email, SĐT..." />
          <select className="input" style={{ minWidth: '160px' }}>
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="locked">Đã khóa</option>
          </select>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <td>Họ tên</td><td>Email</td><td>SĐT</td><td>Vai trò</td><td>Trạng thái</td><td>Tạo lúc</td><td style={{ width: 280 }}>Thao tác</td>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td><strong>{u.name}</strong></td><td>{u.email}</td><td>{u.phone}</td>
                  <td><span className="chip">{u.role === 'admin' ? 'Quản trị viên' : 'Khách hàng'}</span></td>
                  <td><span className={`status ${u.status === 'active' ? 'delivered' : 'locked'}`}>{u.status === 'active' ? 'Hoạt động' : 'Đã khóa'}</span></td>
                  <td>{u.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button className="btn"><i className="fa-solid fa-key"></i><span>Đổi MK</span></button>
                      <button className={`btn ${u.status === 'active' ? 'danger' : ''}`}>
                        <i className={`fa-solid ${u.status === 'active' ? 'fa-lock' : 'fa-lock-open'}`}></i>
                        <span>{u.status === 'active' ? 'Khóa' : 'Mở khóa'}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <div className={`modal ${isModalOpen ? 'show' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="card-modal" onClick={e => e.stopPropagation()}>
          <div className="card-header">
            <strong>Thêm tài khoản</strong>
            <button className="btn" style={{ padding: '4px 8px', border: 'none' }} onClick={() => setIsModalOpen(false)}>✕</button>
          </div>
          <div className="card-body">
            <div className="grid-2">
              <div><label className="small">Họ tên</label><input className="input" placeholder="Nguyễn Văn A"/></div>
              <div><label className="small">Email</label><input className="input" placeholder="email@domain.com"/></div>
              <div><label className="small">Số điện thoại</label><input className="input" placeholder="09xx..."/></div>
              <div><label className="small">Địa chỉ</label><input className="input" placeholder="Địa chỉ giao hàng"/></div>
              <div><label className="small">Mật khẩu</label><input className="input" type="password" placeholder="Mật khẩu khởi tạo"/></div>
              <div><label className="small">Vai trò</label>
                <select className="input"><option value="member">Khách hàng</option><option value="admin">Quản trị viên</option></select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', gap: '8px' }}>
              <button className="btn" onClick={() => setIsModalOpen(false)}>Hủy</button>
              <button className="btn primary">Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}