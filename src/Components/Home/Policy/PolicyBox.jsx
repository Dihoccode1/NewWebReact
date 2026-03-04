import "./PolicyBox.css";
import "../Topbar/Topbar.css";
export default function PolicyBox() {
  return (
    <div className="page-main">
      {/* Policy strip */}
      <div className="policy-box">
        <div className="container">
          <div className="policy-item">
            <span>Miễn phí vận chuyển</span>
          </div>
          <div className="policy-item">
            <span>Miễn phí đổi trả</span>
          </div>
          <div className="policy-item">
            <span>Thanh toán trực tuyến</span>
          </div>
        </div>
      </div>
    </div>
  );
}