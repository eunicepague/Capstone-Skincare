// import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bounce, Slide } from 'react-awesome-reveal';
import Up from './../../../assets/up.png';
import './Return.css';

const Return = () => {
  // for the btn

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.5;
    setIsVisible(window.scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Container>
      <section id="return-content">
        <Row>
          <Col id="return-left" lg={5}>
            <Bounce>
              <h1>Return Policy.</h1>
            </Bounce>
          </Col>
          <Col id="return-right" lg={7}>
            <Slide direction="right">
              <section id="return-right-content">
                <h6>OUR RETURN POLICY</h6>
                <p>
                  We’re sorry to hear that it’s not working out. If you are not
                  satisfied with your purchase made through the DECIEM website
                  or one of our DECIEM retail stores, we are happy to let you
                  know that you can return any unwanted products that are at
                  least 50% full within 365 days (1 year) from the date of
                  purchase as stated on your invoice/receipt
                </p>
                <p>
                  Items purchased as a set (e.g. The Ordinary No-Brainer Set,
                  NIOD Set No. 1) must be returned in full in order to be
                  eligible for a refund. Partial refunds will not be offered.
                  Gift cards cannot be refunded or redeemed for cash except
                  where required by applicable law.
                </p>
                <p>
                  Shipping fees and product(s) listed as Final Sale are
                  non-refundable.
                </p>

                <h6>RETAIL PARTNERS</h6>
                <p>
                  We do not provide refunds or exchanges for products purchased
                  outside of DECIEM (e.g. Sephora, ULTA, ASOS, etc.). You must
                  abide by the return and exchange policies set in place by the
                  authorized retailer you have made your purchase with. Please
                  contact the retailer in question for more details.
                </p>

                <h6>EXCHANGES</h6>
                <p>
                  We do not offer store credit or exchanges at this time.
                  However, if you’re unhappy with one of our products, please
                  review the return instructions below.
                </p>

                <h6>STORE RETURNS</h6>
                <p>
                  You may return unwanted products to any DECIEM retail location
                  within the same country as your original purchase. A receipt
                  or proof of purchase is required to process your refund to
                  your original method of payment. We do not offer store credit
                  or exchanges. We are unable to process your refund without the
                  physical OR electronic copy of your receipt provided to you
                  upon checkout in addition to the original method of payment
                  used.
                </p>
                <p>
                  If you are unable to return to one of our DECIEM Retail Stores
                  you can return the products to one of the DECIEM warehouses
                  noted below. Please be advised, your refund will be issued via
                  PayPal. Our Customer Happiness team will contact you for your
                  PayPal information.
                </p>

                <h6>POP-UP STORE PURCHASES</h6>
                <p>
                  Please do not ship item(s) purchased from any of our DECIEM
                  pop-up shops to our warehouse.
                </p>
                <p>
                  When completing the form, under Warehouse Sent select “Other”.
                  Under “Return Tracking #” input “DECIEM Pop Up” and under
                  “Products Returned'' input the name of the product(s) you are
                  returning. A member of our team will get back to you with the
                  next steps.
                </p>

                <h6>CUSTOMER RESPONSIBILITY</h6>
                <p>
                  Returned products are your responsibility until they arrive at
                  DECIEM.
                </p>
                <p>
                  Though it’s not required, we do recommend purchasing tracking
                  services for your protection and to also hold on to the proof
                  of postage in case you need to contact us about your return.
                  Only products received by our warehouse can be credited.
                </p>
                <p>
                  If we cannot locate your order number, we are unable to
                  process the refund. We encourage you to be mindful of what is
                  being sent to us as any products incorrectly sent back cannot
                  be credited and will not be sent back to you.
                </p>
                <p>
                  DECIEM does not incur the cost of return tracking or postage.
                </p>

                <h6>REFUNDS</h6>
                <p>
                  We aim to refund you within 12 business days of the product
                  being returned to DECIEM, however, these times may be impacted
                  during high volume periods.
                </p>
                <p>
                  <strong>
                    All returns will be credited to the original method of
                    payment.{' '}
                  </strong>
                  We cannot process your refund to an alternative card. The
                  refund will be issued upon processing of the returned
                  product(s). You will receive an email notification upon
                  completion of return processing.
                </p>

                <h6>FAIR USE</h6>
                <p>
                  If we notice an abnormal pattern of return activity or
                  behaviour then we may connect with you about your returns.
                </p>
                <p>
                  Any abuse of the return policy can result in the suspension of
                  the account and any associated accounts. If this has happened
                  to you, and you think we’ve made a mistake, contact our
                  Customer Happiness team and we’ll be happy to review it with
                  you. If your account has been suspended and you need to make a
                  return, contact our Customer Happiness team before sending any
                  products back.
                </p>
                <p>
                  DECIEM maintains the right to determine, in its sole and
                  absolute discretion, whether you are entitled to a refund and,
                  if so, the amount of the refund you are eligible to receive.
                  DECIEM reserves the right, in its sole and absolute
                  discretion, to refuse to provide a refund or accept your Order
                  for any reason – including, but not limited to, if we deem
                  your Order to be suspicious or fraudulent in any way.
                </p>
              </section>
            </Slide>
          </Col>
        </Row>
      </section>

      <div
        id="faqs-upBtn"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <img src={Up} onClick={scrollToTop}></img>
      </div>
    </Container>
  );
};

export default Return;
