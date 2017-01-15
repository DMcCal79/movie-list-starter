import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LongProfile from './LongProfile'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Match, Miss } from 'react-router';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='router'>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/movie/:id" component={LongProfile} />
        <Miss render={() => <h2>Not found!</h2>} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
