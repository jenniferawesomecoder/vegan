import React from 'react'

const src = [
  "https://verduraphx.com/wp-content/uploads/2019/02/chickpea-chana.jpg",
  "https://verduraphx.com/wp-content/uploads/2019/02/goth-waffles.jpg",
  "https://verduraphx.com/wp-content/uploads/2019/02/poboy.jpg"
]

const Gallery = () => {
  return (
    <div className="main-content">
      {src.map(f => (
        <div key={f} className="image-grid">
          <img className="image" src={f} alt={f} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
