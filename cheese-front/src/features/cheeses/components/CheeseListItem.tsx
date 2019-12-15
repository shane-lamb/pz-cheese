import React, { Fragment, memo } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, CardTitle, Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import { Cheese } from '../../../models/Cheese';
import { CheeseCalculatorState } from '../../../models/CheeseCalculatorState';
import { selectCheeseWeight, toggleCheeseCalculator } from '../actions';
import { CheeseCalculator } from './CheeseCalculator';
import { formatDollars } from '../../../util/format';

const dispatchProps = {
    toggleCalc: toggleCheeseCalculator,
    selectWeight: selectCheeseWeight
};
type Props = typeof dispatchProps & {
    cheese: Cheese;
    calc: CheeseCalculatorState
};

export const component = memo<Props>(({cheese, calc, toggleCalc, selectWeight}) => {
    const cheeseId = cheese.id;
    const tooltipId = 'calcTooltip' + cheeseId;
    return (
        <Card>
            <CardImg top width="100%" src={cheese.imageUrl} alt={cheese.name}/>
            <CardBody>
                <CardTitle>{cheese.name}</CardTitle>
                {row('Colour', cheese.color)}
                {row(
                    'Price',
                    <Fragment>
                        <span className="align-middle mr-2">
                            {formatDollars(cheese.pricePerKilo)} per kg
                        </span>
                        <Button color="info" id={tooltipId} onClick={() => toggleCalc({cheeseId})}>
                            <FontAwesomeIcon icon={faCalculator} />
                        </Button>
                        <UncontrolledTooltip placement="top" target={tooltipId}>
                            Weight calculator
                        </UncontrolledTooltip>
                    </Fragment>
                )}
                {
                    calc && calc.visible &&
                    <CheeseCalculator
                        weight={calc.selectedWeight}
                        price={cheese.pricePerKilo}
                        onChangeWeight={weight => selectWeight({cheeseId, weight})}
                    />
                }
            </CardBody>
        </Card>
    );
});

const row = (prop: string, value: any) => (
    <Row>
        <Col xs={4} className="text-muted my-auto">{prop}</Col>
        <Col xs={8}>{value}</Col>
    </Row>
);

export const CheeseListItem = connect(
    null,
    dispatchProps
)(component);
