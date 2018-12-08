import React from 'react';
import Aux from '../../hoc/aux'
import Backdrop from '../backdrop/backdrop'
import './_modals.scss'

const modals =(props)=>(
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className="modals"
        style={{ 
            transform:props.show?'translateY(0)':'translateY(-100vh)',
            opacity:props.show ? '1':'0'
        }}>
            {props.children}
        </div>
    </Aux>
)

export default modals;