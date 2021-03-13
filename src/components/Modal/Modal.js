import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { createPortal } from 'react-dom'; //для создания портала, куда будем рендерить разметку компонента Modal

import './Modal.css';

// для портала. ccылка к корневому элементу в index.html куда будем рендерить разметку компонента Modal.
const modalRoot = document.querySelector('#modal-root');

class Modul extends Component {
  // ЖИЗНЕННЫЕ ЦИКЛЫ
  componentDidMount() {
    //при 1 стадии монтирования вешаем слушателя события на window  для закрытия Модального окна по нажатию на ESC сперва
    window.addEventListener('keydown', this.handleKeydown);
  }

  // на стадии размонтирования и зачистки кода после использования.
  componentWillUnmount() {
    // снимаем слушателя события с window при закрытии Модального окна по нажатию на ESC
    window.removeEventListener('keydown', this.handleKeydown);
  }

  // МЕТОДЫ
  // закрытие Модального окна по нажатию на ESC
  handleKeydown = event => {
    if (event.code === 'Escape') {
      // в props прокидываем toggleModal для возможности закрыть модалку по нажатию на "Escape"
      this.props.onClose();
    }
  };

  // закрытие модалки при клике на backdrop
  onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  // возвращаем результат вызова import { createPortal } from 'react-dom'куда будем рендерить разметку компонента Modal и 1) первым параметром передаем разметку мадального окна; 2) ссылка на корневой элемент в index.html
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onOverlayClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modul.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modul;
