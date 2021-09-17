import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const Hatlar = ({ Hatid, setHatid }) => {
  const [TumHatlar, setTumHatlar] = React.useState([]);
  const [Duraklar, setDuraklar] = React.useState([]);
  const [Yon, setYon] = React.useState("1");

  React.useEffect(() => {
    const getHatlar = async () => {
      const res = await axios.get(
        "https://openapi.izmir.bel.tr/api/eshot/hatlar"
      );
      const data = await res.data.Hatlar;
      setTumHatlar(data);
      const res2 = await axios.get(
        `https://openapi.izmir.bel.tr/api/eshot/hatduraklari/${Hatid}/${Yon}`
      );
      const data2 = await res2.data.Duraklar;
      setDuraklar(data2);
    };

    getHatlar();
  }, [Hatid, Yon]);

  return (
    <>
      {/* SOL TARAF */}
      <div className="flex flex-col border-gray border">
        {/* HAT SEÇ YAZISI */}
        <div className="bg-softwhite mt-2 p-1 flex justify-center border border-gray">
          <h1 className="text-base text-gray">HAT SEÇİNİZ</h1>
        </div>
        {/* SELECT FORM */}
        <Form.Select
          className="mt-2"
          onChange={(e) => setHatid(e.target.value)}
        >
          {TumHatlar.map((item) => (
            <option value={item.HimHatId}>
              {item.HimHatId}-{item.Adi}
            </option>
          ))}
        </Form.Select>
        {/* GİDİŞ-DÖNÜŞ BUTONLARI */}
        <div className="flex flex-row justify-center mt-2">
          <button
            className="bg-buttonred text-white font-semibold p-1 w-32 rounded-sm"
            onClick={() => setYon("1")}
          >
            GİDİŞ
          </button>
          <button
            className="bg-softwhite text-gray font-semibold p-1 w-32 rounded-sm"
            onClick={() => setYon("2")}
          >
            DÖNÜŞ
          </button>
        </div>
        {/* DURAKLAR */}
        <div className="bg-softwhite mt-2 p-1 flex flex-col items-center justify-center border border-gray">
          <h1 className="text-base text-gray">HATTIN GEÇTİĞİ DURAKLAR</h1>
        </div>
        <div className="flex flex-col">
          {Duraklar.map((item, key) => (
            <p className="ml-2">
              {key + 1}. {item.Adi}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hatlar;
