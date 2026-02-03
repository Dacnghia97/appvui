import React, { useState } from 'react';
import './GameList.css';

const games = [
    {
        id: 1,
        title: "Tạo Link MiniApp Zalo",
        desc: "Tạo link mở MiniApp Zalo thông minh, tự động nhận diện thiết bị và trình duyệt.",
        image: "/zalo-miniapp.png"
    },
    {
        id: 2,
        title: "Game Marketing – Quay Số / Lì Xì",
        desc: "Tạo minigame marketing để thu data, tăng tương tác và giữ chân khách hàng.",
        image: "/game-marketing.png"
    },
    {
        id: 3,
        title: "Form Thu Lead Tự Động",
        desc: "Thu thập thông tin khách hàng và đẩy về Google Sheet, CRM, NocoDB, n8n.",
        image: "/lead-form.png"
    },
    {
        id: 4,
        title: "Random Code & Voucher",
        desc: "Tạo mã tham gia, mã trúng thưởng, quản lý số lượng và tỷ lệ phát thưởng.",
        image: "/random-code.png"
    },
    {
        id: 5,
        title: "Landing Page Nhanh",
        desc: "Tạo landing page gọn nhẹ, tối ưu chuyển đổi, dùng cho quảng cáo.",
        image: "/landing-page.png"
    },
    {
        id: 6,
        title: "API Tiện Ích Doanh Nghiệp",
        desc: "Cung cấp API cho random, xác thực, tracking, webhook, automation.",
        image: "/api-service.png"
    },
    {
        id: 7,
        title: "Tạo Thiệp Mời Online",
        desc: "Tạo thiệp mời sinh nhật, cưới hỏi, khai trương, sự kiện nhanh chóng.",
        image: "/invitation-card.png"
    },
    {
        id: 8,
        title: "Lịch Vạn Niên",
        desc: "Tra cứu lịch âm – dương, ngày tốt xấu, giờ hoàng đạo chính xác và tiện lợi.",
        image: "/calendar-vannam.png"
    },
    {
        id: 9,
        title: "Xem Bói Cung Hoàng Đạo",
        desc: "Xem tử vi, tình cảm, sự nghiệp, tài lộc theo 12 cung hoàng đạo mỗi ngày.",
        image: "/horoscope.png"
    }
];

const GameList = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className="game-list-section">
            <div className="container">
                <div className="section-tabs">
                    <button
                        className={`tab-item ${activeTab === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveTab('all')}
                    >
                        Tất cả
                    </button>
                    <button className="tab-item">Marketing & Automation</button>
                    <button className="tab-item">Công cụ Web</button>
                    <button className="tab-item">Tiện ích đời sống</button>
                    <button className="tab-item">API & Kỹ thuật</button>
                </div>

                <div className="game-grid">
                    {games.map(game => (
                        <div key={game.id} className="game-card">
                            <div className="card-header">
                                <img src={game.image} alt={game.title} className="card-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-icon-title">
                                    <h3 className="game-title">{game.title}</h3>
                                </div>
                                <p className="game-desc">{game.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameList;
