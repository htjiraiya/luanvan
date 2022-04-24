import React from 'react'
import './Table.scss'

interface Prop {
    children?: React.ReactNode,
    className?: string,
    header?: boolean
}

function Table({children, className}: Prop) {
    return (
        <div className={`custom-table ${className}`}>
            {children}
        </div>
    )
}

function Row({children, className}: Prop) {
    return (
        <div className={`custom-row ${className}`}>
            {children}
        </div>
    );
}

function Cell({children, className, header}: Prop) {

    const style: React.CSSProperties = {
        fontWeight: header ? 'bold' : 'normal',
    }

    return (
        <div className={`custom-column ${className}`} style={style}>
            {children}
        </div>
    )
}

export  {
    Table,
    Row,
    Cell
}