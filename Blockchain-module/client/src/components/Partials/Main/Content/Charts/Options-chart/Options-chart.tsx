import React from 'react';
import "./Options-chart.scss";
import Select, { SingleValue } from 'react-select';

interface propsObj {
    handleChangeChart: Function
}

const OptionsChart = (props: propsObj) => {

    const { handleChangeChart } = props;

    const userOptions = [
        { value: 1, label: 'Nông dân' },
        { value: 2, label: 'Hợp tác xã' },
        { value: 3, label: 'Thương lái' }
    ];

    const quantityPeople = [
        { value: 1, label: 'Cá nhân' },
        { value: 2, label: 'Tập thể' }
    ];

    const optionTime = [
        { value: 1, label: 'Theo năm' },
        { value: 2, label: 'Theo vụ' }
    ];

    const optionTypeChart = [
        { value: 1, label: 'Biểu đồ cột' },
        { value: 2, label: 'Biểu đồ đường' }
    ];

    const changeTypeChart = (newValue: SingleValue<{value: number, label: string}>) => {
        handleChangeChart(newValue?.value);
    }


    return (
        <div className='options-chart'>
            <div className="select-element">
                <Select 
                options={userOptions}
                placeholder={'Loại đối tượng'} 
                />
            </div>
            <div className="select-element">
                <Select 
                options={quantityPeople} 
                placeholder={'Số lượng thống kê'} 
                />
            </div>
            <div className="select-element">
                <Select 
                options={optionTime} 
                placeholder={'Loại thời gian'} 
                />
            </div>
            <div className="select-element">
                <Select 
                //value={optionTypeChart}
                options={optionTypeChart} 
                placeholder={'Loại biểu đồ'} 
                onChange={changeTypeChart}
                />
            </div>
        </div>
    );
};

export default OptionsChart;