import React from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Pricing.css';

export default function Pricing() {
  const products = [
    { id: 1, code: "SP001", name: "Sáp Apestomen Nitro", category: "Sáp vuốt tóc", cost: 200000, margin: 50, price: 300000, status: "selling" },
    { id: 2, code: "SP002", name: "Gôm Kevin Murphy Session", category: "Gôm xịt", cost: 350000, margin: 33, price: 467000, status: "stopped" },
    { id: 3, code: "SP003", name: "Bột tạo phồng Patricks HP1", category: "Bột tạo phồng", cost: 700000, margin: 42, price: 1000000, status: "selling" },
  ];

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Quản lý giá bán</h1>
        </div>

        <div className="toolbar">
          <input className="input" type="text" placeholder="Tìm theo mã / tên sản phẩm..." style={{ minWidth: 260 }}/>
          <select className="input" style={{ minWidth: 200 }}>
            <option value="">— Tất cả loại —</option>
            <option value="sap">Sáp vuốt tóc</option>
            <option value="gom">Gôm xịt</option>
          </select>
        </div>

        <div className="table-wrap" style={{ marginTop: 16 }}>
          <table>
            <thead>
              <tr>
                <td>#</td><td>Mã</td><td>Tên</td><td>Loại</td>
                <td className="num">Giá vốn</td><td className="num">% Lợi nhuận</td>
                <td className="num">Giá bán</td><td>Trạng thái</td>
                <td style={{ textAlign: 'center' }}>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td><strong>{p.code}</strong></td>
                  <td style={{ minWidth: 180 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td className="num">{p.cost.toLocaleString()}đ</td>
                  <td className="num" style={{ color: '#059669', fontWeight: 'bold' }}>{p.margin}%</td>
                  <td className="num" style={{ color: 'var(--brand)', fontWeight: 800 }}>{p.price.toLocaleString()}đ</td>
                  <td>
                    <span className={`status-chip ${p.status}`}>
                      {p.status === 'selling' ? 'Đang bán' : 'Hết bán'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn" style={{ padding: '6px 10px' }} title="Cập nhật giá">
                      <i className="fa-solid fa-dollar-sign"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}