import React from 'react';
import { CardDeck } from 'reactstrap';
import ImageCard from './ImageCard';
import booksSvg from '../images/books.svg';
import rateSvg from '../images/rate.svg';
import reviewSvg from '../images/review.svg';


const AppFeature = () => {
  let features = [
    { text: 'One source for quick insight to books, ratings and reviews.', img: booksSvg, col: 'col'},
    { text: 'Rate books and get your best books read by others.', img: rateSvg, col: 'col'},
    { text: 'One source for quick insight to books, ratings and reviews.', img: reviewSvg, col: 'col'},
  ];

  return (
    <div className='container'>
      <CardDeck>
        { features.map((feature, index) => <ImageCard key={index} cardProps={feature} />) }
      </CardDeck>
    </div>
  )
}

export default AppFeature;