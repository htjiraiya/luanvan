import React, { useState } from 'react';
import ChartContent from './Chart/ChartContent';
import OptionsChart from './Options-chart/Options-chart';

interface dataOption {
    userOption: number
    quantityOption: number
    typeTimeOption: number
    currentTimeOption: number
}
const Charts = () => {
    //---------state---------//
    const [option, setOption] = useState((): dataOption => {
        return {
            userOption: 1,
            quantityOption: 1,
            typeTimeOption: 1,
            currentTimeOption: 1
        }
    })

    //---------handle--------//
    const handleUpdateData = (value: dataOption) => {
        setOption(value);
    }

    return (
        <div className='main-container center'>
            <br />
            <h2>Biểu đồ sản lượng lúa</h2>
            <hr />
            <OptionsChart UpdateData={handleUpdateData} />
            <hr />
            <ChartContent option={option} />
        </div>
    );
};

export default Charts;