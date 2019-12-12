import React from 'react';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';

import { Cheese } from '../../../models/Cheese';

type Props = {
    cheese: Cheese;
};

export const CheeseListItem = React.memo<Props>(({cheese}) => {
    return (
        <Card>
            <CardImg top width="100%" src={cheese.ImageUrl} alt={cheese.Name}/>
            <CardBody>
                <CardTitle>{cheese.Name}</CardTitle>
                {row('Colour', cheese.Color)}
                {row('Price', `$${cheese.PricePerKilo.toFixed(2)} per kg`)}
            </CardBody>
        </Card>
    );
});

const row = (prop: string, value: string) => (
    <Row>
        <Col xs={4} className="text-muted">{prop}</Col>
        <Col xs={8}>{value}</Col>
    </Row>
);
