import React, { FC } from 'react';
import { Form, Input } from 'reactstrap';
import { formatDollars } from '../../../util/format';

type Props = {
    weight?: number;
    price: number;
    onChangeWeight: (weight?: number) => void;
};

export const CheeseCalculator: FC<Props> = ({weight, price, onChangeWeight}) => {
    return (
        <Form inline>
            <Input style={{width: '5rem'}} type="number" min="0" value={weight} onChange={
                event => onChangeWeight(parseFloat(event.target.value) || undefined)
            }/>
            <span className="ml-1 align-middle">kg = {formatDollars((weight || 0) * price)}</span>
        </Form>
    );
};
