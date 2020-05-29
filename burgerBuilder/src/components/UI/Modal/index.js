import React from 'react';
import './style.css'

import Aux from '../../../hoc/Auxiliar'
import Backdrop from '../Backdrop'

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        //Se o estado antigo for diferente do que o atual, entao atualiza.
        if (nextProps.show !== this.props.show) {
            return true
        }
    }

    componentDidUpdate(){
        console.log('[modal] componentDidUpdate')
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-1000vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Modal;