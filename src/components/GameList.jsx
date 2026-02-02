import React, { useState } from 'react';
import { Gamepad2, ShoppingBag, Coffee, Zap } from 'lucide-react';
import './GameList.css';

const games = [
    {
        id: 1,
        title: "Candy Puzzle King",
        desc: "Trò chơi xếp kẹo ngọt ngào, thử thách trí tuệ với hàng trăm màn chơi hấp dẫn.",
        image: "/game1.png",
        icon: <Coffee size={24} color="#FF9800" />
    },
    {
        id: 2,
        title: "Zombie Last Stand",
        desc: "Bảo vệ căn cứ khỏi làn sóng Zombie. Nâng cấp vũ khí và sống sót.",
        image: "/game2.png",
        icon: <Zap size={24} color="#F44336" />
    },
    {
        id: 3,
        title: "Farm Tycoon",
        desc: "Xây dựng nông trại mơ ước, trồng trọt và chăn nuôi thú cưng đáng yêu.",
        image: "/game1.png", // reusing
        icon: <Gamepad2 size={24} color="#4CAF50" />
    },
    {
        id: 4,
        title: "Speed Racer 3D",
        desc: "Đua xe tốc độ cao, chinh phục các đường đua tử thần và trở thành vua tốc độ.",
        image: "/game2.png", // reusing
        icon: <Zap size={24} color="#2196F3" />
    },
    {
        id: 5,
        title: "Space Galaxy",
        desc: "Phi thuyền không gian chiến đấu chống lại người ngoài hành tinh.",
        image: "/game1.png", // reusing
        icon: <Gamepad2 size={24} color="#9C27B0" />
    },
    {
        id: 6,
        title: "Super Bird",
        desc: "Điều khiển chú chim bay qua các chướng ngại vật. Đơn giản nhưng gây nghiện.",
        image: "/game2.png", // reusing
        icon: <ShoppingBag size={24} color="#FF5722" />
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
                    <button className="tab-item">FnB</button>
                    <button className="tab-item">e-Commerce</button>
                    <button className="tab-item">Dịch vụ</button>
                </div>

                <div className="game-grid">
                    {games.map(game => (
                        <div key={game.id} className="game-card">
                            <div className="card-header">
                                <img src={game.image} alt={game.title} className="card-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-icon-title">
                                    {/* Using Icon component directly */}
                                    {game.icon}
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
