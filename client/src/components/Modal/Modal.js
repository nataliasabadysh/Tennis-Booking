import React, { Component, createRef } from "react";

export default class Modal extends Component{

    backdropRef = createRef();

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress = e =>{
        if(e.code !== 'Escape') return;
        this.props.onClose();
    };
    handelBackdropClick = e =>{
        if(e.target!== this.backdropRef.current) return;
        this.props.onClose();
    };

    render() {
        return(
            <div className='Backdrop' ref={this.backdropRef} onClick={this.handelBackdropClick}>
                <div className='ModalWindow'>
                    {this.props.children}
                </div>
            </div>
        )
    }

}