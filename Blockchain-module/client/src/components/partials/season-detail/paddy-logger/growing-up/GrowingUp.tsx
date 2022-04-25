import React from 'react'
import { Cell, Table, Row } from '../../../features/table/Table'
import GrowingUpRow from './growing-up-row/GrowingUpRow';
import './GrowingUp.scss'


function GrowingUp() {

    const [growingUps, setGrowingsUps] = React.useState<number[]>([])

    const handleClickToAddRow = () => {
        let arr = growingUps
        arr.push(growingUps.length + 1)
        setGrowingsUps([...arr])
    }

    const data = growingUps.map((value, index)=> {
        return (
            <GrowingUpRow id={`fertilizer-${value}`} key={index}></GrowingUpRow>
        )
    })

    return (
        <div className="growing-up">
            <div className="growing-up-title">
                <p>Tình hình phát triển của lúa</p>
            </div>
            <Table className="growing-up-table">
                <Row className="row">
                    <Cell header className="col col-1">Thời gian</Cell>
                    <Cell header className="col col-2">Giai đoạn phát triển của lúa</Cell>
                    <Cell header className="col col-3">Tình hình chung</Cell>
                    <Cell header className="col col-4">Nhận xét</Cell>
                    <Cell header className="col col-5">Ghi chú</Cell>
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

export default GrowingUp