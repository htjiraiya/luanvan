import React from 'react'
import './Generate.scss'

function Generate() {



    return (
        <div className="season-generate">
            <p className="season-name">VỤ LÚA ĐÔNG XUÂN 2022</p>
            <div className="season-info-grid">
                <p className="seeds-name">Tên giống lúa: <span>Nàng Thơm 8</span></p>
                <p className="sowing-date">Ngày gieo xạ: <span>22 - 1 - 2022</span></p>
                <p className="season-area">Diện tích: <span>20 ha</span></p>
                <div className="sowing-density">
                    <p className="sowing-density-title">Mật độ gieo xạ:</p>
                    <div className="sowing-density-group">
                        <p className="seeds-supply">Cấp giống: <span>CG</span></p>
                        <p className="price">Giá trên 1kg: <span>20000 VND</span></p>
                        <p className="total">Tổng tiền: <span>1000000 VND</span></p>
                        <p className="seeds-rsc">Nguồn giống: <span>Long Xuyen</span></p>
                    </div>
                </div>
                <p className="seeds-process">Qui trình xuống giống: <span>Gieo thu cong</span></p>
                <p className="seeds-method">Phương thức gieo: <span>Gieo thu cong</span></p>
                <p className="avg-pre-season">Năng suất trung bình vụ trước: <span>500kg/ha</span></p>
            </div>
        </div>
    );
}

export default Generate