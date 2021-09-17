import React from "react";
import Istasyonlar from "../components/Izban/Istasyonlar";
import Navbar from "../components/Izban/Navbar";
import Saatler from "../components/Izban/Saatler";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const Izban = () => {
  const [Trensaatleri, setTrensaatleri] = React.useState([]);

  return (
    <>
    <Header/>
      <Navbar />
      <Container fluid>
        <Row className="mt-2">
        <Col xxl={6} xl={6} lg={6} md={6} className="flex justify-center">
        <Istasyonlar setTrensaatleri={setTrensaatleri} />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} className="flex justify-center">
        <Saatler Trensaatleri={Trensaatleri} />
        </Col>
        </Row>
      </Container>
    </>
  );
};

export default Izban;
