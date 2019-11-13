import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Footer from './component/footer'
// import Form from './component/form'
import Body from './component/body'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <Header />
    <Body />
    <br />
     <Footer />
    </div>
  );
}

export default App;

