import React from 'react';

import Layout from './components/Layout'
import BurgerBuilder from './containers/BurgerBuilder'
class App extends React.Component {

    render() {
        return (
            <Layout>
                <BurgerBuilder/>
            </Layout>
        );
    }
}

export default App;
