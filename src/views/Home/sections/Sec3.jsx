import { Container, Card } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
// import Moisturizer from "./../../../assets/moisturizer.jpg";
// import Exfoliants from "./../../../assets/exfoliants.jpg";
// import EyeSerums from "./../../../assets/eyeserum.jpg";
// import Cleansers from "./../../../assets/cleansers.jpg";
// import VitaminC from "./../../../assets/vitaminc.jpg";
// import Peptides from "./../../../assets/peptides.jpg";
// import Retinoids from "./../../../assets/retinoids.jpg";
// import Hydrators from "./../../../assets/hydrators.jpg";
import './Sec3.css';
// import axios from "axios";
import axios from './../../../axios';
import { useNavigate, Link } from 'react-router-dom';

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
    // When the component mounts, load categories
    getCatgories();
  }, []);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 500; // Adjust the scrolling amount as needed
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
        <button id="sec3-left-button" onClick={scrollLeft}>
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
            {categories.map((item) => (
              <Card key={item.id} id="sec3-card" className="mx-2">
                <Card.Img
                  onClick={() => filterByCategory(item.id)}
                  variant="top"
                  id="sec3-card-img"
                  src={`/src/assets/category/${item.name}.jpg`}
                />
                <Card.Body id="sec3-card-body">
                  <Card.Text style={{ textAlign: 'center' }}>
                    {item.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <button id="sec3-right-button" onClick={scrollRight}>
          <box-icon name="right-arrow">Left</box-icon>
        </button>
      </Container>
    </>
  );
};

export default Sec3;
