import React from "react";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 bg-primary vh-100 left-0">Componenta Stânga (10%)</div>
          <div className="col-10 w-full"><Header /></div>
          <div className="col-1 bg-danger vh-100 fixed right-0">Componenta Dreapta (10%)</div>
        </div>
      </div>
    </>
  );
}
