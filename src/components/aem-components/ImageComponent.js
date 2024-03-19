// ComponentFactory.js

import React from 'react';

const ImageComponent = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} />;
};

export default ImageComponent;
