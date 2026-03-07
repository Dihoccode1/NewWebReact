import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserOrders.css';

export default function UserOrders() {
  // Dữ liệu mẫu
  const [orders, setOrders] = useState([
    { 
      id: "DH1001", status: "new", date: "28/10/2025 14:30", payMethod: "COD", subtotal: 749000, ship: 30000, total: 779000,
      shipping: { fullname: "John Doe", phone: "0901234567", address: "123 Đường ABC", district: "Q1", city: "HCM" },
      items: [{ name: "Sáp By Vilain Gold", price: 449000, qty: 1 }, { name: "Lược bán nguyệt", price: 300000, qty: 1 }]
    },
    { 
      id: "DH1002", status: "delivered", date: "20/10/2025 09:15", payMethod: "BANK", subtotal: 467000, ship: 0, total: 467000,
      shipping: { fullname: "John Doe", phone: "0901234567", address: "123 Đường ABC", district: "Q1", city: "HCM" },
      items: [{ name: "Gôm Kevin Murphy", price: 467000, qty: 1 }]
    }
  ]);

  const cancelOrder = (orderId) => {
    if (window.confirm("Xác nhận hủy đơn hàng này?")) {
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: "canceled" } : o));
    }
  };

  const getStatusConfig = (status) => {
    switch(status) {
      case "new": return { label: "Chờ xử lý", class: "bg-secondary" };
      case "shipping": return { label: "Đang giao", class: "bg-warning" };
      case "delivered": return { label: "Đã giao", class: "bg-success" };
      case "canceled": return { label: "Đã hủy", class: "bg-danger" };
      default: return { label: "Không rõ", class: "bg-secondary" };
    }
  };

  return (
    <div className="user-orders-page">
      <Link to="/profile" style={{ display: 'inline-block', marginBottom: 16, color: '#1a73e8', textDecoration: 'none', fontWeight: 600 }}>
        <i className="fa-solid fa-chevron-left"></i> Quay lại hồ sơ
      </Link>
      
      <h3>Lịch sử mua hàng</h3>

      {orders.map(o => {
        const st = getStatusConfig(o.status);
        return (
          <div className="order-card" key={o.id}>
            <div className="card-header-flex">
              <h5>Đơn {o.id}</h5>
              <span className={`badge ${st.class}`}>{st.label}</span>
            </div>
            
            <div className="text-muted">
              {o.date} • {o.payMethod === "COD" ? "Thanh toán khi nhận hàng" : "Chuyển khoản"}
            </div>
            
            <div style={{ fontSize: 14 }}>
              <strong>Giao đến:</strong> {o.shipping.fullname} • {o.shipping.phone}<br/>
              {o.shipping.address}, {o.shipping.district}, {o.shipping.city}
            </div>

            <ul className="list-group">
              {o.items.map((item, idx) => (
                <li className="list-group-item" key={idx}>
                  <div>{item.name} <span style={{color: '#6b7280'}}>x{item.qty}</span></div>
                  <div>{(item.price * item.qty).toLocaleString()}đ</div>
                </li>
              ))}
            </ul>

            <div className="summary-row"><span>Tạm tính</span><strong>{o.subtotal.toLocaleString()}đ</strong></div>
            <div className="summary-row"><span>Phí vận chuyển</span><strong>{o.ship.toLocaleString()}đ</strong></div>
            
            <div className="summary-total">
              <div>
                {o.status === 'new' && (
                  <button className="btn-cancel" onClick={() => cancelOrder(o.id)}>Hủy đơn</button>
                )}
              </div>
              <strong style={{ fontSize: 20, color: '#1f235a' }}>{o.total.toLocaleString()}đ</strong>
            </div>
          </div>
        )
      })}
    </div>
  );
}