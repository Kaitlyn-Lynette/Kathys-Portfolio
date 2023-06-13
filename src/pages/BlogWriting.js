import { Link } from "react-router-dom";
import { motion, AnimatePresence  } from 'framer-motion/dist/framer-motion';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const BlogWriting = () => {
  return (
    <div id="blogwriting">
      <Container>
        <Row>
          <Col className="port-pagetitle" md={12}>
            <h1> Blog Writing</h1>
          </Col>
        </Row>
        <Row className="blog-photo-grid">
          <Col xs={6} md={4}>
            <Link
              to={{
                pathname:
                  "https://www.tomyunderstanding.net/2021/05/loving-on-shy-people-around-us.html",
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_1.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>

          {/* Blog Photo 2 */}

          <Col className="photo-col" xs={6} md={4}>
            <Link
              to={{
                pathname:
                  "https://www.tomyunderstanding.net/2023/01/my-year-of-reading-2022.html",
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_2.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>

          {/* Blog Photo 3 */}

          <Col xs={6} md={4}>
          <Link
              to={{
                pathname:
                  "https://www.tomyunderstanding.net/2021/12/inspire-series-witness-inspiration.html",
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_3.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>

          {/* Blog Photo 4 */}

          <Col className="photo-col" xs={6} md={4}>
            <Link
              to={{
                pathname:
                  "https://www.tomyunderstanding.net/2021/04/best-lines-and-lessons-from-little-women.html",
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_4.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>

          {/* Blog Photo 5 */}

          <Col xs={6} md={4}>
            <Link
              to={{
                pathname:
                   "https://www.tomyunderstanding.net/2022/08/plenty-of-opportunities-for-good.html" ,
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_5.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>

          {/* Blog Photo 6  */}

          <Col className="photo-col" xs={6} md={4}>
            <Link
              to={{
                pathname:
                  "https://www.tomyunderstanding.net/2022/06/a-holy-patience.html",
              }}
              target="_blank"
            >
              <AnimatePresence>
              <motion.img 
              className="blog-photo" 
              src="/images/blog_6.jpg"
              whileHover={{scale: 1.1}}
              ></motion.img>
              </AnimatePresence>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogWriting;
