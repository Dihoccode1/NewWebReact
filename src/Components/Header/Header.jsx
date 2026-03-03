
import "./Header.css"
import ImgURL from "../../assets/images/logo.jpg"
export default function Header() {
    return (
       <>
           <header class="mid-header">
        <div class="container">
            <div class="header-main">
                <div class="header-left">
                    {/* <!-- Chặn autofill & gõ dấu ok --> */}
                    <form action="./sanpham/sanpham.html" method="get" class="search-bar" autocomplete="off">
                        <input type="text" name="query" placeholder="Tìm kiếm" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" inputmode="search" />
                        <button type="submit" aria-label="Tìm kiếm">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
                    </form>
                </div>

                <div class="header-center">
                    <a href="./index.html" class="logo">
                        <img src={ImgURL} alt="GENTLEMAN" />
                    </a>
                </div>

                <div class="header-right">
                    <a href="./giohang.html" class="cart-link">
                        <i class="fa-solid fa-cart-shopping"></i> GIỎ HÀNG (<span class="cart-count">0</span>)
                    </a>
                </div>
            </div>
        </div>
    </header>
    {/* Nav  bar */}

 <nav class="main-nav">
      <ul>
        <li><a href="">TRANG CHỦ</a></li>
        <li><a href="">GIỚI THIỆU</a></li>
        <li>
          <a href="" class="js-products-url">SẢN PHẨM</a>
        </li>
        <li><a href="">TIN TỨC</a></li>
        <li><a href="">LIÊN HỆ</a></li>
      </ul>
    </nav>
         </>
    )
}