// import CabinTable from '../features/cabins/CabinTable';
// import Heading from '../ui/Heading';
// import Row from '../ui/Row';
import { useState } from 'react';

import ImageGallery from 'react-image-gallery';

const Sneakers_31 = () => {
  const kobe4Images = [
    {
      type: 'kobe4',
      original: '/kobe4_1.jpg',
      thumbnail: '/kobe4_1.jpg',
      originalHeight: '550px',
      description: 'Gift of Mamba',
    },
    {
      type: 'kobe4',
      original: '/kobe4_2.jpg',
      thumbnail: '/kobe4_2.jpg',
      originalHeight: '550px',
      description: 'Protro Draft Day ',
    },
    {
      type: 'kobe4',
      original: '/kobe4_3.jpg',
      thumbnail: '/kobe4_3.jpg',
      originalHeight: '550px',
      description: 'Los Angeles Lakers',
    },
    {
      type: 'kobe4',
      original: '/kobe4_4.jpg',
      thumbnail: '/kobe4_4.jpg',
      originalHeight: '550px',
      description: 'Protro Del Sol',
    },
    {
      type: 'kobe4',
      original: '/kobe4_5.jpg',
      thumbnail: '/kobe4_5.jpg',
      originalHeight: '550px',
      description: 'Protro Gigi Bryant',
    },
  ];

  const kobe5Images = [
    {
      type: 'kobe5',
      original: '/kobe5_1.jpg',
      thumbnail: '/kobe5_1.jpg',
      originalHeight: '550px',
      description: 'Protro Bruce Lee',
    },
    {
      type: 'kobe5',
      original: '/kobe5_2.jpg',
      thumbnail: '/kobe5_2.jpg',
      originalHeight: '550px',
      description: 'Protro What lf',
    },
    {
      type: 'kobe5',
      original: '/kobe5_3.jpg',
      thumbnail: '/kobe5_3.jpg',
      originalHeight: '550px',
      description: 'Protro What lf',
    },
    {
      type: 'kobe5',
      original: '/kobe5_4.jpg',
      thumbnail: '/kobe5_4.jpg',
      originalHeight: '550px',
      description: 'Protro Bruce Lee',
    },
    {
      type: 'kobe5',
      original: '/kobe5_5.jpg',
      thumbnail: '/kobe5_5.jpg',
      originalHeight: '550px',
      description: 'Protro PJ Tucker',
    },
  ];

  const kobe6Images = [
    {
      type: 'kobe6',
      original: '/kobe6_1.jpg',
      thumbnail: '/kobe6_1.jpg',
      originalHeight: '550px',
      description: 'Reverse Grinch',
    },
    {
      type: 'kobe6',
      original: '/kobe6_2.jpg',
      thumbnail: '/kobe6_2.jpg',
      originalHeight: '550px',
      description: 'Mambacita Sweet 16',
    },
    {
      type: 'kobe6',
      original: '/kobe6_3.jpg',
      thumbnail: '/kobe6_3.jpg',
      originalHeight: '550px',
      description: 'Italian Camo',
    },
    {
      type: 'kobe6',
      original: '/kobe6_4.jpg',
      thumbnail: '/kobe6_4.jpg',
      originalHeight: '550px',
      description: 'Pop White Del Sol',
    },
    {
      type: 'kobe6',
      original: '/kobe6_5.jpg',
      thumbnail: '/kobe6_5.jpg',
      originalHeight: '550px',
      description: 'Protro Grinch',
    },
  ];
  const [activeItem, setActiveItem] = useState('kobe4');
  const [images, setImages] = useState(kobe4Images);

  // const images = kobe6Images;
  const showBtn = false;
  return (
    <>
      <div className="d-flex">
        <div
          className={`d-flex-title ${activeItem === 'kobe4' ? 'active' : ''}`}
          onClick={() => {
            handleClickItem('kobe4');
          }}
        >
          Kobe 4
        </div>
        <div
          className={`d-flex-title ${activeItem === 'kobe5' ? 'active' : ''}`}
          onClick={() => {
            handleClickItem('kobe5');
          }}
        >
          Kobe 5
        </div>
        <div
          className={`d-flex-title ${activeItem === 'kobe6' ? 'active' : ''}`}
          onClick={() => {
            handleClickItem('kobe6');
          }}
        >
          Kobe 6
        </div>
      </div>
      <div style={{ padding: '0px 5rem' }}>
        <ImageGallery items={images} showPlayButton={showBtn} />
      </div>
      {/* <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row> */}
    </>
  );

  function handleClickItem(item) {
    switch (item) {
      case 'kobe4':
        setImages(kobe4Images);
        break;
      case 'kobe5':
        setImages(kobe5Images);
        break;
      case 'kobe6':
        setImages(kobe6Images);
        break;
    }
    setActiveItem(item);
  }
};

export default Sneakers_31;
