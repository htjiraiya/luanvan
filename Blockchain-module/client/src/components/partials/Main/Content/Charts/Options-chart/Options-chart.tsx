import React, { useEffect, useState } from 'react';
import "./Options-chart.scss";
import Select, { SingleValue } from 'react-select';

interface propsObj {
    UpdateData: Function
}

interface selectOption { value: number, label: string };

const OptionsChart = (props: propsObj) => {
    //---------props----------//
    const { UpdateData } = props;

    //----------state---------//
    const [currentUserOption, setCurrentUserOption] = useState(
        { value: 1, label: 'Nông dân' }
    );

    const [currentQuantityOption, setCurrentQuantityOption] = useState(
        { value: 1, label: 'Cá nhân' }
    );

    const [currentTypeTimeOption, setCurrentTypeTimeOption] = useState(
        { value: 1, label: 'Tháng' }
    );

    const [currentTimeOption, setCurrentTimeOption] = useState(
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

    const [optionTypeTime, setOptionTypeTime] = useState(() => {
        return [
            { value: 1, label: 'Theo mùa trong năm' },
            { value: 2, label: 'Theo mỗi 5 năm' },
        ];
    });

    const [optionTimeOption, setOptionTimeOption] = useState(() => {
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

        submitData();
    }

    const changeQuantityOption = (newValue: SingleValue<selectOption>) => {
        //set value
        setCurrentQuantityOption(newValue as selectOption);

        submitData();
    }

    const changeTypeTimeOption = (newValue: SingleValue<selectOption>) => {
        setCurrentTypeTimeOption(newValue as selectOption);

        switch (newValue?.value) {
            case 1: {
                let yearOptions:selectOption[] = [];
                for (let index = 1; index <= 200; index ++) {
                    yearOptions.push({value: index, label: `${2000 + index}`});
                }
                setOptionTimeOption(yearOptions);
                break;
            }

            case 2: {
                let yearOptions:selectOption[] = [];
                let index = 1;
                let count = 5;
                let currentYear = 2000;
                while(count <= 200) {
                    yearOptions.push({value: index, label: `${currentYear} - ${currentYear + count}`});
                    count +=5;
                    index ++;
                };
                setOptionTimeOption(yearOptions);
                break;
            }
        }

        submitData();
    }

    const changeTimeOption = (newValue: SingleValue<selectOption>) => {
        setCurrentTimeOption(newValue as selectOption);
        submitData();
    }

    const submitData = () => {
        const data = {
            userOption: currentUserOption.value,
            quantityOption: currentQuantityOption.value,
            typeTimeOption: currentTypeTimeOption.value,
            currentTimeOption: currentTimeOption.value
        }

        UpdateData(data);
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
                    options={optionTypeTime}
                    placeholder={'Loại thời gian'}
                    onChange={changeTypeTimeOption}
                />
            </div>
            <div className="select-element">
                <Select
                    //value={optionTypeChart}
                    options={optionTimeOption}
                    placeholder={'Loại biểu đồ'}
                    onChange={changeTimeOption}
                />
            </div>
        </div>
    );
};

export default OptionsChart;