// Core
import React, { Component } from 'react';
// Components
import ModalView from './ModalView';


class MenuAdd extends Component {
    state = {
        isOpenModalAddOrder: false,
    };

    componentDidMount() {

    }

    handlePostItem = e => {
        e.preventDefault();
    };
    handleOpenModalAddOrder = () => { this.setState({ isOpenModalAddOrder: true });};
    handleCloseModalAddOrder = () => {this.setState({ isOpenModalAddOrder: false });};

  render() {
    const { isOpenModalAddOrder } = this.state;
    return (
      <>
        <div>
            {isOpenModalAddOrder && <ModalView /> }
            <button type="submit" onClick={this.handleOpenModalAddOrder}>Добавить</button>
        </div>
      </>
    );
  }
}

export default MenuAdd;