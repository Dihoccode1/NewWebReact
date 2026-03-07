import React, { useState } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Categories.css';

export default function Categories() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    { id: 1, name: "Sáp vuốt tóc", desc: "Các loại sáp vuốt tóc nam" },
    { id: 2, name: "Gôm xịt", desc: "Gôm xịt giữ nếp" },
    { id: 3, name: "Bột tạo phồng", desc: "Bột rắc chân tóc" }
  ];

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Quản lý danh mục</h1>
          <div className="actions">
            <input className="input" type="text" placeholder="Tìm theo tên / mô tả…" />
            <button className="btn primary" onClick={() => setIsDrawerOpen(true)}>+ Thêm danh mục</button>
          </div>
        </div>

        <div style={{ overflowX: 'auto', marginTop: '16px' }}>
          <table>
            <thead>
              <tr><td>Tên danh mục</td><td>Mô tả</td><td style={{ width: '120px' }}>Hành động</td></tr>
            </thead>
            <tbody>
              {categories.map(cat => (
                <tr key={cat.id}>
                  <td><strong>{cat.name}</strong></td>
                  <td>{cat.desc}</td>
                  <td>
                    <button className="btn" onClick={() => setIsDrawerOpen(true)}><i className="fa-solid fa-pen"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DRAWER THÊM DANH MỤC */}
      <div className={`drawer-backdrop ${isDrawerOpen ? 'show' : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      <aside className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="cardHeader">
          <h2 style={{ margin: 0 }}>Thêm danh mục</h2>
          <button className="close-x" onClick={() => setIsDrawerOpen(false)}>✕</button>
        </div>
        <div className="drawer-body form-col">
          <form onSubmit={e => { e.preventDefault(); setIsDrawerOpen(false); }}>
            <label className="small">Tên danh mục</label>
            <input className="input" type="text" required placeholder="Ví dụ: Sáp vuốt tóc" style={{ width: '100%' }}/>

            <label className="small">Mô tả</label>
            <input className="input" type="text" placeholder="Mô tả ngắn…" style={{ width: '100%' }}/>

            <div style={{ fontSize: '12px', color: '#6b7280', margin: '10px 0' }}>
              Mã danh mục (LOAIxxx) được sinh tự động.
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              <button className="btn primary" type="submit">Lưu</button>
              <button className="btn" type="button" onClick={() => setIsDrawerOpen(false)}>Hủy</button>
            </div>
          </form>
        </div>
      </aside>
    </AdminLayout>
  );
}