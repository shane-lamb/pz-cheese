import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { Col, Row } from 'reactstrap';

import { CheeseListItem } from './CheeseListItem';

const mapStateToProps = (state: RootState) => state.cheeses;

type Props = ReturnType<typeof mapStateToProps>;

const component: React.FC<Props> = ({cheeses}) => {
    if (!cheeses.length) {
        return <p style={{textAlign: 'center'}}>Loading cheeses...</p>;
    }

    return (
        <Row xs="1" md="2" lg="3">
            {cheeses.map(cheese => (
                <Col key={cheese.id} style={{ marginBottom: '30px' }}>
                    <CheeseListItem cheese={cheese}/>
                </Col>
            ))}
        </Row>
    );
};

export const CheeseList = connect(
    mapStateToProps
)(component);
