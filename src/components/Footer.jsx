import React from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container footer-content">
                    <div className="footer-left">
                        <h2 className="footer-logo">Appvui.vn</h2>
                        <h4 className="footer-company-name">CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ VIK SOLUTION - GIẢI PHÁP TỰ ĐỘNG HÓA DOANH NGHIỆP</h4>
                        
                        <div className="footer-info">
                            <div className="info-item">
                                <strong>Trụ sở:</strong> Tòa A Việt Đức Complex - Thanh Xuân - Hà Nội.
                            </div>
                            <div className="info-item">
                                <strong>Chi nhánh:</strong>
                            </div>
                            <ul className="branch-list">
                                <li>Tầng 4, Tòa nhà IELTS Mentor - 179 Lạc Long Quân, Phường Hạc Thành, TP Thanh Hoá.</li>
                                <li>Tầng 7, Tòa A Sky Center - 5B Phổ Quang, Phường 2, Quận Tân Bình, TP Hồ Chí Minh.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="trust-badges">
                            {/* Placeholders for badges as seen in image */}
                            <div className="badge meta-badge">
                                <span>♾️ Meta</span>
                                <small>Business Partner</small>
                            </div>
                            <div className="badge certified-badge">
                                <span>CERTIFIED PARTNER</span>
                            </div>
                        </div>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <div className="footer-links">
                        <a href="#">Điều Khoản Dịch Vụ</a>
                        <span className="separator">|</span>
                        <a href="#">Chính Sách Bảo Mật</a>
                    </div>
                    <div className="copyright">
                        ©2026 CDP.vn, All Right Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
