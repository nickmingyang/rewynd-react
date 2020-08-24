import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <h5>REWYND</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
            </div>

            <div className="col text-center">
              <p>
                <i class="fa fa-envelope-o"></i> Stay up to date on the latest from REWYND
              </p>
              <div className="text-center">
                <input
                  type="email"
                  id="footerEmail"
                  name="footerEmail"
                  placeholder="Email"
                />{" "}
                <button type="submit" class="btn btn-danger">
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
