import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'We create great commercial quality photos in any setting ! Boost your business traffic by having incredible photography shots.'
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'CAPTURE ANY SETTING !!!'
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'We also specialize in exterior quality photos.'
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Your restuarnt needs a saavy menu with great photos. We can do it for you.'
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'make in brighht and capture the essence and mood of any environment by hiring us to do the work. Just kick back, and we do the rest for you.'
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description:
        'CATS ARE A MUST... CAPTURE PHOTOS OF YOUR ENTIRE FAMILY.'
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description:
        'TAKE PICTURES OF ME !! I SING LOUD.'
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description:
        'WE LOVE ANIMALS, AND YOU CAN KEEP MEMORIES IN THE HOUSE WITH A GREAT PICTURE OF THE BUNCH.'
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description:
      'WE LOVE DOOGIES'
                  },
    {
      name: 'Pancakes',
      category: 'food',
      description:
      'FOOD ALL THE WAY'  
    },
    {
      name: 'Burrito',
      category: 'food',
      description:
        'MEXICAN FOOD IS FUN !'
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description:
        'SEE THE FOOD, IT IS EVERYWHERE'
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'BURGERS ARE THE BEST ADD CHEESE'
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Fruit for everyone is a healthy choice.'
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Landscape is something to capture frame, and decorate your space.'
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'We take pictures of everything.'
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'TAKE PICTURES BY THE OCEAN.'
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'THE EARTH IS YOURS'
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'HAVE FUN WHEREVER YOU GO. WE CAPTURE YOUR MEMORY.'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
