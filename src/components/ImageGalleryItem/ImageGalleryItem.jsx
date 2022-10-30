
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, image, tags,largeImageURL,onModalOpen}) => {
  return (
    <li key={id} onClick={()=>onModalOpen(largeImageURL)}>
      <img
        className={style.image}
        src={image}
        alt={tags}
      />
    </li>
  );
};

