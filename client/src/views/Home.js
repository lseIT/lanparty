import React from "react";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (<>
 <div className="container-fluid">
    <div className="row">
      <div className="col-2 bg-primary vh-100 position-fixed left-0">Componenta Stânga (50px)</div>
      <div className="col-8"><Header/></div>
      <div className="col-2 bg-danger vh-100 position-fixed right-0">Componenta Dreapta (50px)</div>
    </div>
  </div>
   

    </>
   
  );
}