import React from "react";
import Header from "../components/Header";
import ActivityButtons from "../components/ActivityButtons"; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 col-2 bg-black vh-100 left-0">
            <div className="col-md-6 col-8 bg-danger vh-100 mx-auto"></div>
          </div>
          <div className="col-md-10 col-8 w-full bg-black"><Header /></div>
          <div className="col-md-10 col-8 w-full bg-black"><ActivityButtons /></div>
          <div className="col-md-1 col-2 bg-black vh-100 fixed right-0">
            <div className="col-md-6 col-8 bg-primary vh-100 mx-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
}