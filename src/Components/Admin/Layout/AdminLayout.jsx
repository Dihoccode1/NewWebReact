import Sidebar from './Sidebar';
import '../styles/admin-global.css'; 

export default function AdminLayout({ children }) {
  return (
    <div className="admin-app">
      <div className="container">
        <Sidebar />
        <div className="main">
          {children}
        </div>
      </div>
    </div>
  );
}