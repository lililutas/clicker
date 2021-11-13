import React from 'react'
export const Header = (props) => {

    return (
        <div className="header">
            <h1>Сахар: {props.sugar}</h1>
            <h1>Сахара в секунду: {props.cps}</h1>
        </div>
    )
}
