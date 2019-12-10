import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Container>
                Testing!
            </Container>
        </Provider>
    );
};

export default App;
