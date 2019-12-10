import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders element', () => {
    const {getByText} = render(<App/>);
    const el = getByText(/Testing!/i);
    expect(el).toBeInTheDocument();
});
