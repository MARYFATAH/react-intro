import React from "react";
import maryamImage from "../assets/maryam.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export function Card({ name, age, location, gitLink }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-sm mb-4">
            <img src={maryamImage} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title text-center">{name}</h5>
              <p className="card-text">
                <strong>Age:</strong> {age}
              </p>
              <p className="card-text">
                <strong>Location:</strong> {location}
              </p>
              <div className="d-grid">
                <a
                  href={gitLink}
                  className="btn btn-primary btn-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
