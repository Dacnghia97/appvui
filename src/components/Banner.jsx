import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container banner-content">
                <div className="banner-text">
                    <h1 className="banner-title">
                        Appvui.vn – Nền tảng Tiện Ích Số Cho Doanh Nghiệp & Cá Nhân
                    </h1>
                    <p className="banner-desc">
                        Cung cấp các công cụ trực tuyến giúp tăng hiệu suất làm việc, tự động hóa quy trình và tối ưu trải nghiệm người dùng trên web, Zalo, Facebook và Mobile.
                    </p>
                    <button className="banner-cta">
                        Trải nghiệm tiện ích
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
