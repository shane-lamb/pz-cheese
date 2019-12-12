import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';
import { CheeseList } from './features/cheeses/components/CheeseList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Container>
                <h1>PZ Cheeseria</h1>
                <CheeseList/>
            </Container>
        </Provider>
    );
};

export default App;
