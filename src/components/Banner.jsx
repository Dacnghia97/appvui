import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container banner-content">
                <div className="banner-text">
                    <h1 className="banner-title">
                        Appvui.vn - Cung cấp Minigame giải trí cho cộng đồng
                    </h1>
                    <p className="banner-desc">
                        Khám phá kho game đa dạng, hấp dẫn. Trải nghiệm giải trí tuyệt vời ngay trên nền tảng của chúng tôi.
                    </p>
                </div>
                <div className="banner-image">
                    <img src="/banner.png" alt="AppVui Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
