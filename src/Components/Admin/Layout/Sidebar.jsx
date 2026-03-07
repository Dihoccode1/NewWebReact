import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin', icon: 'fa-solid fa-house', label: 'Bảng điều khiển' },
    { path: '/admin/users', icon: 'fa-solid fa-user', label: 'Quản lý khách hàng' },
    { path: '/admin/categories', icon: 'fa-solid fa-layer-group', label: 'Quản lý danh mục' },
    { path: '/admin/products', icon: 'fa-solid fa-tags', label: 'Quản lý sản phẩm' },
    { path: '/admin/pricing', icon: 'fa-solid fa-dollar-sign', label: 'Quản lý giá bán' },
    { path: '/admin/imports', icon: 'fa-solid fa-box-open', label: 'Phiếu nhập hàng' },
    { path: '/admin/inventory', icon: 'fa-solid fa-warehouse', label: 'Quản lý hàng tồn kho' },
    { path: '/admin/orders', icon: 'fa-solid fa-receipt', label: 'Quản lý đơn hàng' },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("session.user");
    alert("Đăng xuất thành công!");
    navigate('/'); // Hoặc chuyển về '/login' nếu bạn có trang login
  };

  return (
    <div className="navagation">
      <ul>
        <li>
          <Link to="/admin">
            <span className="icon"><i className="fa-brands fa-apple"></i></span>
            <span className="title" style={{ fontSize: '18px' }}>Nobility 1800s</span>
          </Link>
        </li>

        {menuItems.map((item, index) => (
          // Đánh dấu active (hovered) dựa trên URL hiện tại
          <li key={index} className={location.pathname === item.path ? 'hovered' : ''}>
            <Link to={item.path}>
              <span className="icon"><i className={item.icon}></i></span>
              <span className="title">{item.label}</span>
            </Link>
          </li>
        ))}

        <hr />

        {/* Khối User lấy chuẩn từ file gốc của bạn */}
        <li className="welcome-admin-tile" style={{ margin: '8px 10px 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', color: '#e5e7eb', cursor: 'default' }}>
            <div id="sb-admin-avatar" style={{ width: '34px', height: '34px', borderRadius: '999px', background: '#f59e0b', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '15px', flexShrink: 0 }}>
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <span id="sb-admin-username" style={{ fontWeight: '700', fontSize: '14px', lineHeight: '1.2', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>admin</span>
              <span id="sb-admin-role" style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.3', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Quản trị viên</span>
            </div>
          </div>
        </li>

        <li>
          <a href="#" onClick={handleLogout}>
            <span className="icon"><i className="fa-solid fa-right-from-bracket"></i></span>
            <span className="title">Đăng xuất</span>
          </a>
        </li>
      </ul>
    </div>
  );
}