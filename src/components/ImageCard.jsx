import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

const ImageCard = (props) => {
  return (
    <div className={props.cardProps.col}>
      <Card>
        <CardImg top width="100%" src={props.cardProps.img} alt="Card image cap" />
        <CardBody>
          <CardText className='text-muted font-weight-bolder'>{props.cardProps.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;