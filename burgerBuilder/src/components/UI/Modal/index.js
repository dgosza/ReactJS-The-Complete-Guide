import React from 'react';
import './style.css'

import Aux from '../../../hoc/Auxiliar'
import Backdrop from '../Backdrop'

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} />
        <div
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-1000vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default Modal;