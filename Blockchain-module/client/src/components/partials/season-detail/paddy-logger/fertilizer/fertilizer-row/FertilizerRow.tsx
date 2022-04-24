import React from 'react'
import { Cell, Row } from '../../../../features/table/Table'
import './FertilizerRow.scss'
import $ from 'jquery'

interface Props {
    className?: string,
    isEdit?: boolean
    id?: string | number 
}

function FertilizerRow({className, id, isEdit}:Props) {

    const [isEditContent, setIsEditContent] = React.useState(isEdit || false)

    const handleClickToEdit = (e: React.MouseEvent<HTMLElement>) => {
        setIsEditContent(true)
    }

    const handleClickToSave = (e: React.MouseEvent) => {
        setIsEditContent(false)
    }

    React.useEffect(()=> {
        if(isEditContent) {
            $(`.${id}`).attr('contentEditable', 'true')
            $(`.${id}`).addClass('active-field')  
        }else{
            $(`.${id}`).attr('contentEditable', 'false')
            $(`.${id}`).removeClass('active-field')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditContent])


    return (
        <Row className="row">
            <Cell className="col col-1">
                <p className={ id as string}></p>
            </Cell>
            <Cell className="col col-2">
                <p className={ id as string}></p>
            </Cell>
            <Cell className="col col-3">
                <p className={ id as string}></p>
            </Cell>
            <Cell className="col col-4">
                <p className={ id as string}></p>
            </Cell>
            <Cell className="col col-5">
                <p className={ id as string}></p>
            </Cell>
            <Cell className="col col-6">
                <p className={id as string}></p>
            </Cell>
            <Cell className="col col-7">
                <i className="fa-solid fa-pen" onClick={handleClickToEdit}></i>
                <i className="fa-solid fa-floppy-disk" onClick={handleClickToSave}></i>
            </Cell>
        </Row>
    );
}

export default FertilizerRow;