import './photo_gallery.css';

import cameraImage from '../assets/images/camera.png';
import cuteCoupleKissImage from '../assets/images/cute_couple_kiss.jpeg';
import galleryPhoto1Image from '../assets/images/gallery_photo_1.jpg';
import galleryPhoto2Image from '../assets/images/gallery_photo_2.jpg';
import galleryPhoto3Image from '../assets/images/gallery_photo_3.jpg';
import galleryPhoto4Image from '../assets/images/gallery_photo_4.jpg';
import galleryPhoto5Image from '../assets/images/gallery_photo_5.jpg';

import { IconArrowBigRight, IconPhotoSensor2 } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StepWrapper from '../components/step-wrapper';

function PhotoGallery({ onClick }: Readonly<{ onClick?: () => void }>) {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const listImages = [
    galleryPhoto1Image,
    galleryPhoto2Image,
    galleryPhoto3Image,
    galleryPhoto4Image,
    galleryPhoto5Image,
    cuteCoupleKissImage,
  ];

  function handleShowImage() {
    if (showImages.length < listImages.length) {
      setShowImages((prev) => [listImages[showImages.length], ...prev]);
    }
    if (showImages.length === listImages.length) {
      setIsComplete(true);
    }
  }

  return (
    <StepWrapper className='photo-gallery'>
      <div className='photo-gallery__wrapper'>
        <h1 className='photo-gallery__title'>Photo Gallery</h1>
        <div className='photo-gallery__camera-wrapper'>
          <img className='photo-gallery__camera' src={cameraImage} alt='camera' />
          <AnimatePresence>
            <motion.button
              key={isComplete ? 'complete' : 'incomplete'}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
              exit={{ opacity: 0 }}
              className='photo-gallery__camera--button'
            >
              {isComplete ? (
                <IconArrowBigRight size={24} onClick={onClick} />
              ) : (
                <IconPhotoSensor2 size={24} onClick={handleShowImage} />
              )}
            </motion.button>
          </AnimatePresence>
        </div>
        <div className='photo-gallery__photo-wrapper'>
          <AnimatePresence>
            {showImages.length > 0 &&
              showImages.map((src) => (
                <motion.img
                  key={src}
                  src={src}
                  className='photo-gallery__photo'
                  initial={{ height: 0, y: -20 }}
                  animate={{ height: 'auto', y: 0 }}
                  exit={{ height: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </StepWrapper>
  );
}

export default PhotoGallery;
