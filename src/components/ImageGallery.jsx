function ImageGallery({ images, alt }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={`${image}-${index}`} className={`gallery-item gallery-${index + 1}`}>
          <img src={image} alt={`${alt} ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
