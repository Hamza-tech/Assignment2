import React from 'react'

const ValidationComponent = (props) => {
    if(props.length<5&& props.length>1){
        return <h2>too short</h2>
    }
    else if(props.length>20){
        return <h2>text is too Long</h2>
    }

    

    return (
        <div>
            <h1>the lenght of the string is {props.length}</h1>
            <div>
                {/* {props.length<5 ? <h1>too short</h1>: null} */}
                {props.length>20? <h1>too long</h1>: null}
            </div>
        </div>
    )
}
export default ValidationComponent
