import React from "react";
import { Table, Container } from "react-bootstrap";

const Saatler = ({ Trensaatleri }) => {
  return (
    <div className="w-screen sm:mt-2">
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr className="text-base text-center">
              <th>HAREKET İSTASYONU</th>
              <th>VARIŞ İSTASYONU</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Trensaatleri.map((item) => {
              return (
                <tr>
                  <td>{item.HareketSaati.slice(0, 5)}</td>
                  <td>{item.VarisSaati.slice(0, 5)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Saatler;
