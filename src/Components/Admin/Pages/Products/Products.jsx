import React, { useState, useEffect } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Products.css';

export default function Products() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const products = [
    { id: 1, image: "https://via.placeholder.com/44", code: "SP001", name: "Sáp Apestomen Nitro", category: "Sáp vuốt tóc", uom: "Hộp", qty: 50, cost: 200000, margin: 50, price: 300000, supplier: "Apestomen VN", status: "selling" },
    { id: 2, image: "https://via.placeholder.com/44", code: "SP002", name: "Gôm Kevin Murphy Session", category: "Gôm xịt", uom: "Chai", qty: 0, cost: 350000, margin: 33, price: 467000, supplier: "Kevin Murphy", status: "stopped" },
    { id: 3, image: "https://via.placeholder.com/44", code: "SP003", name: "Bột tạo phồng Patricks HP1", category: "Bột tạo phồng", uom: "Lọ", qty: 15, cost: 700000, margin: 42, price: 1000000, supplier: "Patricks", status: "selling" },
  ];

  // Đóng drawer khi bấm phím ESC
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setIsDrawerOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Quản lý sản phẩm</h1>
          <div className="actions">
            <button className="btn primary" onClick={() => setIsDrawerOpen(true)}>
              <i className="fa-solid fa-plus"></i><span>Thêm sản phẩm</span>
            </button>
          </div>
        </div>

        <div className="toolbar">
          <input className="input" type="text" placeholder="Tìm theo mã / tên sản phẩm..." style={{ minWidth: 260 }} />
          <select className="input" style={{ minWidth: '180px' }}>
            <option value="">— Tất cả loại —</option>
            <option value="sap">Sáp vuốt tóc</option>
            <option value="gom">Gôm xịt</option>
          </select>
          <select className="input" style={{ minWidth: '180px' }}>
            <option value="">— Tất cả trạng thái —</option>
            <option value="selling">Đang bán</option>
            <option value="stopped">Hết bán</option>
            <option value="hidden">Ẩn</option>
          </select>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <td>#</td><td>Hình</td><td>Mã</td><td>Tên</td><td>Loại</td><td>ĐVT</td>
                <td className="num">SL</td><td className="num">Giá vốn</td><td className="num">%LN</td>
                <td className="num">Giá bán</td><td>Nhà cung cấp</td><td>Trạng thái</td>
                <td style={{ textAlign: 'center' }}>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td><img src={p.image} alt={p.name} className="thumb" /></td>
                  <td><strong>{p.code}</strong></td>
                  <td style={{ minWidth: 180 }}>{p.name}</td>
                  <td>{p.category}</td><td>{p.uom}</td>
                  <td className="num">{p.qty}</td>
                  <td className="num">{p.cost.toLocaleString()}đ</td>
                  <td className="num">{p.margin}%</td>
                  <td className="num" style={{ color: 'var(--brand)', fontWeight: 800 }}>{p.price.toLocaleString()}đ</td>
                  <td>{p.supplier}</td>
                  <td>
                    <span className={`status-chip ${p.status}`}>
                      {p.status === 'selling' ? 'Đang bán' : p.status === 'stopped' ? 'Hết bán' : 'Ẩn'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn" style={{ padding: '6px 10px' }} onClick={() => setIsDrawerOpen(true)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DRAWER THÊM/SỬA SẢN PHẨM */}
      <div className={`drawer-backdrop ${isDrawerOpen ? 'show' : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      <aside className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="cardHeader">
          <h2 style={{ margin: 0, fontSize: 18 }}>Thêm sản phẩm</h2>
          <button type="button" className="close-x" onClick={() => setIsDrawerOpen(false)}>✕</button>
        </div>
        
        <div className="drawer-body form-col">
          <form onSubmit={(e) => { e.preventDefault(); setIsDrawerOpen(false); }}>
            <label className="small">Mã sản phẩm</label>
            <input className="input" type="text" required placeholder="Ví dụ: SP001" />

            <label className="small">Tên sản phẩm</label>
            <input className="input" type="text" required placeholder="Nhập tên sản phẩm" />

            <label className="small">Loại danh mục</label>
            <select className="input" required>
              <option value="">Chọn loại...</option>
              <option value="sap">Sáp vuốt tóc</option>
              <option value="gom">Gôm xịt</option>
            </select>

            <label className="small">Mô tả</label>
            <input className="input" type="text" placeholder="Mô tả ngắn..." />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div><label className="small">Đơn vị tính</label><input className="input" type="text" placeholder="hộp, chai" /></div>
              <div><label className="small">Số lượng</label><input className="input" type="number" min="0" defaultValue="0" /></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div><label className="small">Giá vốn</label><input className="input" type="number" min="0" defaultValue="0" /></div>
              <div><label className="small">Tỉ lệ LN (%)</label><input className="input" type="number" min="0" defaultValue="0" /></div>
            </div>

            <label className="small">Giá bán đề xuất</label>
            <input className="input" type="number" min="0" defaultValue="0" />
            <div className="help">(Tự tính: giá vốn × (1 + %/100))</div>

            <label className="small">Nhà cung cấp</label>
            <input className="input" type="text" placeholder="Tên công ty cung cấp" />

            <label className="small">Trạng thái</label>
            <select className="input">
              <option value="selling">Đang bán</option>
              <option value="stopped">Hết bán</option>
              <option value="hidden">Ẩn</option>
            </select>

            <label className="small">Hình ảnh</label>
            <input className="input" type="file" accept="image/*" style={{ padding: '8px 10px' }} />

            <div style={{ display: 'flex', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
              <button className="btn primary" type="submit" style={{ flex: 1, justifyContent: 'center' }}>Lưu thông tin</button>
              <button className="btn" type="button" onClick={() => setIsDrawerOpen(false)}>Hủy</button>
            </div>
          </form>
        </div>
      </aside>
    </AdminLayout>
  );
}