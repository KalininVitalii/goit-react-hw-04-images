import { useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({ onCloseModal, image, tags }) => {

  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onCloseModal]);

  const handleModal = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

    return(
      <div className={s.overlay}onClick={handleModal}>
        <div className={s.modal}>
          <img className={s.img} src={image} alt={tags} width="980"/>
        </div>
      </div>
    )
  }
