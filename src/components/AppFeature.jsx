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
    // <div className="container">
    // <div className="card-deck">
    //   <div className="card">
    //     <img src="..." className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src="..." className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    //       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //     </div>
    //   </div>
    //   <div className="card">
    //     <img src="..." className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    //       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default AppFeature;