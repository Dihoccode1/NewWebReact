import React, { useState } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Inventory.css';

export default function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);
  const [isScanned, setIsScanned] = useState(false);

  // Giả lập chức năng Quét tồn kho
  const handleScan = () => {
    const data = [
      { id: 1, code: "SP002", name: "Gôm Kevin Murphy Session", category: "Gôm xịt", qty: 0, status: "danger", statusText: "Hết hàng" },
      { id: 2, code: "SP003", name: "Bột tạo phồng Patricks", category: "Bột tạo phồng", qty: 5, status: "warning", statusText: "Sắp hết" },
      { id: 3, code: "SP001", name: "Sáp Apestomen Nitro", category: "Sáp vuốt tóc", qty: 50, status: "success", statusText: "Còn hàng" },
    ];
    setInventoryList(data);
    setIsScanned(true);
  };

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Cảnh báo tồn kho</h1>
        </div>

        <div className="toolbar-box">
          <button className="btn primary" onClick={handleScan}>
            <i className="fa-solid fa-radar"></i> Quét tồn kho ngay
          </button>
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>
            Kiểm tra các sản phẩm có số lượng tồn kho thấp (dưới 10 sản phẩm).
          </span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <td>#</td><td>Mã SP</td><td>Tên sản phẩm</td><td>Loại</td>
                <td className="num">Tồn hiện tại</td><td>Trạng thái</td>
              </tr>
            </thead>
            <tbody>
              {!isScanned ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: '#9ca3af' }}>
                    Nhấn "Quét tồn kho" để xem dữ liệu
                  </td>
                </tr>
              ) : (
                inventoryList.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td><strong>{item.code}</strong></td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td className="num" style={{ fontWeight: 'bold', fontSize: 16 }}>{item.qty}</td>
                    <td><span className={`badge-st ${item.status}`}>{item.statusText}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}