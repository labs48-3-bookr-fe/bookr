import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Books from './pages/Books';
import Book from './pages/Book';
import PrivateRoute from './components/PrivateRoute';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" render={
            (props) => (
                <HomePage />
            )} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact component={Books} path='/books' />
          <PrivateRoute exact component={Book} path='/books/:id' />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
