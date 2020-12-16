import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todo from './Todo/Todo';
import User from './User/UserManager'


ReactDOM.render(
  <React.StrictMode>
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
);
