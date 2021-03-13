import React from 'react';

import PropTypes from 'prop-types';

import './ImageGalleryItem.css';

import defaultImg from '../images/default.jpg';

const ImageGalleryItem = ({ imgSrc, imgAlt, largeSrc, onImgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={imgSrc}
        alt={imgAlt}
        // width="320"
        className="ImageGalleryItem-image"
        onClick={() => {
          onImgClick(largeSrc, imgAlt);
        }}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  imgSrc: defaultImg,
  largeSrc: defaultImg,
};

ImageGalleryItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  largeSrc: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
