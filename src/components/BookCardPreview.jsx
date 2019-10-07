import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, CardFooter, Button } from 'reactstrap';
import starSvg from '../images/star.svg';


const BookCard = (props) => {
  const { book, onClick } = props;
  return (
    <div className="col-sm-3 col-md-4">
      <Card>
        <CardImg top width='100%' src={book.image} alt={book.title} />
        <CardBody>
          <CardTitle tag='h4'>{book.title}</CardTitle>
          <CardText>{book.author}</CardText>
          <CardText>
            <small className='text-muted'>{book.publisher}</small>
          </CardText>
          <Button onClick={onClick} id={book.id} block color='danger'>Delete Book</Button>
        </CardBody>
        <CardFooter className='text-center'>
          {[1,2,3,4,5].map(x => <img src={starSvg} key={x} alt='star'/>)}
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;