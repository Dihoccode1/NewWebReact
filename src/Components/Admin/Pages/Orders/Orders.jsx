import React, { useState } from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Orders.css';

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dữ liệu mẫu (Giả lập)
  const orders = [
    { id: "DH1001", customer: "John Doe", date: "28/10/2025 14:30", total: 749000, payment: "Đã thanh toán", status: "delivered", items: [{ name: "Sáp By Vilain Gold", price: 449000, qty: 1 }, { name: "Lược bán nguyệt", price: 300000, qty: 1 }] },
    { id: "DH1002", customer: "Nguyễn Văn A", date: "29/10/2025 09:15", total: 467000, payment: "COD (Chưa TT)", status: "inProgress", items: [{ name: "Gôm Kevin Murphy", price: 467000, qty: 1 }] },
    { id: "DH1003", customer: "Trần Bình", date: "30/10/2025 18:00", total: 1000000, payment: "Đã thanh toán", status: "returned", items: [{ name: "Bột tạo phồng Patricks", price: 1000000, qty: 1 }] },
  ];

  return (
    <AdminLayout>
      <div className="page">
        <div className="page-header">
          <h1>Quản lý đơn hàng</h1>
          <div className="actions">
            <button className="btn"><i className="fa-solid fa-file-export"></i> Xuất Excel</button>
          </div>
        </div>

        <div className="toolbar">
          <input className="input" type="text" placeholder="Tìm mã ĐH, tên khách..." style={{ minWidth: 260 }}/>
          <select className="input">
            <option value="">Tất cả trạng thái</option>
            <option value="inProgress">Đang xử lý</option>
            <option value="delivered">Đã giao</option>
            <option value="returned">Đã hủy/Hoàn trả</option>
          </select>
          <input className="input" type="date" />
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <td>Mã ĐH</td><td>Khách hàng</td><td>Ngày đặt</td><td className="num">Tổng tiền</td>
                <td>Thanh toán</td><td>Trạng thái</td><td style={{ textAlign: 'center' }}>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td><strong>{o.id}</strong></td>
                  <td>{o.customer}</td>
                  <td>{o.date}</td>
                  <td className="num" style={{ fontWeight: 'bold', color: 'var(--brand)' }}>{o.total.toLocaleString()}đ</td>
                  <td><span className="pay-badge">{o.payment}</span></td>
                  <td>
                    <span className={`status-chip ${o.status}`}>
                      {o.status === 'delivered' ? 'Đã giao' : o.status === 'inProgress' ? 'Đang xử lý' : 'Đã hủy'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn" style={{ padding: '6px 10px' }} onClick={() => setSelectedOrder(o)}>
                      <i className="fa-solid fa-eye"></i> Xem
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL CHI TIẾT ĐƠN HÀNG */}
      <div className={`modal-backdrop ${selectedOrder ? 'show' : ''}`} onClick={() => setSelectedOrder(null)}>
        <div className="modal-card" onClick={e => e.stopPropagation()}>
          {selectedOrder && (
            <>
              <div className="modal-header">
                <h2 style={{ margin: 0 }}>Chi tiết Đơn hàng: {selectedOrder.id}</h2>
                <button className="btn" style={{ padding: '6px 10px', border: 'none' }} onClick={() => setSelectedOrder(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="grid-2">
                  <div className="info-box">
                    <h4>Thông tin đơn hàng</h4>
                    <div className="info-row"><span className="k">Ngày đặt</span><span className="v">{selectedOrder.date}</span></div>
                    <div className="info-row"><span className="k">Thanh toán</span><span className="v">{selectedOrder.payment}</span></div>
                    <div className="info-row"><span className="k">Trạng thái</span><span className="v">{selectedOrder.status}</span></div>
                  </div>
                  <div className="info-box">
                    <h4>Thông tin khách hàng</h4>
                    <div className="info-row"><span className="k">Họ tên</span><span className="v">{selectedOrder.customer}</span></div>
                    <div className="info-row"><span className="k">SĐT</span><span className="v">090xxxxxxx</span></div>
                    <div className="info-row"><span className="k">Địa chỉ</span><span className="v">123 Đường ABC, TP.HCM</span></div>
                  </div>
                </div>

                <h4 style={{ marginBottom: 10 }}>Danh sách sản phẩm</h4>
                <table style={{ minWidth: '100%', border: '1px solid var(--line)' }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr><td>Tên sản phẩm</td><td className="num">Giá</td><td className="num">SL</td><td className="num">Thành tiền</td></tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td className="num">{item.price.toLocaleString()}đ</td>
                        <td className="num">{item.qty}</td>
                        <td className="num">{(item.price * item.qty).toLocaleString()}đ</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="num" style={{ fontWeight: 'bold' }}>Tổng cộng:</td>
                      <td className="num" style={{ fontWeight: 'bold', color: 'var(--brand)', fontSize: 16 }}>{selectedOrder.total.toLocaleString()}đ</td>
                    </tr>
                  </tfoot>
                </table>

                <div style={{ display: 'flex', gap: '8px', marginTop: '20px', justifyContent: 'flex-end' }}>
                  {selectedOrder.status === 'inProgress' && <button className="btn primary">Xác nhận giao hàng</button>}
                  <button className="btn" onClick={() => setSelectedOrder(null)}>Đóng</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}