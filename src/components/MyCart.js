import React from "react";
import {
    Row,
    Col,
    Container,
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Form
      } from "reactstrap";

const MyCart = (props) => {
    return (
        <React.Fragment>
            <Container fluid={true}>
                <Row className="m-3">
                    <Col lg="8">
                        <Card className="m-4 p-3">
                            <Row>
                                <Col xs="6">
                                <img class="img-fluid w-100" src="assets/vhs.svg" alt="vhs" />
                                </Col>
                                <Col className="d-flex my-auto">
                                <h1>X5</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="m-4 p-3">
                            <ListGroup className="ml-2 mr-2">
                                <ListGroupItem>
                                    <strong>Subtotal</strong>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Shipping</strong>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5><strong>Total</strong></h5>
                                </ListGroupItem>
                            </ListGroup>
                            <Button
                                type="button"
                                className="btn-secondary btn-block my-3 mr-5 p-2"
                                >
                            Checkout
                            </Button>
                        </Card>
                        <h5>Add a Promo Code</h5>
                    <Form className="md-outline mb-0">
                        <input
                            type="text"
                            id="discount-code"
                            class="form-control"
                            placeholder="Enter Code"
                        />
                    </Form>
                    <div class ="mb-3 pt-4">
                    <h5 class="mb-4">We Accept</h5>
                    <img
                        class="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa"
                    />
                    <img
                        class="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express"
                    />
                    <img
                        class="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard"
                    />
                    <img
                        class="mr-2"
                        width="45px"
                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                        alt="PayPal acceptance mark"
                    />
                    </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
      );
    }
export default MyCart;
