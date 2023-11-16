import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { useState, useRef } from 'react';
import Up from './../../assets/up.png';
import './Faqs.css';

const Faqs = () => {
  const contactRef = useRef(null);
  const orderInquiryRef = useRef(null);
  const shippingDeliveryRef = useRef(null);
  const billingPaymentRef = useRef(null);
  const returnRef = useRef(null);
  const technicalOtherRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -100;
    const elementPosition =
      ref?.current?.getBoundingClientRect().top + window.scrollY;

    if (elementPosition !== undefined) {
      window.scrollTo({ top: elementPosition + yOffset, behavior: 'smooth' });
    }
  };

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
      <section id="faqs-content">
        <Row>
          <Col id="faqs-title">
            <h1 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>FAQ.</h1>
            <p onClick={() => scrollToSection(contactRef)}>Contact</p>
            <p onClick={() => scrollToSection(orderInquiryRef)}>
              Order Inquiry
            </p>
            <p onClick={() => scrollToSection(shippingDeliveryRef)}>
              Shipping + Delivery
            </p>
            <p onClick={() => scrollToSection(billingPaymentRef)}>
              Billing + Payments
            </p>
            <p onClick={() => scrollToSection(returnRef)}>Returns</p>
            <p onClick={() => scrollToSection(technicalOtherRef)}>
              Technical + Other
            </p>
          </Col>

          <Col id="faqs-accordion">
            {/* --- CONTACT --- */}
            <h6 ref={contactRef}>CONTACT</h6>
            <Accordion flush>
              <Accordion.Item eventKey="contact">
                <Accordion.Header>
                  <p> When can I expect a response to my email?</p>
                </Accordion.Header>
                <Accordion.Body>
                  Our team is working very hard but we are experiencing very
                  rapid growth at this time. While we are expanding our
                  resources, our aim is to respond to all inquiries within 48
                  hours. Please note that our response times may vary during
                  peak periods such as after product launches or promotions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p> Can I place an order over the phone?</p>
                </Accordion.Header>
                <Accordion.Body>
                  For better security, we are unable to process any orders
                  and/or accept payments over the phone. Our Customer Happiness
                  team will gladly walk you through the process if you need any
                  help placing your order online. To reach our team, please
                  visit our contact page to submit your inquiry or give us a
                  call.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* --- ORDER INQUIRIES */}
            <h6 ref={orderInquiryRef}>ORDER INQUIRIES </h6>
            <Accordion flush>
              <Accordion.Item eventKey="orderInquiry">
                <Accordion.Header>
                  <p>Can I cancel my order?</p>
                </Accordion.Header>
                <Accordion.Body style={{ whiteSpace: 'pre-line' }}>
                  We kindly ask that you review your order carefully before
                  placing it to ensure that all information and the contents of
                  your order are correct. Please be advised that once an order
                  is placed, it cannot be modified.
                  {'\n'}
                  {'\n'}
                  Cancellations must be requested within 1 hour of the order
                  being placed and within our service hours (Monday-Friday, 9:30
                  AM-5 PM EST/GMT). While we cannot guarantee cancellations, we
                  will try our best to accommodate where possible. Please note,
                  we have very limited support on weekends and public/bank
                  holidays.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p> Can I remove products from my order?</p>
                </Accordion.Header>
                <Accordion.Body>
                  Unfortunately, once an order has been placed, we cannot make
                  any edits or substitutions.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p>
                    Can I change my shipping address on an order that’s been
                    placed?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  We are unable to update or amend shipping addresses once an
                  order has been placed. If there is an error in your shipping
                  address, we kindly recommend requesting a cancellation and
                  placing a new order with the correct shipping address.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p> How many products can I order at a time?</p>
                </Accordion.Header>
                <Accordion.Body>
                  As we want to be fair to all of our customers, many factors
                  are taken in when we review an order including which warehouse
                  is fulfilling the order, shipping fees, frequency of orders,
                  and the individual number of units contained within that
                  order.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <p> There’s an item missing/damaged! My order is wrong. </p>
                </Accordion.Header>
                <Accordion.Body style={{ whiteSpace: 'pre-lie' }}>
                  Oh no! We’re so sorry about this. We do our best to make sure
                  orders are packaged correctly but sometimes people make
                  mistakes. Please fill our contact form with your order number,
                  photo of all the products received, and a photo of the packing
                  slip with any initials marked clearly visible.
                  {'\n'}
                  {'\n'}
                  Any damaged or incorrect orders should be brought to our
                  attention within 14 days of receipt. We may request additional
                  photos of the damaged items so please do not throw them away
                  until you have connected with our team or we will not be able
                  to further assist.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* --- BILLING + PAYMENTS --- */}
            <h6 ref={billingPaymentRef}>BILLING + PAYMENTS</h6>
            <Accordion flush>
              <Accordion.Item eventKey="shippingDelivery">
                <Accordion.Header>
                  <p> When will my payment be processed?</p>
                </Accordion.Header>
                <Accordion.Body>
                  Your card will be charged during checkout once your order has
                  been placed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p> Why have you charged me more than the total?</p>
                </Accordion.Header>
                <Accordion.Body>
                  We only charge the amount calculated during checkout and
                  displayed on your invoice. However, if you are using a prepaid
                  card, there may be temporary holds or fees associated with
                  card usage. Please refer to the terms and conditions of the
                  card you are using for further details. If you are not using a
                  prepaid card and believe you have been overcharged, please do
                  contact us and well be happy to assist you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p> What methods of payment do you currently accept? </p>
                </Accordion.Header>
                <Accordion.Body>
                  We accept all major credit cards. When paying by credit card,
                  your name and billing address must match the address on file
                  with the card issuer. We also accept PayPal and credit card
                  gift cards. Credit card gift cards can only be redeemed for
                  orders less than the full amount available on the credit card
                  gift card. We do not accept online payments from digital
                  banking apps such as Revolut, Monzo, etc.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* --- RETURNS --- */}
            <h6 ref={returnRef}>RETURNS</h6>
            <Accordion flush>
              <Accordion.Item eventKey="returns">
                <Accordion.Header>
                  <p>What is your return policy?</p>
                </Accordion.Header>
                <Accordion.Body style={{ whiteSpace: 'pre-line' }}>
                  We’re sorry to hear that it’s not working out. If you are not
                  satisfied with your purchase made through the DECIEM website
                  or one of our DECIEM retail stores, we are happy to let you
                  know that you can return any unwanted products that are at
                  least 50% full within 365 days (1 year) from the date of
                  purchase as stated on your invoice/receipt.
                  {'\n'}
                  {'\n'}
                  Please note that items purchased as a set (e.g. The Ordinary
                  No-Brainer Set, NIOD Set No. 1) must be returned in full in
                  order to be eligible for a refund. Partial refunds will not be
                  offered.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p>
                    Can I return products without their original
                    boxes/packaging? Can I return multiple orders in the same
                    box?
                  </p>
                </Accordion.Header>
                <Accordion.Body>Absolutely!</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p> I had a reaction, can I return this product?</p>
                </Accordion.Header>
                <Accordion.Body>Of course.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p> Are shipping fees refundable?</p>
                </Accordion.Header>
                <Accordion.Body>
                  At this time, all shipping fees are non-refundable. We
                  apologize for any inconvenience this may cause.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <p>
                    I bought my product from another retailer, can I return it
                    to DECIEM?
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  Unfortunately, we are only able to offer returns for products
                  that were purchased from our website/stores directly. In this
                  case, we must honour the refund policy that has been put in
                  place by the retailer the product has been originally
                  purchased from.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* --- TECHNICAL + OTHER --- */}
            <h6 ref={technicalOtherRef}>TECHNICAL + OTHER</h6>
            <Accordion flush>
              <Accordion.Item eventKey="technicalOther">
                <Accordion.Header>
                  <p> What information does DECIEM collect?</p>
                </Accordion.Header>
                <Accordion.Body>
                  We may obtain information about you from various sources,
                  however, it is always your choice to provide this information,
                  and you may withdraw consent at any time. We may collect
                  information when you purchase goods or services from us,
                  provide it to us at one of our stores, on our website
                  (www.deciem.com), when you participate in an offer or
                  promotion, via our social media pages, at one of our events,
                  or if you contact us by telephone.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p> How is my information being protected?</p>
                </Accordion.Header>
                <Accordion.Body style={{ whiteSpace: 'pre-line' }}>
                  We maintain appropriate administrative, technical, and
                  physical safeguards designed to protect the information you
                  provide against accidental, unlawful, or unauthorized
                  destruction, loss, alteration, access, disclosure, or use.
                  However, no security system is perfect, and we cannot promise
                  that information about you will remain secure in all
                  circumstances, including the security of your data during
                  transmission to us.
                  {'\n'}
                  {'\n'}
                  We use physical, technical, organizational, and administrative
                  safeguards to help protect your information from unauthorized
                  access or loss. For example, we use technology like encryption
                  to protect sensitive information (such as your name and
                  address) during transmission. We will retain your information
                  for as long as the information is needed for the purposes
                  listed herein, and for any additional period that may be
                  required or permitted by law.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p>
                    Does DECIEM use or share information with any third parties?
                  </p>
                </Accordion.Header>
                <Accordion.Body style={{ whiteSpace: 'pre-line' }}>
                  Our Website(s) may contain links to other third party
                  websites. Third parties that have content or services on our
                  site such as a social feature, analytics service, or an
                  advertising network partner, may obtain information about your
                  browsing or usage habits while you visit our website and while
                  you visit third party websites that use the same content or
                  services.
                  {'\n'}
                  {'\n'}
                  These other websites may have their own privacy policies and
                  terms and conditions that are not governed by this Policy. We
                  are not responsible for the privacy practices or the content
                  of any website(s) owned and operated by any such third
                  parties. Other websites may collect and treat information
                  collected differently, so we encourage you to carefully read
                  and review the privacy policy for each website you visit. Any
                  links from this Website to other websites, or references to
                  products, services or publications other than those of DECIEM,
                  do not imply the endorsement or approval of such websites,
                  products, services or publications by DECIEM.
                  {'\n'}
                  {'\n'}
                  It is always your choice to provide this information, and you
                  may withdraw consent at any time.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <div
          id="faqs-upBtn"
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
        >
          <img src={Up} onClick={scrollToTop}></img>
        </div>
      </section>
    </Container>
  );
};

export default Faqs;
