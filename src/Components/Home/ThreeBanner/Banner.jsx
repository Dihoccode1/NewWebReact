import Banner1 from "../../../assets/images/Banner/banner1.webp";
import Banner2 from "../../../assets/images/Banner/banner2.webp";
import Banner3 from "../../../assets/images/Banner/banner3.webp";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="awe-section-3">
      {/* Giả định bạn đã có class container dùng chung, nếu chưa CSS bên dưới sẽ cover */}
      <div className="container">
        <div className="adv-row">
          <div className="adv_bottom_inner">
            <figure>
              <a href="#" title="Dưỡng tóc">
                <img src={Banner1} alt="Dưỡng tóc" loading="lazy" />
              </a>
            </figure>
          </div>
          <div className="adv_bottom_inner">
            <figure>
              <a href="#" title="Gôm xịt tóc">
                <img src={Banner2} alt="Gôm xịt tóc" loading="lazy" />
              </a>
            </figure>
          </div>
          <div className="adv_bottom_inner">
            <figure>
              <a href="#" title="Sáp vuốt tóc">
                <img src={Banner3} alt="Sáp vuốt tóc" loading="lazy" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}