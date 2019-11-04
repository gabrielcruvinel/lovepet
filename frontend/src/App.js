import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header';
import Routes from  './routes';
import './config/ReactotronConfig';
import './styles.css';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/global';

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (

    <div className="App">
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </div>
)

export default App;
