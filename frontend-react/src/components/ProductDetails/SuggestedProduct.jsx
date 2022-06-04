import React, { Component, Fragment } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import classes from "./SuggestedProduct.module.css";

class SuggestedProduct extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${classes["suggested-container"]}`}>
          <Container className="px-3">
            <h2 className="section-header">You may also like</h2>
            {/* Start Product Card */}
            <div className="mx-2">
              <Row>
                <Col
                  className="mb-2 p-1"
                  key={1}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={2}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/8126efc945c1d305acefcb33349bf8ae.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={3}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={4}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={5}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={5}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="mb-2 p-1"
                  key={6}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={4}
                  xs={6}
                >
                  <Card className="card-product">
                    <Card.Img
                      variant="top"
                      src="https://lzd-img-global.slatic.net/g/p/35f1bfaa1d8c001450cc6634f455ff92.jpg_200x200q80.jpg_.webp"
                      alt="3b-button-3"
                    />
                    <Card.Body>
                      <span className="card-product-title">
                        Spiderman Gloves
                      </span>
                      <br />
                      <span className="card-product-price">₱2.00</span>
                      <br />
                      <strike className="card-product-discount">₱799.00</strike>
                      <span className="card-product-discount-percent">
                        {" "}
                        -71%
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
            {/* End Product Card */}
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default SuggestedProduct;