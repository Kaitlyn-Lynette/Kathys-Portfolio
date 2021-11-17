import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Header from "../components/Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas)

const BookReviews = () => {
  return (
    <div id="bookreviews">
      <Header />
      <Container>
        <Row className="book-rws">
          <Col md={12}>
            <h3>Book Reviews</h3>
          </Col>
          <Col className = "book-rws-list" md={12}>
            <ul>
              <li>
                <a href="https://www.goodreads.com/review/show/4250409189">
                  Les Miserables
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4251595447">
                  Almost a Woman
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4153176573">
                  Thanks for Waiting
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4214911069">
                  Bookishness
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/4153242331">
                  The Four Winds
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3504780008">
                  Like Water for Chocolate
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3982757466">
                  Little Women
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3586990699">
                  The Guernsey Literary and Potato Peel Pie Society
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3535543299">
                  The Undocumented Americans
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/review/show/3146657265">
                  Small Fry
                </a>
              </li>
            </ul>
          </Col>
        <Col md={{ span: 3, offset: 9 }} >
          <Link 
          to={{pathname: "https://www.goodreads.com/user/show/33141645-katherine-perez-tmu"}}
          target="_blank"
          >
           <p>See more <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xs" style={{verticalAlign: "middle"}} /></p>
          </Link>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookReviews;
