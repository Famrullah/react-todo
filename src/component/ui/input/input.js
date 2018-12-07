import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const input = ( props ) => {
    let inputElement = null;
    let icon = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className="inputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            icon = <FontAwesomeIcon icon="arrow-down" className="icon"/>
            inputElement = (
                <select
                    className="selectElement"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className="inputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
// console.log(inputElement.props.children)
    return (
        <div className='formblock'>
            {inputElement}
            {icon}
        </div>
    );

};

export default input;