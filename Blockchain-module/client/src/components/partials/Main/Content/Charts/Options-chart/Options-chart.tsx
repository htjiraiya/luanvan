import React, { useEffect, useState } from 'react';
import "./Options-chart.scss";
import Select, { SingleValue } from 'react-select';

interface propsObj {
    handleChangeChart: Function
}

interface selectOption { value: number, label: string };

const OptionsChart = (props: propsObj) => {
    //---------props----------//
    const { handleChangeChart } = props;

    //----------state---------//
    const [currentUserOption, setCurrentUserOption] = useState(
        { value: 1, label: 'Nông dân' }
    );

    const [currentQuantityOption, setCurrentQuantityOption] = useState(
        { value: 1, label: 'Cá nhân' }
    );

    const [currentTimeOption, setCurrentTimeOption] = useState(
        { value: 1, label: 'Tháng' }
    );

    const [currentTypeOption, setCurrentTypeOption] = useState(
        { value: 1, label: 'Bar' }
    );

    const userOptions = [
        { value: 1, label: 'Nông dân' },
        { value: 2, label: 'Hợp tác xã' },
        { value: 3, label: 'Thương lái' }
    ];

    const [quantityPeople, setQuantityPeople] = useState(() => {
        return [
            { value: 1, label: 'Cá nhân' },
            { value: 2, label: 'Tập thể' }
        ];
    });

    const [optionTime, setOptionTime] = useState(() => {
        return [
            { value: 1, label: 'Theo Tháng' },
            { value: 2, label: 'Theo mùa' },
            { value: 3, label: 'Theo năm' },
        ];
    });

    const [optionTypeChart, setOptionTypeChart] = useState(() => {
        return [
            { value: 1, label: 'Biểu đồ cột' },
            { value: 2, label: 'Biểu đồ đường' }
        ]
    });

    //-------------lifecycle------------//


    //-------------handle---------------//
    const changeUserOption = (newValue: SingleValue<selectOption>) => {
        setCurrentUserOption(newValue as selectOption);

        //update options select by new value of user option
        switch (newValue?.value) {
            case 1:
                setQuantityPeople([
                    { value: 1, label: 'Cá nhân' },
                    { value: 2, label: 'Tập thể' }
                ]);
                break;

            case 2:
                setQuantityPeople([
                    { value: 1, label: 'Một hợp tác xã' },
                    { value: 2, label: 'Nhiều hợp tác xã' }
                ]);
                break;

            case 3:
                setQuantityPeople([
                    { value: 1, label: 'Cá nhân' },
                    { value: 2, label: 'Tập thể' }
                ]);
                break;

            default:
                setQuantityPeople([
                    { value: 1, label: 'Cá nhân' },
                    { value: 2, label: 'Tập thể' }
                ]);
        }
    }

    const changeQuantityOption = (newValue: SingleValue<selectOption>) => {
        //set value
        setCurrentQuantityOption(newValue as selectOption);

        switch (newValue?.value) {
            case 1:
                setQuantityPeople([
                    { value: 1, label: 'Biểu đồ cột' },
                    { value: 2, label: 'Biểu đồ đường' }
                ]);
                break;

            case 2:
                // switch (currentTimeOption.value) {
                //     case 1: {
                //         let selectArr:selectOption[] = [];
                //         for (let i = 0; i <= 50; i++) {
                //             selectArr.push({value: 1, label: `${2000 + i}`});
                //         }
                //         setOptionTypeChart(selectArr);
                //     }

                //     case 2: {
                //         let selectArr:selectOption[] = [];
                //         for (let i = 0; i <= 50; i++) {
                //             selectArr.push({value: 1, label: `${2000 + i}`});
                //         }
                //         setOptionTypeChart(selectArr);
                //     }
                // }
                setQuantityPeople([
                    { value: 1, label: 'Một hợp tác xã' },
                    { value: 2, label: 'Nhiều hợp tác xã' }
                ]);
                break;

            default:
                setQuantityPeople([
                    { value: 1, label: 'Cá nhân' },
                    { value: 2, label: 'Tập thể' }
                ]);
        }
    }

    const changeTimeOption = (newValue: SingleValue<selectOption>) => {
        setCurrentTimeOption(newValue as selectOption);
    }

    const changeTypeChart = (newValue: SingleValue<selectOption>) => {
        setCurrentTypeOption(newValue as selectOption);
        handleChangeChart(newValue?.value);
    }


    return (
        <div className='options-chart'>
            <div className="select-element">
                <Select
                    options={userOptions}
                    placeholder={'Loại đối tượng'}
                    onChange={changeUserOption}
                />
            </div>
            <div className="select-element">
                <Select
                    options={quantityPeople}
                    placeholder={'Số lượng thống kê'}
                    onChange={changeQuantityOption}
                />
            </div>
            <div className="select-element">
                <Select
                    options={optionTime}
                    placeholder={'Loại thời gian'}
                    onChange={changeTimeOption}
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