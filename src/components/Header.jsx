import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          Appvui.vn
        </a>

        <div className="main-nav">
          <a href="#home" className="nav-link">Trang chủ</a>
          <a href="#games" className="nav-link">Tiện ích</a>
          <a href="#solutions" className="nav-link">Giải pháp</a>
          <a href="#pricing" className="nav-link">Bảng giá</a>
          <a href="#contact" className="nav-link">Liên hệ</a>
        </div>

        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." />
            <Search className="search-icon" />
          </div>

          <div className="lang-switch">
            <span>VN</span> <span style={{ opacity: 0.5 }}>|</span> <span style={{ opacity: 0.5 }}>ENG</span>
          </div>

          <div className="user-actions">
            <Bell size={20} />
            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 600 }}>
              Đăng nhập
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
