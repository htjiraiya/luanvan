import React from 'react'
import Generate from '../../Partials/season-detail/generate/Generate'
import PaddyLogger from '../../Partials/season-detail/paddy-logger/PaddyLogger'
import './SeasonDetail.scss'


function SeasonDetail() {
    return (
        <div className="season-detail-wrapper responsive-details-page">
            <div className="season-detail-header">
                <i className="fa-solid fa-chevron-left"></i>
                <p>Chi tiết mùa vụ</p>
            </div>
            <div className="season-detail-body">
                <div className="season-image">
                    <img src="/img/test-img.png" alt="" />
                    <span></span>
                </div>
                <div className="season-content"></div>
                <Generate></Generate>
                <PaddyLogger></PaddyLogger>
            </div>
        </div>
    );
}

export default SeasonDetail