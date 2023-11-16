// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Zoom } from 'react-awesome-reveal';
import './Promotion.css';

const Promotion = () => {
  return (
    <Container>
      <section id="promotion-content">
        <Row>
          <Zoom>
            <Col>
              <h1>IMPORTANT-BUT-BORING BITS</h1>
              <p style={{ textDecoration: 'underline' }}>
                Natural Moisturizing Factors + HA - 100ml Gift with Purchase
              </p>
              <p>
                Natural Moisturizing Factors + HA - 100ml Gift with Purchase
                (the “Promotion”) is available to Eligible Customers on
                TheOrdinary.com from 9:00AM EST November 15th, 2023 to 11:59PM
                EST November 23rd, 2023 or at standalone DECIEM/The Ordinary
                stores during store hours, while supplies last (the “Promotion
                Period”). For online purchases, Promotion discount code must be
                entered during checkout at TheOrdinary.com on a Qualifying
                Purchase. For in-store purchases, Promotion will be applied
                automatically at checkout on a Qualifying Purchase.
              </p>

              <p>
                Promotion is only available to customers shopping at standalone
                DECIEM/The Ordinary stores and customers residing in countries
                that DECIEM is currently shipping to (“Eligible Customers”).
                Eligible Customers who purchase any The Ordinary product in a
                single transaction (a “Qualifying Purchase”) will receive one
                (1) free The Ordinary Natural Moisturizing Factors + HA - 100ml
                (the “Gift”). Limit of one (1) Gift per Eligible Customer. The
                Gift is subject to stock availability. If Gift stock runs out
                prior to the end of the Promotion Period, then this Promotion
                ends.
              </p>
              <p>
                Promotion cannot be combined with other offers except for
                DECIEM’s “November Promotion” and any other promotion DECIEM may
                determine in its discretion. Qualifying Purchase excludes
                applicable taxes, brokerage, duties and custom fees, shipping
                and delivery charges, gift cards, NIOD and other Deciem brands
                (including, without limitation, Abnomaly, DECIEM, HIF, Hylamide
                and The Chemistry Brand) and other items not discountable or
                excluded by law.
              </p>

              <p>
                Promotion applies to available products and stock at the time of
                purchase, no rainchecks or price adjustments. Promotion is not
                valid on purchases outside of the Promotion Period, cannot be
                combined with other offers, is non-transferable and there is no
                cash value or alternatives. Gift is not for commercial or
                re-sale purposes.
              </p>
              <p>
                DECIEM reserves the right, without prior notice, to (i)
                discontinue this offer/promotion at any time; (ii) cancel or
                refuse any individual's benefit from it, including, without
                limitation, individuals creating multiple user accounts; (iii)
                amend these terms and conditions; and (iv) limit the number of
                promotional redemptions.
              </p>

              <p>
                Except as otherwise set out herein, all purchases are subject to
                DECIEM’s standard Terms and Conditions (which can be found at
                During the Promotion Period, each customer (cardholder,
                household) will be limited to 5 units per product (i.e. SKU) and
                5 units per product set, and limited to a total of 30 units
                total per order, at the promotional price and the promotion does
                not apply to gift cardshttps://deciem.com/ca/terms.html) and
                Shipping + Delivery Terms (which can be found at
                https://theordinary.com/en-ca/faq.html#shipping_delivery) which
                are expressly incorporated herein by reference.
              </p>
            </Col>
          </Zoom>
        </Row>
      </section>
    </Container>
  );
};

export default Promotion;
