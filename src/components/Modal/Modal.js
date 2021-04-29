import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { createPortal } from 'react-dom'; //для создания портала, куда будем рендерить разметку компонента Modal

import './Modal.css';

// для портала. ccылка к корневому элементу в index.html куда будем рендерить разметку компонента Modal.
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  // useEffect
  useEffect(() => {
    // закрытие Модального окна по нажатию на ESC
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        // в props прокидываем toggleModal для возможности закрыть модалку по нажатию на "Escape"
        onClose();
      }
    };

    //при 1 рендере (аналог cdm)  вешаем слушателя события на window  для закрытия Модального окна по нажатию на ESC сперва
    window.addEventListener('keydown', handleKeydown);

    //при последнем рендере (аналог cwu снимаем слушателя события с window при закрытии Модального окна по нажатию на ESC

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  // Function

  // закрытие модалки при клике на backdrop
  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // возвращаем результат вызова import { createPortal } from 'react-dom'куда будем рендерить разметку компонента Modal и 1) первым параметром передаем разметку мадального окна; 2) ссылка на корневой элемент в index.html

  return createPortal(
    <div className="Overlay" onClick={onOverlayClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
