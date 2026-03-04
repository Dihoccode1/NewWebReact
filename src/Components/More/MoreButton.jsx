import "./MoreButton.css";

export default function MoreButton() {
  return (
    <section className="awe-section-5 section_new_product">
      <div className="container">
        {/* Nơi render danh sách sản phẩm */}
        <div className="row equalize-cards" id="product-grid" data-featured="true"></div>
        
        {/* Nút Xem thêm */}
        <div className="loadmore-wrap">
          <a href="#" className="btn-loadmore" aria-label="Xem thêm">
            <span className="lm-text">Xem thêm</span>
          </a>
        </div>
      </div>
    </section>
  );
}