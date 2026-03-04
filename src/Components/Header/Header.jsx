
import "./Header.css"
import ImgURL from "../../assets/images/logo.jpg"
export default function Header() {
    return (
       <>
           <header className="mid-header">
        <div className="container">
            <div className="header-main">
                <div className="header-left">
                    {/* <!-- Chặn autofill & gõ dấu ok --> */}
                    <form action="./sanpham/sanpham.html" method="get" className="search-bar" autoComplete="off">
                        <input type="text" name="query" placeholder="Tìm kiếm" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck="false" inputMode="search" />
                        <button type="submit" aria-label="Tìm kiếm">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
                    </form>
                </div>

                <div className="header-center">
                    <a href="./index.html" className="logo">
                        <img src={ImgURL} alt="GENTLEMAN" />
                    </a>
                </div>

                <div className="header-right">
                    <a href="./giohang.html" className="cart-link">
                        <i className="fa-solid fa-cart-shopping"></i> GIỎ HÀNG (<span className="cart-count">0</span>)
                    </a>
                </div>
            </div>
        </div>
    </header>
    {/* Nav  bar */}

 <nav className="main-nav">
      <ul>
        <li><a href="">TRANG CHỦ</a></li>
        <li><a href="">GIỚI THIỆU</a></li>
        <li>
          <a href="" className="js-products-url">SẢN PHẨM</a>
        </li>
        <li><a href="">TIN TỨC</a></li>
        <li><a href="">LIÊN HỆ</a></li>
      </ul>
    </nav>
         </>
    )
}