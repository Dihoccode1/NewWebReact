import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

export default function ProductList() {
  // Đã mở rộng data thành 10 sản phẩm để test đủ 3 trang
  const [products] = useState([
    { id: "SP001", name: "Sáp Apestomen Nitro", price: 300000, oldPrice: 350000, category: "sap", img: "https://via.placeholder.com/400", stock: 50, badge: "Sale" },
    { id: "SP002", name: "Gôm Kevin Murphy Session", price: 467000, oldPrice: null, category: "gom", img: "https://via.placeholder.com/400", stock: 0, badge: "oos" },
    { id: "SP003", name: "Bột tạo phồng Patricks HP1", price: 1000000, oldPrice: 1200000, category: "bot", img: "https://via.placeholder.com/400", stock: 5, badge: "New" },
    { id: "SP004", name: "Sáp By Vilain Gold Digger", price: 449000, oldPrice: null, category: "sap", img: "https://via.placeholder.com/400", stock: 20, badge: "" },
    { id: "SP005", name: "Sáp Hanz de Fuko Claymation", price: 550000, oldPrice: 600000, category: "sap", img: "https://via.placeholder.com/400", stock: 15, badge: "" },
    { id: "SP006", name: "Gôm Davines Extra Strong", price: 420000, oldPrice: null, category: "gom", img: "https://via.placeholder.com/400", stock: 10, badge: "" },
    { id: "SP007", name: "Sáp Blumaan Cavalier Clay", price: 520000, oldPrice: null, category: "sap", img: "https://via.placeholder.com/400", stock: 8, badge: "" },
    { id: "SP008", name: "Bột tạo phồng Dapper Dan", price: 350000, oldPrice: 400000, category: "bot", img: "https://via.placeholder.com/400", stock: 25, badge: "Sale" },
    { id: "SP009", name: "Sáp Kevin Murphy Rough Rider", price: 650000, oldPrice: null, category: "sap", img: "https://via.placeholder.com/400", stock: 30, badge: "" },
    { id: "SP010", name: "Gôm TIGI Bed Head", price: 380000, oldPrice: null, category: "gom", img: "https://via.placeholder.com/400", stock: 12, badge: "" }
  ]);

  // LOGIC PHÂN TRANG (PAGINATION)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Cố định hiển thị tối đa 4 SP/trang

  // Tính toán tổng số trang và cắt mảng dữ liệu cho trang hiện tại
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Tự động cuộn lên đầu trang khi chuyển trang
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-list-page">
      <ul className="breadcrumb">
        <li><Link to="/">Trang chủ</Link></li>
        <li className="sep"><i className="fa-solid fa-angle-right"></i></li>
        <li><span>Sản phẩm</span></li>
      </ul>

      {/* Toolbar Filter */}
      <form className="sv-search" onSubmit={e => e.preventDefault()}>
        <div className="sv-field">
          <label className="sv-label">Tìm kiếm</label>
          <input type="text" placeholder="Gõ từ khoá..." />
        </div>
        <div className="sv-field">
          <label className="sv-label">Phân loại</label>
          <select>
            <option value="all">Tất cả</option>
            <option value="sap">Sáp vuốt tóc</option>
            <option value="gom">Gôm xịt</option>
          </select>
        </div>
        <div className="sv-field">
          <label className="sv-label">Giá từ</label>
          <input type="number" placeholder="0" />
        </div>
        <div className="sv-field">
          <label className="sv-label">Đến</label>
          <input type="number" placeholder="2.000.000" />
        </div>
        <div className="sv-field">
          <label className="sv-label">Sắp xếp</label>
          <select>
            <option value="">Mặc định</option>
            <option value="price-asc">Giá ↑</option>
            <option value="price-desc">Giá ↓</option>
          </select>
        </div>
        <div className="sv-actions">
          <button className="sv-btn sv-btn-primary">Lọc</button>
          <button type="reset" className="sv-btn sv-btn-ghost">Xoá lọc</button>
        </div>
      </form>

      {/* Lưới sản phẩm - SỬ DỤNG MẢNG ĐÃ ĐƯỢC CẮT (currentProducts) */}
      <div className="product-grid">
        {currentProducts.map(p => (
          <div className="product-box" key={p.id}>
            <div className="product-thumbnail">
              <Link to={`/product/${p.id}`}>
                <img src={p.img} alt={p.name} />
              </Link>
              {p.badge && (
                <span className={`product-label ${p.badge === 'oos' ? 'oos' : ''}`}>
                  {p.badge === 'oos' ? 'Hết hàng' : p.badge}
                </span>
              )}
              <div className="product-action-grid">
                <button className="btn-cart" disabled={p.stock <= 0}>
                  {p.stock > 0 ? "+ Thêm vào giỏ" : "Hết hàng"}
                </button>
              </div>
            </div>
            <div className="product-info">
              <Link to={`/product/${p.id}`} className="product-name">{p.name}</Link>
              <div className="price-box">
                <span className="product-price">{p.price.toLocaleString()}đ</span>
                {p.oldPrice && <span className="product-price-old">{p.oldPrice.toLocaleString()}đ</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* THANH ĐIỀU HƯỚNG PHÂN TRANG */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* Nút lùi */}
          <button 
            className="page-btn" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

          {/* Các nút số trang từ 1 đến 3 */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button 
                key={pageNum}
                className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Nút tiến */}
          <button 
            className="page-btn" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}