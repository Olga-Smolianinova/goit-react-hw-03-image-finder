import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Components
import ImageGalleryItem from '../ImageGalleryItem';

import Modal from '../Modal';

import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    showModal: false, // для Модального окна
    largeSrc: '',
    imgAlt: '',
  };
  // Методы
  // работа Модального окна. Открытие-закрытие в зависимости от предыдущего значения
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // открытие модального окна при клике на изображение
  onImgClick = (largeSrc, imgAlt) => {
    // console.log(largeSrc);
    // console.log(imgAlt);

    this.toggleModal();

    this.setState({ largeSrc, imgAlt });
  };

  render() {
    const { gallery } = this.props;

    const { showModal, largeSrc, imgAlt } = this.state;

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
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>

        {/* Modal window. Открытие по условию*/}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeSrc} alt={imgAlt} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
