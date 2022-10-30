import {  useState, useEffect  } from 'react';

import { NewsApiService } from '../Services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App = () => {

  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchGallery = () => {
      setIsLoading(true);
      setError(null);
  
      NewsApiService(query, page)
        .then(response => {
          if (response.data.hits.length === 0) {
            alert('Nothing was found');
            return;
          }
          setGallery(prevGallery => [...prevGallery, ...response.data.hits]);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
        fetchGallery();
  }, [query, page])
    
        useEffect(() => {
    },[error]);
    const onSubmit = queryUpdate => {
      if (query === queryUpdate) {
        alert('Write something new');
        return;
      }
      setQuery(queryUpdate);
      setGallery([]);
      setPage(1);
    };

    const loadMore = () => {
      setPage(prevPage => prevPage + 1);
    };

    const onModalOpen = (imageLarge, tags) => {
      setImage(imageLarge);
      setTags(tags);
    };

    const onCloseModal = () => {
      setImage(null);
      setTags(null);
    };

    return (
      <div>
        <Searchbar onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {gallery.length > 0 && (
          <>
            <ImageGallery gallery={gallery} onModalOpen={onModalOpen} />
            <Button loadMore={loadMore} />
          </>
        )}
        {image && (
          <Modal image={image} tags={tags} onCloseModal={onCloseModal} />
        )}
      </div>
    );
}
