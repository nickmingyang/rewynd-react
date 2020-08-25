import React from "react";
import {
Row,
Col,
Card,
CardBody,
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption,
CardSubtitle,
CardText,
CardTitle
  } from "reactstrap";
import ResultsCarousel from "./Carousel";

function Home(props) {
    return (
        <React.Fragment>
            <Row>
                <Col className="col-12 ml-4 mt-4">
                <h1>What is Rewynd?</h1>
                </Col>
                <Col xs= "12">
                    <Row>
                        <Col md="6">
                            <Card className="m-4 p-3">
                                <iframe
                                width="100%"
                                height="450px"
                                src="https://www.youtube.com/embed/cyuJZpDo_4w"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                ></iframe>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Row>
                                <Col md="12">
                                    <Card className="m-4 p-3">
                                        <h2>Heading 1</h2>
                                        <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                                        </p>
                                    </Card>
                                </Col>
                                <Col md="12">
                                    <Card className="m-4 p-3">
                                        <h2>Heading 2</h2>
                                        <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
            <Col xs="12" className=" ml-4 mt-4">
                <h1>Results</h1>
            </Col>
            <Col xs="auto">
            <ResultsCarousel/>
            </Col>
            </Row>
            <Row>
                <Col xs="12" className="ml-4 mt-4">
                    <h1>Features</h1>
                </Col>
                <Col lg="4">
                    <Card className="m-4">
                        <img
                            class="card-img-top img-fluid"
                            src="/img/histogram.png"
                            alt="histogram"
                        />
                    <CardBody className="border-secondary">
                    <CardTitle className="p-2">
                    <h5>Color Balancing</h5>
                    </CardTitle>
                    <CardText className="p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="m-4">
                        <img
                            class="card-img-top img-fluid"
                            src="/img/histogram.png"
                            alt="histogram"
                        />
                    <CardBody className="border-secondary">
                    <CardTitle className="p-2">
                    <h5>Denoising</h5>
                    </CardTitle>
                    <CardText className="p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="m-4">
                        <img
                            class="card-img-top img-fluid"
                            src="/img/histogram.png"
                            alt="histogram"
                        />
                    <CardBody className="border-secondary">
                    <CardTitle className="p-2">
                    <h5>Upscaling</h5>
                    </CardTitle>
                    <CardText className="p-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default Home;