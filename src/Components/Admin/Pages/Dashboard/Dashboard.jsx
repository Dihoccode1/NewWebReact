import React from 'react';
import AdminLayout from '../../Layout/AdminLayout';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="dashboard-page">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Bảng điều khiển</h1>
            <div className="sub">Tổng quan nhanh về lượt xem, đơn hàng và khách hàng của Nobility 1800s.</div>
          </div>
          <div className="dashboard-actions">
            <button className="btn primary"><i className="fa-solid fa-receipt"></i><span>Xem đơn hàng</span></button>
            <button className="btn"><i className="fa-solid fa-tags"></i><span>Quản lý sản phẩm</span></button>
          </div>
        </div>

        {/* Card Box */}
        <div className="cardBox">
          <div className="card">
            <div><div className="numbers">1,504</div><div className="cardName">Lượt xem theo ngày</div></div>
            <div className="iconBx"><i className="fa-regular fa-eye"></i></div>
          </div>
          <div className="card">
            <div><div className="numbers">80</div><div className="cardName">Đơn hàng trong ngày</div></div>
            <div className="iconBx"><i className="fa-solid fa-cart-shopping"></i></div>
          </div>
          <div className="card">
            <div><div className="numbers">284</div><div className="cardName">Bình luận / đánh giá</div></div>
            <div className="iconBx"><i className="fa-regular fa-comments"></i></div>
          </div>
          <div className="card">
            <div><div className="numbers">36.363.363đ</div><div className="cardName">Doanh thu hôm nay</div></div>
            <div className="iconBx"><i className="fa-solid fa-money-bill-wave"></i></div>
          </div>
        </div>

        {/* Bảng Dữ Liệu */}
        <div className="details">
          {/* ĐƠN HÀNG */}
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Đơn hàng gần đây</h2>
              <button className="btn">Xem tất cả</button>
            </div>
            <table>
              <thead>
                <tr><td>Tên sản phẩm</td><td>Giá</td><td>Thanh toán</td><td>Trạng thái</td></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ minWidth: '180px' }}>Sáp vuốt tóc Apestomen Nitro</td><td>300.000đ</td><td>Đã thanh toán</td>
                  <td><span className="status delivered">Đã vận chuyển</span></td>
                </tr>
                <tr>
                  <td>Sáp By Vilain Gold Digger</td><td>449.000đ</td><td>Chưa thanh toán</td>
                  <td><span className="status returned">Đã trả hàng</span></td>
                </tr>
                <tr>
                  <td>Gôm xịt tóc Kevin Murphy Session</td><td>467.000đ</td><td>Đã thanh toán</td>
                  <td><span className="status inPending">Đang chờ xử lý</span></td>
                </tr>
                <tr>
                  <td>Bột tạo phồng Patricks HP1</td><td>1.000.000đ</td><td>Đã thanh toán</td>
                  <td><span className="status inProgress">Đang xử lý</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* KHÁCH HÀNG */}
          <div className="recentCustomers">
            <div className="cardHeader"><h2>Khách hàng gần đây</h2></div>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: '50px', padding: '12px 8px' }}>
                    <div className="imgBx"><img src="https://ui-avatars.com/api/?name=John+Doe&background=1f235a&color=fff" alt="John" /></div>
                  </td>
                  <td style={{ padding: '12px 8px' }}><h4>John Doe <br/><span>Vương quốc Anh</span></h4></td>
                </tr>
                <tr>
                  <td style={{ width: '50px', padding: '12px 8px' }}>
                    <div className="imgBx"><img src="https://ui-avatars.com/api/?name=David&background=f59e0b&color=fff" alt="David" /></div>
                  </td>
                  <td style={{ padding: '12px 8px' }}><h4>David <br/><span>Ý</span></h4></td>
                </tr>
                <tr>
                  <td style={{ width: '50px', padding: '12px 8px' }}>
                    <div className="imgBx"><img src="https://ui-avatars.com/api/?name=Emily&background=0ea5e9&color=fff" alt="Emily" /></div>
                  </td>
                  <td style={{ padding: '12px 8px' }}><h4>Emily <br/><span>Pháp</span></h4></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}