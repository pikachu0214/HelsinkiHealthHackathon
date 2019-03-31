import React, { Component } from "react";
import Header from "./Header";
class ScreenTwo extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h3 className="head">
          Do you grant data access to the following applications?
        </h3>
        <hr className="head" />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck2"
          />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Spotify
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Fin Sights
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Happy Not Happy
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            T2 Mood Tracker
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Facebook
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Google Maps
          </label>
        </div>
        <button type="button" className="btn btn-danger track-mode" >Submit</button>

      </div>
    );
  }
}

export default ScreenTwo;
