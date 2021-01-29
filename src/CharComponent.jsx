import React from 'react'
import './charComponent.css'

const CharComponent = (props) => {
    return (
        <div className="Charstyle" onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default CharComponent
