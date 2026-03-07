import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams(); // Lấy ID từ URL (VD: /product/SP001)
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  // Fake fetch dữ liệu chi tiết dựa trên ID
  const product = {
    id: id || "SP001",
    name: "Sáp vuốt tóc Apestomen Nitro Wax",
    price: 300000,
    oldPrice: 350000,
    stock: 50,
    images: [
      "https://via.placeholder.com/600",
      "https://via.placeholder.com/600/f5f7fb/111?text=Img+2",
      "https://via.placeholder.com/600/e5e7eb/111?text=Img+3"
    ],
    desc: "Apestomen Nitro Wax là dòng sáp vuốt tóc hướng tới sự tự nhiên, độ giữ nếp cực cao và độ bóng mờ hoàn hảo. Phù hợp cho những mái tóc dày, cứng khó vào nếp.",
    usage: "Lấy một lượng nhỏ bằng hạt đậu, xoa đều ra tay và vuốt lên tóc khô. Tạo kiểu theo ý muốn."
  };

  const [mainImg, setMainImg] = useState(product.images[0]);

  const handleAddToCart = () => {
    alert(`Đã thêm ${qty} sản phẩm [${product.name}] vào giỏ hàng!`);
  };

  return (
    <div className="product-detail-page">
      <ul className="breadcrumb">
        <li><Link to="/">Trang chủ</Link></li>
        <li className="sep"><i className="fa-solid fa-angle-right"></i></li>
        <li><Link to="/products">Sản phẩm</Link></li>
        <li className="sep"><i className="fa-solid fa-angle-right"></i></li>
        <li><span style={{color: '#111'}}>{product.name}</span></li>
      </ul>

      <div className="pd-grid">
        {/* Cột trái: Hình ảnh */}
        <div className="gallery">
          <div className="gallery-thumbs">
            {product.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`thumb-${idx}`} 
                className={mainImg === img ? 'active' : ''}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
          <div className="gallery-main">
            <img src={mainImg} alt={product.name} />
          </div>
        </div>

        {/* Cột phải: Thông tin */}
        <div className="pd-info">
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-meta">Mã SP: {product.id} • Thương hiệu: Apestomen</div>
          
          <div className="pd-price-wrap">
            <span className="new">{product.price.toLocaleString()}đ</span>
            {product.oldPrice && <span className="old">{product.oldPrice.toLocaleString()}đ</span>}
          </div>

          <div className="pd-stock">
            <i className="fa-solid fa-check-circle"></i> Còn {product.stock} sản phẩm trong kho
          </div>

          <div className="pd-actions">
            <input 
              type="number" 
              className="qty-input" 
              value={qty} 
              min="1" 
              max={product.stock}
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <button className="btn-add" onClick={handleAddToCart}>
              <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
            </button>
          </div>

          <div className="pd-trust">
            <div><i className="fa-solid fa-shield-halved"></i> Hàng chính hãng 100%</div>
            <div><i className="fa-solid fa-rotate-left"></i> Đổi trả trong 7 ngày</div>
            <div><i className="fa-solid fa-truck-fast"></i> Giao hàng siêu tốc</div>
            <div><i className="fa-solid fa-headset"></i> Hỗ trợ 24/7</div>
          </div>
        </div>
      </div>

      {/* Box Thông số chi tiết */}
      <div className="pd-tabs">
        <div className="tab-headers">
          <div className={`tab-head ${activeTab === 'desc' ? 'active' : ''}`} onClick={() => setActiveTab('desc')}>Mô tả chi tiết</div>
          <div className={`tab-head ${activeTab === 'usage' ? 'active' : ''}`} onClick={() => setActiveTab('usage')}>Hướng dẫn sử dụng</div>
        </div>
        <div className="tab-body">
          {activeTab === 'desc' ? <p>{product.desc}</p> : <p>{product.usage}</p>}
        </div>
      </div>
    </div>
  );
}