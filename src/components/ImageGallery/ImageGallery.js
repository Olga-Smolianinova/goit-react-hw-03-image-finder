import React, { useState } from 'react';

import PropTypes from 'prop-types';

// Components
import ImageGalleryItem from '../ImageGalleryItem';

import Modal from '../Modal';

import './ImageGallery.css';

export default function ImageGallery({ gallery }) {
  // useState
  const [showModal, setShowModal] = useState(false);
  const [largeSrc, setLargeSrc] = useState('');
  const [imgAlt, setImgAlt] = useState('');

  // Function
  // работа Модального окна. Открытие-закрытие в зависимости от предыдущего значения
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  // открытие модального окна при клике на изображение
  const onImgClick = (largeSrc, imgAlt) => {
    // console.log(largeSrc);
    // console.log(imgAlt);

    toggleModal();

    setLargeSrc(largeSrc);
    setImgAlt(imgAlt);
  };

  return (
    <>
      <ul className="ImageGallery">
        {/* Набор <li> с изображениями */}
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            imgSrc={webformatURL}
            imgAlt={tags}
            largeSrc={largeImageURL}
            onImgClick={onImgClick}
          />
        ))}
      </ul>

      {/* Modal window. Открытие по условию*/}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeSrc} alt={imgAlt} />
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};
