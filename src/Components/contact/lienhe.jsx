import { useState } from "react";
import "./LienHe.css";

// ── Icons (inline SVG để không phụ thuộc FontAwesome) ──────────────────────
const IconLocation = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const IconAngleRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="12"
    height="12"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconCart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.98-1.67l1.35-7.32H6" />
  </svg>
);
const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="18"
    height="18"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    width="16"
    height="16"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "TRANG CHỦ", href: "/index.html" },
  { label: "GIỚI THIỆU", href: "/gioithieu.html" },
  { label: "SẢN PHẨM", href: "/sanpham/sanpham.html" },
  { label: "TIN TỨC", href: "/tintuc.html" },
  { label: "LIÊN HỆ", href: "/lienhe.html", active: true },
];

const FOOTER_COLS = [
  { title: "Thông tin", links: NAV_LINKS },
  { title: "Hỗ trợ", links: NAV_LINKS },
  { title: "Hướng dẫn", links: NAV_LINKS },
  { title: "Chính sách", links: NAV_LINKS },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7844.969835519974!2d106.60488100000002!3d10.541174999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1759034566070!5m2!1svi!2s";

// ── Sub-components ─────────────────────────────────────────────────────────
function Header({ cartCount, onSearch, searchVal, setSearchVal }) {
  return (
    <>
      {/* Topbar */}
      <header className="lh-topbar">
        <div className="lh-container">
          <div className="lh-topbar__right" />
        </div>
      </header>

      {/* Mid header */}
      <header className="lh-midheader">
        <div className="lh-container">
          <div className="lh-midheader__grid">
            {/* Search */}
            <div className="lh-midheader__left">
              <form className="lh-search" onSubmit={onSearch}>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm…"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  spellCheck={false}
                />
                <button type="submit" aria-label="Tìm kiếm">
                  <IconSearch />
                </button>
              </form>
            </div>

            {/* Logo */}
            <div className="lh-midheader__center">
              <a href="/index.html" className="lh-logo">
                GENTLEMAN
              </a>
            </div>

            {/* Cart */}
            <div className="lh-midheader__right">
              <a href="/giohang.html" className="lh-cart">
                <IconCart />
                <span>GIỎ HÀNG ({cartCount})</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="lh-nav">
        <div className="lh-container">
          <ul className="lh-nav__list">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={l.active ? "lh-nav__link--active" : ""}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

function Breadcrumb() {
  return (
    <section className="lh-breadcrumb">
      <div className="lh-container">
        <ul className="lh-breadcrumb__list">
          <li>
            <a href="/index.html">Trang chủ</a>
          </li>
          <li className="lh-breadcrumb__sep">
            <IconAngleRight />
          </li>
          <li>
            <strong>Liên hệ</strong>
          </li>
        </ul>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="lh-container">
      <div className="lh-page-header">
        <h1>Liên hệ</h1>
      </div>
      <div className="lh-map-wrapper">
        <div className="lh-map">
          <iframe
            src={MAP_SRC}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ Gentleman"
          />
        </div>
      </div>
    </section>
  );
}

function ContactForm({ form, onChange, onSubmit, status }) {
  return (
    <div className="lh-card">
      <h2>Để lời nhắn</h2>
      <form onSubmit={onSubmit} noValidate>
        <div className="lh-form-grid">
          <div className="lh-field">
            <label htmlFor="lh-name">Họ và tên</label>
            <input
              id="lh-name"
              name="name"
              type="text"
              className="lh-input"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="lh-field">
            <label htmlFor="lh-email">Địa chỉ email</label>
            <input
              id="lh-email"
              name="email"
              type="email"
              className="lh-input"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="lh-field">
            <label htmlFor="lh-phone">Số điện thoại</label>
            <input
              id="lh-phone"
              name="phone"
              type="tel"
              pattern="[0-9\s+()\-]*"
              className="lh-input"
              value={form.phone}
              onChange={onChange}
              required
            />
          </div>

          <div className="lh-field">
            <label htmlFor="lh-message">Lời nhắn</label>
            <textarea
              id="lh-message"
              name="message"
              className="lh-input lh-textarea"
              rows={5}
              value={form.message}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="lh-btn"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Đang gửi…"
                : status === "sent"
                  ? "✓ Đã gửi!"
                  : "Gửi tin nhắn"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="lh-contact-card">
      <h2>Hãy liên hệ với chúng tôi!</h2>

      <div className="lh-contact-item">
        <span className="lh-contact-icon">
          <IconLocation />
        </span>
        <div className="lh-contact-text">
          140B-Tổ 3, Ấp Xóm Chùa, Tỉnh Tây Ninh
        </div>
      </div>

      <div className="lh-contact-item">
        <span className="lh-contact-icon">
          <IconPhone />
        </span>
        <div className="lh-contact-text">
          <a href="tel:0338286525">0338286525</a>
        </div>
      </div>

      <div className="lh-contact-item">
        <span className="lh-contact-icon">
          <IconMail />
        </span>
        <div className="lh-contact-text">
          <a href="mailto:contact@gentleman.vn">contact@gentleman.vn</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <footer className="lh-footer">
      <div className="lh-footer__top">
        <div className="lh-container">
          <div className="lh-footer__grid">
            {FOOTER_COLS.map((col, i) => (
              <div
                key={col.title}
                className={`lh-footer__col ${openIdx === i ? "is-open" : ""}`}
              >
                <h4 className="lh-footer__title" onClick={() => toggle(i)}>
                  {col.title}
                  <span className="lh-footer__toggle">
                    <IconAngleRight />
                  </span>
                </h4>
                <ul className="lh-footer__menu">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>
                        {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact col */}
            <div className="lh-footer__col lh-footer__col--contact is-open">
              <h4 className="lh-footer__title">Liên hệ</h4>
              <ul className="lh-footer__contact">
                <li>
                  <IconLocation />
                  <span>140B-Tổ 3, Ấp Xóm Chùa, Tỉnh Tây Ninh</span>
                </li>
                <li>
                  <IconPhone />
                  <a href="tel:0338286525">0338286525</a>
                </li>
                <li>
                  <IconMail />
                  <a href="mailto:contact@gentleman.vn">contact@gentleman.vn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="lh-footer__bottom">
        <div className="lh-container">
          <div className="lh-footer__bottom-inner">
            <span className="lh-footer__copy">
              Cung cấp bởi <a href="#">Nhóm 7</a>
            </span>

            <nav className="lh-footer__nav">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                </a>
              ))}
            </nav>

            <div className="lh-footer__pay">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <a key={n} href="#">
                  <img
                    src={`/assets/images/pay_${n}.webp`}
                    alt="Payment"
                    width="40"
                    height="24"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#top" className="lh-backtop" title="Lên đầu trang">
        <IconUp />
      </a>
    </footer>
  );
}

// ── Main Component
export default function LienHe() {
  const [searchVal, setSearchVal] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchVal.trim();
    window.location.href = `/sanpham/sanpham.html${q ? `?q=${encodeURIComponent(q)}` : ""}`;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <div className="lh-root" id="top">
      <Header
        cartCount={0}
        onSearch={handleSearch}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
      />

      <Breadcrumb />
      <MapSection />

      {/* Form + Info */}
      <section className="lh-container lh-section-gap">
        <div className="lh-two-col">
          <ContactForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            status={status}
          />
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
}
