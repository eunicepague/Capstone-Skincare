import { Container, Card } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './Sec3.css';
import axios from './../../../axios';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Sec3 = () => {
  const containerRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getCatgories = async () => {
    try {
      const response = await axios.get('/category');
      setCategories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  const filterByCategory = async (id) => {
    navigate(`/products?category=${id}`);
  };

  useEffect(() => {
    getCatgories();
  }, []);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 500;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };
  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 500;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <h1 id="sec3-greetings">SHOP BY CATEGORY</h1>
      <Container id="sec3-box">
        <button
          className="d-none d-lg-flex"
          id="sec3-left-button"
          onClick={scrollLeft}
        >
          <box-icon name="left-arrow" style={{ width: '2rem' }}>
            Left
          </box-icon>
        </button>
        <div
          id="sec3-container"
          className="scrollable-container"
          ref={containerRef}
        >
          <div className="scrollable-content d-flex">
            <Fade>
              {categories.map((item) => (
                <Card key={item.id} id="sec3-card" className="mx-2">
                  <Card.Img
                    onClick={() => filterByCategory(item.id)}
                    variant="top"
                    id="sec3-card-img"
                    src={`/category/${item.name}.jpg`}
                  />
                  <Card.Body id="sec3-card-body">
                    <Card.Text
                      style={{ textAlign: 'center', fontWeight: 'bold' }}
                    >
                      {item.name}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Fade>
          </div>
        </div>
        <button
          className="d-none d-lg-flex"
          id="sec3-right-button"
          onClick={scrollRight}
        >
          <box-icon name="right-arrow">Left</box-icon>
        </button>
      </Container>
    </>
  );
};

export default Sec3;
