import React, { useState } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Imports.css';

export default function Imports() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Danh sách phiếu nhập (Màn hình chính)
  const importsList = [
    { id: "PN1001", user: "admin", date: "28/10/2025", totalQty: 120, totalCost: 15000000, note: "Nhập đợt 1 tháng 10 từ Apestomen" },
    { id: "PN1002", user: "admin", date: "30/10/2025", totalQty: 50, totalCost: 8500000, note: "Nhập bổ sung Kevin Murphy" },
  ];

  // Danh sách các món hàng đang được tạo trong form Drawer
  const [importItems, setImportItems] = useState([
    { id: 1, code: "SP001", name: "Sáp Apestomen Nitro", price: 200000, qty: 50 },
    { id: 2, code: "SP002", name: "Gôm Kevin Murphy Session", price: 350000, qty: 20 }
  ]);

  // Tính tổng SL và Tổng tiền trong Drawer
  const totalQty = importItems.reduce((sum, item) => sum + item.qty, 0);
  const totalCost = importItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Phiếu nhập hàng</h1>
          <div className="actions">
            <button className="btn primary" onClick={() => setIsDrawerOpen(true)}>
              <i className="fa-solid fa-plus"></i>
              <span>Tạo phiếu nhập</span>
            </button>
          </div>
        </div>

        <div className="toolbar">
          <input className="input" type="text" placeholder="Tìm mã lô, người nhập..." style={{ minWidth: 260 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 600 }}>Từ:</span>
            <input className="input" type="date" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 600 }}>Đến:</span>
            <input className="input" type="date" />
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <td>Mã lô</td>
                <td>Người nhập</td>
                <td>Ngày nhập</td>
                <td className="num">Tổng SL</td>
                <td className="num">Tổng tiền</td>
                <td>Ghi chú</td>
                <td style={{ textAlign: 'center' }}>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {importsList.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.id}</strong></td>
                  <td>{item.user}</td>
                  <td>{item.date}</td>
                  <td className="num" style={{ fontWeight: 'bold' }}>{item.totalQty}</td>
                  <td className="num" style={{ color: 'var(--brand)', fontWeight: 'bold' }}>{item.totalCost.toLocaleString()}đ</td>
                  <td style={{ color: 'var(--muted)', maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.note}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn" style={{ padding: '6px 10px' }} title="Xem chi tiết">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================================
          DRAWER TẠO PHIẾU NHẬP
          ========================================= */}
      <div className={`drawer-backdrop ${isDrawerOpen ? 'show' : ''}`} onClick={() => setIsDrawerOpen(false)}></div>
      
      <aside className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="cardHeader">
          <h2 style={{ margin: 0, fontSize: 18 }}>Tạo phiếu nhập hàng</h2>
          <button type="button" className="close-x" onClick={() => setIsDrawerOpen(false)}>✕</button>
        </div>
        
        <div className="drawer-body">
          <div style={{ background: '#f8fafc', padding: 16, borderRadius: 10, border: '1px solid var(--line)', marginBottom: 20 }}>
            <div className="grid-3">
              <div>
                <label className="small">Sản phẩm</label>
                <select className="input" style={{ width: '100%' }}>
                  <option>-- Chọn sản phẩm --</option>
                  <option>SP001 - Sáp Apestomen</option>
                  <option>SP002 - Gôm Kevin Murphy</option>
                </select>
              </div>
              <div>
                <label className="small">Giá nhập</label>
                <input className="input" type="number" defaultValue="0" style={{ width: '100%' }}/>
              </div>
              <div>
                <label className="small">Số lượng</label>
                <input className="input" type="number" defaultValue="1" min="1" style={{ width: '100%' }}/>
              </div>
            </div>
            <button className="btn"><i className="fa-solid fa-arrow-down"></i> Thêm vào phiếu</button>
          </div>

          <h3 style={{ fontSize: 15, margin: '0 0 10px' }}>Danh sách sản phẩm nhập:</h3>
          <div className="inner-table table-wrap" style={{ marginTop: 0 }}>
            <table>
              <thead>
                <tr>
                  <td>Mã SP</td>
                  <td className="num">Giá nhập</td>
                  <td className="num">Số lượng</td>
                  <td style={{ textAlign: 'center', width: 50 }}>Xóa</td>
                </tr>
              </thead>
              <tbody>
                {importItems.map((item, idx) => (
                  <tr key={idx}>
                    <td><strong>{item.code}</strong><br/><span style={{fontSize: 12, color: 'var(--muted)'}}>{item.name}</span></td>
                    <td className="num">{item.price.toLocaleString()}đ</td>
                    <td className="num">{item.qty}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="btn" style={{ padding: '4px 8px', color: '#ef4444', borderColor: '#fecaca' }}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ marginTop: 16 }}>
            <label className="small">Ghi chú lô hàng</label>
            <input className="input" type="text" placeholder="Nhập ghi chú..." style={{ width: '100%' }} />
          </div>
        </div>

        <div className="drawer-footer">
          <div className="total-box">
            <div>Tổng SL: <span>{totalQty}</span></div>
            <div>Tổng tiền: <span>{totalCost.toLocaleString()}đ</span></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn" onClick={() => setIsDrawerOpen(false)}>Hủy</button>
            <button className="btn primary">Hoàn thành nhập</button>
          </div>
        </div>
      </aside>
    </AdminLayout>
  );
}