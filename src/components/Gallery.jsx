import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const src = [
  "https://verduraphx.com/wp-content/uploads/2019/02/chickpea-chana.jpg",
  "https://verduraphx.com/wp-content/uploads/2019/02/goth-waffles.jpg",
  "https://verduraphx.com/wp-content/uploads/2019/02/poboy.jpg"
]
const images = src.map(f => ({source: f}))

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const toggleLightbox = (j) => {
    setLightboxIsOpen(!lightboxIsOpen);
    setSelectedIndex(j);
  };

  return (
    <div className="main-content">
      {src.map((f, j) => (
        <div key={f} className="image-grid" onClick={() =>  toggleLightbox(j)}>
          <img className="image" src={f} alt={f} />
        </div>
      ))}

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Gallery
