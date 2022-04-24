import React from 'react'
import PlantProtectionRow from './plant-protection-row/PlantProtectionRow'
import { Table, Row, Cell } from '../../../features/table/Table';

import './PlantProtection.scss'
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

function PlantProtection() {

    const [plantProtection, setPlantProtection] = React.useState('')
    const [plantProtections, setPlantProtections] = React.useState<number[]>([])

    const handleChange = (e: SelectChangeEvent) => {
        setPlantProtection(e.target.value)
    }

    const handleClickToAddRow = () => {
        let arr = plantProtections
        arr.push(plantProtections.length + 1)
        setPlantProtections([...arr])
    }

    const data = plantProtections.map((value, index)=> {
        return (
            <PlantProtectionRow id={`fertilizer-${value}`} key={index}></PlantProtectionRow>
        )
    })

    return (
        <div className="plant-protection">
            <div className="plant-protection-title">
                <p>Thuốc Bảo Vệ Thực Vật</p>
            </div>
            <FormControl className='plant-protection-select-form'>
                <InputLabel id="demo-simple-select-label" className='select-label'>Thuốc bảo vệ thực vật</InputLabel>
                <Select
                    className="plant-protection-select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={plantProtection}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Thuốc trừ bệnh</MenuItem>
                    <MenuItem value={2}>Thuốc trừ cỏ</MenuItem>
                    <MenuItem value={3}>Thuốc trừ sâu</MenuItem>
                    <MenuItem value={4}>Thuốc trừ ốc</MenuItem>
                    <MenuItem value={5}>Thuốc diệt chuột</MenuItem>
                </Select>
            </FormControl>
            <Table className="plant-protection-table">
                <Row className="row">
                    <Cell header className="col col-1">Thời gian</Cell>
                    <Cell header className="col col-2">Tên thuốc</Cell>
                    <Cell header className="col col-3">Số lượng</Cell>
                    <Cell header className="col col-4">Đơn giá</Cell>
                    <Cell header className="col col-5">Thành tiền</Cell>
                    <Cell header className="col col-6">Tình hình sinh trường của lúa</Cell>
                    <Cell header className="col col-7">Hành động</Cell>
                </Row>
                {data}
                <Row className="row">
                    <Cell className="col">
                        <i className="fa-solid fa-plus" onClick={handleClickToAddRow}></i>
                    </Cell>
                </Row>
            </Table>
        </div>
    );
}

export default PlantProtection