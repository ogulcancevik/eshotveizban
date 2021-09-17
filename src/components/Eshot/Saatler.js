import React from "react";
import { Table } from "react-bootstrap";

const Saatler = ({ Haftaici }) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="text-center font-semibold text-xl p-1 mb-1 border">
        HAFTAİÇİ
      </div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-sm">
            <th>İLK DURAK KALKIŞ</th>
            <th>SON DURAK KALKIŞ</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Haftaici.map((item) => {
            return (
              <tr>
                <td>{item.GidisSaat}</td>
                <td>{item.DonusSaat}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Saatler;
