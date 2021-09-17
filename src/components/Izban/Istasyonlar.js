import React from "react";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

const Istasyonlar = ({ setTrensaatleri }) => {
  const [Duraklar, setDuraklar] = React.useState([]);
  const [GidisId, setGidisId] = React.useState("1");
  const [DonusId, setDonusId] = React.useState("1");
  const [Aktarma, setAktarma] = React.useState("");
  const [httMi, sethttMi] = React.useState(false);
  const [Ucret, setUcret] = React.useState([]);

  React.useEffect(() => {
    const getIstasyonlar = async () => {
      const res = await axios.get(
        "https://openapi.izmir.bel.tr/api/izban/istasyonlar"
      );
      const data = await res.data;
      setDuraklar(data);
    };
    getIstasyonlar();
  }, []);

  const Saatler = async () => {
    const res2 = await axios.get(
      `https://openapi.izmir.bel.tr/api/izban/sefersaatleri/${GidisId}/${DonusId}`
    );
    const data2 = await res2.data;
    setTrensaatleri(data2);
  };

  const UcretHesaplama = async () => {
    const res = await axios.get(
      `https://openapi.izmir.bel.tr/api/izban/tutarhesaplama/${GidisId}/${DonusId}/${Aktarma}/${httMi}`
    );
    const data = await res.data;
    setUcret(data);
  };
  return (
    <div className="flex flex-col border-gray w-3/4 items-center">
      <Form.Select
        className="mt-2"
        onChange={(e) => setGidisId(e.target.value)}
      >
        {Duraklar.map((item) => (
          <option value={item.IstasyonId}>{item.IstasyonAdi}</option>
        ))}
      </Form.Select>
      <Form.Select
        className="mt-2"
        onChange={(e) => setDonusId(e.target.value)}
      >
        {Duraklar.map((item) => (
          <option value={item.IstasyonId}>{item.IstasyonAdi}</option>
        ))}
      </Form.Select>
      <Form.Control
        className="mt-2"
        type="number"
        placeholder="AKTARMA SAYISI"
        onChange={(e) => setAktarma(e.target.value)}
      />
      <Form.Check
        label="HALK TAŞIT TARİFESİ"
        className="mt-2"
        onChange={() => sethttMi(!httMi)}
      />
      <div className="flex">
        <button
          className="bg-izbanblue p-2 w-40 text-white rounded-sm mt-2"
          onClick={Saatler}
        >
          SAATLERİ SORGULA
        </button>
        <button
          className="bg-izbanblue p-2 w-40 text-white rounded-sm mt-2 ml-2"
          onClick={UcretHesaplama}
        >
          ÜCRET HESAPLA
        </button>
      </div>
      <Table striped bordered hover className="mt-2">
        <tbody className="text-center">
          <tr>
            <th>GİDİLEN KM</th>
            <td>{Ucret.ToplamKm}</td>
          </tr>
          <tr>
            <th>TAM ÜCRET</th>
            <td>{Ucret.TamUcret}</td>
          </tr>
          <tr>
            <th>ÖĞRETMEN ÜCRET</th>
            <td>{Ucret.OgretmenUcret}</td>
          </tr>
          <tr>
            <th>ÖĞRENCİ ÜCRET</th>
            <td>{Ucret.OgrenciUcret}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Istasyonlar;
