import style from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'


export const ImageGallery = ({ gallery, onModalOpen }) => {
  return (
    <ul className={style.imageGallery} >
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          largeImage={largeImageURL}
          onModalOpen={onModalOpen}
          tags = {tags}
        />
      ))}
    </ul>
  );
};
