import "./Header.css"
import ImgURL from "../../assets/images/logo.jpg"
import { Link } from 'react-router-dom'; // Thêm import Link ở đây

export default function Header() {
    return (
       <>
           <header className="mid-header">
        <div className="container">
            <div className="header-main">
                <div className="header-left">
                    {/* */}
                    <form action="./sanpham/sanpham.html" method="get" className="search-bar" autoComplete="off">
                        <input type="text" name="query" placeholder="Tìm kiếm" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck="false" inputMode="search" />
                        <button type="submit" aria-label="Tìm kiếm">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>

                <div className="header-center">
                    {/* Sửa link Logo về Trang chủ */}
                    <Link to="/" className="logo">
                        <img src={ImgURL} alt="GENTLEMAN" />
                    </Link>
                </div>

                <div className="header-right">
                    {/* Sửa link Giỏ hàng (Bạn nhớ tạo Route /cart trong App.jsx sau này nhé) */}
                    <Link to="/cart" className="cart-link">
                        <i className="fa-solid fa-cart-shopping"></i> GIỎ HÀNG (<span className="cart-count">0</span>)
                    </Link>
                </div>
            </div>
        </div>
    </header>
    
    {/* Nav bar */}
    <nav className="main-nav">
      <ul>
        <li><Link to="/">TRANG CHỦ</Link></li>
        <li><Link to="/about">GIỚI THIỆU</Link></li>
        <li>
          <Link to="/products" className="js-products-url">SẢN PHẨM</Link>
        </li>
        <li><Link to="/contact">LIÊN HỆ</Link></li>
      </ul>
    </nav>
         </>
    )
}