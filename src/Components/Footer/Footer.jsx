import "./Footer.css";
import payment1 from "../../assets/images/Payment/pay_1.webp";
import payment2 from "../../assets/images/Payment/pay_2.webp";
import payment3 from "../../assets/images/Payment/pay_3.webp";
import payment4 from "../../assets/images/Payment/pay_4.webp";
import payment5 from "../../assets/images/Payment/pay_5.webp";
import payment6 from "../../assets/images/Payment/pay_6.webp";
import payment7 from "../../assets/images/Payment/pay_7.webp";

export default function Footer() {
    const FOOTER_LINKS = [
  { title: "Thông tin", links: ["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"] },
  { title: "Hỗ trợ", links: ["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"] },
  { title: "Hướng dẫn", links: ["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"] },
  { title: "Chính sách", links: ["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"] },
];

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              {/* Sử dụng map để render các cột menu nhanh hơn */}
              {FOOTER_LINKS.map((section, index) => (
                <section className="widget-ft" key={index}>
                  <h4 className="title-menu">{section.title}</h4>
                  <ul className="list-menu">
                    {section.links.map((link, idx) => (
                      <li className="li_menu" key={idx}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section className="wg-logo">
                <h4 className="title-menu">Liên hệ</h4>
                <ul className="contact">
                  <li>
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    140B-Tổ 3, Ấp Xóm Chùa, Tỉnh Tây Ninh
                  </li>
                  <li className="sdt">
                    <span><i className="fa-solid fa-phone"></i></span>
                    <a href="tel:0338286525">0338286525</a>
                  </li>
                  <li className="sdt">
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <a href="mailto:thanhloc29052006@gmail.com">thanhloc29052006@gmail.com</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="mid-footer">
          <div className="container">
            <div className="row">
              <div className="fot_copyright">
                <span>Cung cấp bởi <a href="#">Nhóm 7</a></span>
              </div>
              
              <nav className="fot_menu_copyright">
                <ul className="ul_menu_fot">
                  <li><a href="#">Trang chủ</a></li>
                  <li><a href="#">Giới thiệu</a></li>
                  <li><a href="#">Sản phẩm</a></li>
                </ul>
              </nav>

              <div className="pay_footer">
                <ul className="follow_option">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <li key={num}>
                      <a href="#"><img src={eval(`payment${num}`)} alt="Payment" /></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}