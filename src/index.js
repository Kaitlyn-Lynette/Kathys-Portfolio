import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FeaturedWork from './pages/FeaturedWork';
import ReadWithCoffee from './pages/ReadWithCoffee'
import BookReviews from './pages/BookReviews';
// import Navigation from "../src/components/Navigation";

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/portfolio" component={FeaturedWork} />
        <Route path="/readwithcoffee" component={ReadWithCoffee}/>
        <Route path="/bookreviews" component={BookReviews}/>
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
