import React, { Fragment } from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import AppFeature from '../components/AppFeature';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Jumbotron />
      <AppFeature />
      <Footer />
    </Fragment>
  )
}

export default Home;