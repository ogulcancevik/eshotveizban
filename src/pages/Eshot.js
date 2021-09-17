import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Cumartesi from "../components/Eshot/Cumartesi";
import Hatlar from "../components/Eshot/Hatlar";
import Navbar from "../components/Eshot/Navbar";
import Pazar from "../components/Eshot/Pazar";
import Saatler from "../components/Eshot/Saatler";
import Header from "../components/Header";

const Eshot = () => {
  const [Hatid, setHatid] = React.useState("5");

  const [Haftaici, setHaftaici] = React.useState([]);
  const [Cmrts, setCmrts] = React.useState([]);
  const [Pzr, setPzr] = React.useState([]);
  React.useEffect(() => {
    const getSaatler = async () => {
      const res = await axios.get(
        `https://openapi.izmir.bel.tr/api/eshot/hareketsaatleri/${Hatid}`
      );
      const haftaici = await res.data.HareketSaatleriHici;
      setHaftaici(haftaici);
      const cumartesi = await res.data.HareketSaatleriCtesi;
      setCmrts(cumartesi);
      const pazar = await res.data.HareketSaatleriPazar;
      setPzr(pazar);
    };
    getSaatler();
    console.log();
  }, [Hatid]);
   
  return (
    <>
    <Header/>
          <Navbar />
      <Row className="flex flex-row justify-around w-screen">
        <Col md={3} className="flex justify-center">
          <Hatlar Hatid={Hatid} setHatid={setHatid} />
        </Col>
        <Col md={3} className="flex justify-center">
          <Saatler Haftaici={Haftaici} />
        </Col>
        <Col md={3} className="flex justify-center">
          <Cumartesi Cmrts={Cmrts} />
        </Col>
        <Col md={3} className="flex justify-center">
          <Pazar Pzr={Pzr} />
        </Col>
      </Row>
    </>
  );
};

export default Eshot;
