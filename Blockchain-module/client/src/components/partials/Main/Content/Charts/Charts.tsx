import React, { useState } from 'react';
import ChartContent from './Chart/ChartContent';
import OptionsChart from './Options-chart/Options-chart';


const Charts = () => {
    const [typeChart, setTypeChart] = useState(1);

    const handleChangeChart = (value:number) => {
        setTypeChart(value);
    }

    return (
        <div className='main-container center'>
            <br />
            <h2>Biểu đồ sản lượng lúa</h2>
            <hr />
            <OptionsChart handleChangeChart={handleChangeChart}/>
            <hr />
            <ChartContent typeChart={typeChart}/>
        </div>
    );
};

export default Charts;