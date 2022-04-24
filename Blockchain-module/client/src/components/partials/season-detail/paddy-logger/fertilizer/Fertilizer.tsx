import React from 'react'
import { Table, Row, Cell } from '../../../features/table/Table'
import FertilizerRow from './fertilizer-row/FertilizerRow'
import './Fertilizer.scss'
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

function Fertilizer() {

    const [fertilizer, setFertilizer] = React.useState('')
    const [fertilizers, setFertilizers] = React.useState<number[]>([])


    const handleChange = (e: SelectChangeEvent) => {
        setFertilizer(e.target.value)
    }

    const handleClickToAddRow = () => {
        let arr = fertilizers
        arr.push(fertilizers.length + 1)
        setFertilizers([...arr])
    }

    const data = fertilizers.map((value, index)=> {
        return (
            <FertilizerRow id={`fertilizer-${value}`} key={index}></FertilizerRow>
        )
    })

    return (
        <div className="paddy-fertilizer">
            <div className="paddy-fertilizer-title">
                <p>Phân Bón</p>
            </div>
            <FormControl className='paddy-fertilizer-select-form'>
                <InputLabel id="demo-simple-select-label" className='select-label'>Bón Phân</InputLabel>
                <Select
                    className="paddy-fertilizer-select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fertilizer}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Phân bón lót</MenuItem>
                    <MenuItem value={2}>Phân bón đợt 1</MenuItem>
                    <MenuItem value={3}>Phân bón đợt 2</MenuItem>
                    <MenuItem value={4}>Phân bón đợt 3</MenuItem>
                    <MenuItem value={5}>Phân bón đợt 4</MenuItem>
                    <MenuItem value={6}>Thuốc dưỡng, vi sinh</MenuItem>
                </Select>
            </FormControl>
            <Table className="paddy-fertilizer-table">
                <Row className="row">
                    <Cell header className="col col-1">Thời gian</Cell>
                    <Cell header className="col col-2">Tên phân bón</Cell>
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
    )
}

export default Fertilizer