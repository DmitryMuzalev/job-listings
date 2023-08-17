import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Context } from './hoc/ContextApp';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Header />
      <Container>
        <App />
      </Container>
    </Context>
  </React.StrictMode>
);
