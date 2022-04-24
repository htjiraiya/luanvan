import React from 'react'
import Fertilizer from './fertilizer/Fertilizer'
import PlantProtection from './plant-protection/PlantProtection';
import './PaddyLogger.scss'


function PaddyLogger() {
    return (
        <div className="paddy-logger-wrapper">
            <p className="paddy-logger-title">Nhật Ký Mùa Vụ</p>
            <div className="paddy-logger-body">
                <Fertilizer></Fertilizer>
                <PlantProtection></PlantProtection>
            </div>
        </div>
    );
}

export default PaddyLogger