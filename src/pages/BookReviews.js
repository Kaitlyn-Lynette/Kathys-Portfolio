import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookReviews = () => {
  return (
    <div id="bookreviews">
      <Header />
      <Container>
        <Row>
            <Col>
            <h3>Book Reviews</h3>
            </Col>
            <Col>
            <Row className="rwc-reviews">
          <Col>
            <p>Goodreads Book Reviews</p>
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
        </Row> 
            
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookReviews;
